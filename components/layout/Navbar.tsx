'use client';

import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar-container">

      {/* DESKTOP NAVBAR */}
      <div className="navbar-desktop">

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

        {/* THEME TOGGLE */}
        <button
          aria-label="Toggle theme"
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
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
            {theme === 'dark' ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
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