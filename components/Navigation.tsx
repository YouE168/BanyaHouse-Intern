"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services & Pricing" }, // ← Changed display name
    { href: "/how-it-works", label: "How It Works" },
    { href: "/cities", label: "Service Areas" },
    { href: "/gift-cards", label: "Gift Cards" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link
            href="/"
            className="font-bold text-xl flex items-center gap-2 flex-shrink-0"
          >
            <Image
              src="/pictures/logo.jpeg"
              alt="BanyaHouse Mobile Sauna Logo"
              width={40}
              height={40}
              className="rounded-full object-contain"
              priority
            />
            <span className="text-primary hidden sm:inline">BanyaHouse</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {/* Click-to-Call Button */}
            <a
              href="tel:+17855013414"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-foreground hover:text-primary transition-colors"
              aria-label="Call BanyaHouse"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">(785) 501-3414</span>
            </a>

            {/* Book Now Button */}
            <Link
              href="/book"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+17855013414"
              className="block px-3 py-2 rounded-lg text-sm font-medium text-primary hover:bg-muted"
              onClick={() => setIsOpen(false)}
            >
              📞 Call (785) 501-3414
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
