"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/campus-life', label: 'Campus Life' },
  { href: '/about', label: 'About Us' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold text-sh-navy">
            Sacred Heart
          </span>
        </Link>
        <nav className="hidden space-x-6 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase text-sh-navy hover:text-sh-red hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="secondary" size="small">
            Search
          </Button>
          <div className="flex items-center space-x-2 text-sm">
            <span>EN</span>
            <span>|</span>
            <span>ಕನ್ನಡ</span>
            <span>|</span>
            <span>हिन्दी</span>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase text-sh-navy hover:text-sh-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
