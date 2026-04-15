"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Reach", href: "#stats" },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-md py-3 border-b border-gray-100"
        : "bg-white py-5 shadow-sm"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-tcp-gold flex items-center justify-center bg-white shadow-sm">
            {/* Replace with actual logo.png once added by user */}
            <Image
              src="/logo.png"
              alt="TCP Logo"
              width={48}
              height={48}
              className="object-contain"
              priority
              onError={(e) => {
                // Fallback if logo not found
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="absolute font-extrabold text-tcp-navy text-xl tracking-tighter">TCP</span>
          </div>
          <div className="flex flex-col text-tcp-navy">
            <span className="font-bold text-lg leading-tight tracking-wide">Tjipta Cahaya Perkasa</span>
            <span className="text-xs tracking-widest text-tcp-gold uppercase font-bold">Trading Company</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-tcp-gold ${isScrolled ? "text-tcp-navy" : "text-tcp-navy md:text-gray-800"
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-tcp-navy hover:bg-tcp-navy-dark text-white font-bold py-2.5 px-7 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-tcp-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-tcp-navy shadow-xlg overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-tcp-navy dark:text-white font-semibold text-lg uppercase tracking-wide border-b border-gray-100 dark:border-gray-800 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-tcp-gold text-tcp-navy font-bold py-3 px-6 rounded-md text-center mt-4 uppercase tracking-widest"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
