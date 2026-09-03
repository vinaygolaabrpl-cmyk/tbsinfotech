<?php
// SMTP + recipient configuration for the site's form-to-email handler.
// This file is included by send-mail.php only; it produces no output on
// its own and is never linked to from the frontend.
// 'password'   => 'itgbsichmdoibhtv',

if (!defined('TBS_MAIL_HANDLER')) {
    http_response_code(403);
    exit;
}

return [
    'smtp' => [
        'host'       => 'smtp.gmail.com',
        'auth'       => true,
        'username'   => 'rahul@absoluteranking.com',
        'password'   => '.... .... .... ....',
        'secure'     => 'tls',
        'port'       => 587,
    ],
    // All form submissions are delivered here.
    'to_email' => 'vinaygola.abrpl@gmail.com',
    'to_name'  => 'TBS Infotech',
    // Must be an address PHPMailer/Gmail is allowed to send as — the SMTP
    // account itself is the safest default.
    'from_email' => 'rahul@absoluteranking.com',
    'from_name'  => 'TBS Infotech Website',
    // Google reCAPTCHA v2 secret key — from https://www.google.com/recaptcha/admin,
    // the same site registration that the frontend's VITE_RECAPTCHA_SITE_KEY
    // (in .env) belongs to. Leave blank to disable server-side verification
    // (e.g. local dev without a key configured).
    'recaptcha_secret' => '',
];
