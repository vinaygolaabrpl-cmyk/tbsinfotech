import { useTheme } from '../../../hooks/useTheme';
import './ThemeToggle.scss';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
    >
      <span className={`thumb ${isDark ? 'thumbDark' : ''}`}>
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
