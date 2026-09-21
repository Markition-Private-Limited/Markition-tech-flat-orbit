"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-pill" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Markition home">
          <Image src="/logo.png" alt="Markition" width={34} height={34} priority />
          <span>Markition</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="ghost-action" href="#contact">
            Free Consultation
          </a>
          <a className="primary-action" href="#contact">
            Start a Project
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="mobile-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="mobile-cta" href="#contact" onClick={() => setIsOpen(false)}>
            Start a Project
          </a>
        </div>
      ) : null}
    </header>
  );
}
