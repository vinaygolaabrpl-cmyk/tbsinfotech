<?php
/**
 * Single endpoint used by every form on the site (Contact, Free SEO Audit,
 * Career Application). Each form posts multipart/form-data with a
 * `form_type` field identifying which template + validation to use, so
 * the SMTP wiring only needs to live in one place.
 */

define('TBS_MAIL_HANDLER', true);

header('Content-Type: application/json; charset=utf-8');

function respond(int $status, bool $success, string $message = ''): void
{
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Method not allowed.');
}

$config = require __DIR__ . '/config.php';

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

/** Trim a posted field to a plain string, defaulting to ''. */
function field(string $name): string
{
    return isset($_POST[$name]) ? trim((string) $_POST[$name]) : '';
}

/** Build a readable plain-text email body from ordered [label, value] pairs. */
function buildBody(array $lines): string
{
    $out = [];
    foreach ($lines as [$label, $value]) {
        if ($value === '' || $value === null) {
            continue;
        }
        $out[] = $label === '' ? $value : "{$label}: {$value}";
    }
    return implode("\n", $out);
}

$formType = field('form_type');
$emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';

$subject = '';
$body = '';
$replyToEmail = '';
$replyToName = '';
/** @var array<int, array{path:string,name:string}> $attachments */
$attachments = [];
$tmpFilesToClean = [];

switch ($formType) {
    case 'contact': {
        $name = field('name');
        $email = field('email');
        $phone = field('phone');
        $service = field('service');
        $message = field('message');

        if ($name === '' || $email === '' || !preg_match($emailRegex, $email)) {
            respond(422, false, 'Please provide a valid name and email address.');
        }

        $subject = "Website Enquiry From {$name}";
        $body = buildBody([
            ['Name', $name],
            ['Email', $email],
            ['Phone', $phone],
            ['Service Needed', $service],
            ['', ''],
            ['Message', $message],
        ]);
        $replyToEmail = $email;
        $replyToName = $name;
        break;
    }

    case 'seo_audit': {
        // Honeypot — a filled hidden field means a bot, not a visitor.
        // Report success without sending so the bot doesn't retry.
        if (field('company_website') !== '') {
            respond(200, true);
        }

        $website = field('website');
        $competitor = field('competitor');
        $keywords = field('keywords');
        $name = field('name');
        $phone = field('phone');
        $email = field('email');
        $skype = field('skype');

        if ($website === '' || $name === '' || $email === '' || !preg_match($emailRegex, $email)) {
            respond(422, false, 'Please provide a valid website, name and email address.');
        }

        $subject = "Free SEO Audit Request From {$name}";
        $body = buildBody([
            ['Website', $website],
            ['Competitor', $competitor],
            ['Keywords', $keywords],
            ['', ''],
            ['Name', $name],
            ['Email', $email],
            ['Phone', $phone],
            ['Skype ID', $skype],
        ]);
        $replyToEmail = $email;
        $replyToName = $name;
        break;
    }

    case 'application': {
        $position = field('position');
        $fullName = field('fullName');
        $email = field('email');
        $phone = field('phone');
        $location = field('location');
        $totalExperience = field('totalExperience');
        $relevantExperience = field('relevantExperience');
        $currentCompany = field('currentCompany');
        $currentDesignation = field('currentDesignation');
        $qualification = field('qualification');
        $noticePeriod = field('noticePeriod');
        $salary = field('salary');
        $linkedin = field('linkedin');
        $portfolio = field('portfolio');
        $coverLetter = field('coverLetter');
        $additionalInfo = field('additionalInfo');

        if (
            $fullName === '' || $email === '' || !preg_match($emailRegex, $email)
            || $phone === '' || $location === '' || $totalExperience === ''
            || $qualification === '' || $noticePeriod === ''
        ) {
            respond(422, false, 'Please fill in all required fields with a valid email address.');
        }

        if (!isset($_FILES['resume']) || $_FILES['resume']['error'] === UPLOAD_ERR_NO_FILE) {
            respond(422, false, 'Please attach your resume/CV.');
        }
        if ($_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
            respond(422, false, 'Your resume upload failed. Please try again.');
        }

        $resumeName = $_FILES['resume']['name'];
        $resumeTmpPath = $_FILES['resume']['tmp_name'];
        $maxResumeBytes = 5 * 1024 * 1024;

        if ($_FILES['resume']['size'] > $maxResumeBytes) {
            respond(422, false, 'Resume file must be under 5MB.');
        }
        if (!preg_match('/\.(pdf|docx?|PDF|DOCX?)$/', $resumeName)) {
            respond(422, false, 'Resume must be a PDF or Word document.');
        }

        $attachments[] = ['path' => $resumeTmpPath, 'name' => $resumeName];

        $subject = "Job Application — {$position} — {$fullName}";
        $body = buildBody([
            ['Position Applied For', $position],
            ['Full Name', $fullName],
            ['Email Address', $email],
            ['Phone Number', $phone],
            ['Current Location', $location],
            ['Total Experience', $totalExperience],
            ['Relevant Experience', $relevantExperience],
            ['Current / Previous Company', $currentCompany],
            ['Current Designation', $currentDesignation],
            ['Highest Qualification', $qualification],
            ['Notice Period', $noticePeriod],
            ['Current / Expected Salary', $salary],
            ['LinkedIn Profile', $linkedin],
            ['Portfolio / Website', $portfolio],
            ['', ''],
            ['Cover Letter / Message', $coverLetter],
            ['Additional Information', $additionalInfo],
            ['', ''],
            ['Resume File', $resumeName],
        ]);
        $replyToEmail = $email;
        $replyToName = $fullName;
        break;
    }

    default:
        respond(422, false, 'Unknown form submission.');
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['smtp']['host'];
    $mail->SMTPAuth = $config['smtp']['auth'];
    $mail->Username = $config['smtp']['username'];
    $mail->Password = $config['smtp']['password'];
    $mail->SMTPSecure = $config['smtp']['secure'];
    $mail->Port = $config['smtp']['port'];

    $mail->setFrom($config['from_email'], $config['from_name']);
    $mail->addAddress($config['to_email'], $config['to_name']);
    if ($replyToEmail !== '') {
        $mail->addReplyTo($replyToEmail, $replyToName);
    }

    foreach ($attachments as $attachment) {
        $mail->addAttachment($attachment['path'], $attachment['name']);
    }

    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body = $body;

    $mail->send();
    respond(200, true);
} catch (PHPMailerException $e) {
    error_log('TBS mail send failed: ' . $mail->ErrorInfo);
    respond(500, false, 'Something went wrong sending your message. Please try again shortly.');
} catch (\Throwable $e) {
    error_log('TBS mail send failed: ' . $e->getMessage());
    respond(500, false, 'Something went wrong sending your message. Please try again shortly.');
}
