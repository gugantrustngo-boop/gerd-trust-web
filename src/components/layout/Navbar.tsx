"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Focus Areas", href: "#focus-areas" },
  { name: "Compliance", href: "#compliance" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-brand-primary">
              <Image 
                src="/logo.jpeg" 
                alt="GERD Trust Logo" 
                fill 
                className="object-cover"
                sizes="(max-width: 48px) 100vw, 48px"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl leading-none text-brand-primary">
                GERD
              </span>
              <span className="font-sans text-xs font-semibold text-brand-secondary tracking-widest">
                TRUST
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <Link href="#donate">
                <Button className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold shadow-md">
                  Donate Now
                </Button>
              </Link>
            </div>
            <button 
              className="md:hidden text-slate-600 p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg">
          <div className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-brand-primary px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#donate" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white mt-2">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
