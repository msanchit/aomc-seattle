"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/staff", label: "About" },
  { href: "/clinics", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/generated/logo.png"
              alt="AOMC"
              width={44}
              height={44}
              className="w-11 h-11 rounded-full"
            />
            <div className="leading-tight">
              <span className="text-lg font-bold text-primary block">
                AOMC Seattle
              </span>
              <span className="text-[13px] text-stone-400 hidden sm:block">
                Acupuncture & Oriental Medicine
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-medium text-stone-500 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:2067822126"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-[15px] font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            (206) 782-2126
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-500"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white">
          <nav className="px-5 py-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-[17px] font-medium text-stone-600 hover:text-primary border-b border-stone-100 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:2067822126"
              className="block mt-4 py-4 bg-primary text-white text-lg font-semibold rounded-xl text-center"
            >
              Call (206) 782-2126
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
