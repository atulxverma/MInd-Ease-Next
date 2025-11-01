'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-teal-600" aria-hidden="true" />
            <span className="text-xl font-bold text-gray-900">MindEase</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Button asChild variant="default" className="ml-2 bg-teal-600 hover:bg-teal-700">
              <Link href="/chat">Start Chat</Link>
            </Button>

            {/* Auth Buttons (Clerk) */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="ml-3 border-teal-600 text-teal-600 hover:bg-teal-50">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white ml-2">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-teal-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="w-full mt-2 bg-teal-600 hover:bg-teal-700">
              <Link href="/chat" onClick={() => setIsOpen(false)}>
                Start Chat
              </Link>
            </Button>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" className="w-full border-teal-600 text-teal-600 mt-2">
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white mt-2">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center mt-3">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
