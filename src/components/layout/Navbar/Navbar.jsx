import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiLayout, FiSmartphone, FiSearch, FiShare2, FiTarget, FiEdit3,
  FiGrid, FiTrendingUp, FiStar, FiZap, FiClock, FiMapPin, FiShield,
  FiLink2, FiFileText
} from 'react-icons/fi';
import navLinks from '../../../data/navLinks.json';
import './Navbar.scss';

// Maps a submenu item to a Feather icon purely by path/label keywords, so
// the mega menu can show an icon per item without changing navLinks.json.
// Falls back to a generic icon for anything unmatched.
const MEGA_ICON_RULES = [
  [/app-development|smartphone/i, FiSmartphone],
  [/social-media|smo/i, FiShare2],
  [/google-ads|meta-ads|ppc/i, FiTarget],
  [/content|blog/i, FiEdit3],
  [/seo-geo|\baeo\b/i, FiZap],
  [/local-seo/i, FiMapPin],
  [/one-time/i, FiClock],
  [/reputation/i, FiShield],
  [/bad-link/i, FiLink2],
  [/seo/i, FiSearch],
  [/web-development|web-designing|website/i, FiLayout],
  [/portfolio/i, FiGrid],
  [/case-study/i, FiTrendingUp],
  [/reviews/i, FiStar]
];

function getMegaIcon(item) {
  const haystack = `${item.path} ${item.label}`;
  const match = MEGA_ICON_RULES.find(([pattern]) => pattern.test(haystack));
  const Icon = match ? match[1] : FiFileText;
  return <Icon aria-hidden="true" />;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const closeAll = () => {
    setOpen(false);
    setOpenSubmenu(null);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && closeAll();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    document.body.style.maxHeight = '100vh';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.body.style.maxHeight = '';
    };
  }, [open]);

  return (
    <nav className="navbar">
      <button
        type="button"
        className={`burger ${open ? 'burgerOpen' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>

      <ul className={`list ${open ? 'listOpen' : ''}`}>
        {navLinks.map((link) => {
          const hasChildren = Array.isArray(link.children) && link.children.length > 0;
          const isSubmenuOpen = openSubmenu === link.path;

          if (!hasChildren) {
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                  onClick={closeAll}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          }

          return (
            <li
              key={link.path}
              className={`hasSubmenu ${isSubmenuOpen ? 'submenuOpen' : ''}`}
            >
              <span className="linkRow">
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                  onClick={closeAll}
                >
                  {link.label}
                </NavLink>
                <button
                  type="button"
                  className="submenuToggle"
                  aria-label={`Toggle ${link.label} submenu`}
                  aria-expanded={isSubmenuOpen}
                  onClick={() => setOpenSubmenu((s) => (s === link.path ? null : link.path))}
                >
                  <span className="chevron" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
                </button>
              </span>

              <ul
                className="submenu megaMenu"
                style={{ '--menu-cols': Math.min(link.children.length, 3) }}
              >
                {link.children.map((child) => (
                  <li key={child.path}>
                    <NavLink
                      to={child.path}
                      className={({ isActive }) => `submenuLink ${isActive ? 'active' : ''}`}
                      onClick={closeAll}
                    >
                      <span className="submenuIcon">{getMegaIcon(child)}</span>
                      <span className="submenuText">{child.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
