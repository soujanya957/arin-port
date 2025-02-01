"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white text-xl font-bold">
            Arin Idhant
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-white hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
