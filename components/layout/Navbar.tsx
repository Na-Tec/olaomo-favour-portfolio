'use client';

import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/research', label: 'Research' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const initialTheme = useMemo<'dark' | 'light'>(() => {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.classList.contains('light') ? 'light' : 'dark';
  }, []);
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar-container">

      {/* DESKTOP NAVBAR */}
      <div className="navbar-desktop">

        {/* LOGO */}
        <Link href="/" className="desktop-logo">
          O<span className="text-[var(--accent)]">.</span>F
        </Link>
        
        {/* NAV LINKS */}
        <div className="desktop-nav-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
          
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        
        {/* THEME TOGGLE */}
        <button
          aria-label="Toggle theme"
          className="theme-btn"
          onClick={toggleTheme}
        >
          <span className="theme-icon theme-icon--sun" aria-hidden="true">
            <Sun size={18} />
          </span>
          <span className="theme-icon theme-icon--moon" aria-hidden="true">
            <Moon size={18} />
          </span>
        </button>
        
      </div>

      {/* MOBILE NAVBAR */}
      <div className="navbar-mobile">

        {/* LOGO */}
        <Link href="/" className="mobile-logo">
          O<span className="text-[#c0392b]">.</span>F
        </Link>

        <div className="mobile-actions">

          {/* THEME */}
          <button
            aria-label="Toggle theme"
            className="mobile-theme-btn"
            onClick={toggleTheme}
          >
            <span className="theme-icon theme-icon--sun" aria-hidden="true">
              <Sun size={18} />
            </span>
            <span className="theme-icon theme-icon--moon" aria-hidden="true">
              <Moon size={18} />
            </span>
          </button>

          {/* HAMBURGER */}
          <button
            aria-label="Menu"
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-menu-link ${
                  isActive ? 'nav-link-active' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

        </div>
      )}

    </nav>
  );
}
