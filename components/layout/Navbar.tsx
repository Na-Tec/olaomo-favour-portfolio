'use client';

import Link from 'next/link';
import { Moon, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

        <button
          aria-label="Toggle theme"
          className="theme-btn"
        >
          <Moon size={17} />
        </button>

      </div>

      {/* MOBILE NAVBAR */}
      <div className="navbar-mobile">

        {/* LOGO */}
        <Link href="/" className="mobile-logo">
          O<span className="text-[#c0392b]">.</span>F
        </Link>

        {/* RIGHT SIDE */}
        <div className="mobile-actions">

          <button
            aria-label="Toggle theme"
            className="mobile-theme-btn"
          >
            <Moon size={18} />
          </button>

          <button
            aria-label="Menu"
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
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