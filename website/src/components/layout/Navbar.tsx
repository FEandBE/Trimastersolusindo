"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Landmark } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Layanan", href: "#services" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Industri", href: "#industry" },
    { name: "Wawasan", href: "#insights" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass border-b border-white/10" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-background group-hover:rotate-12 transition-transform">
            <Landmark size={24} />
          </div>
          <div>
            <span className="text-xl font-black tracking-tighter block leading-none">TRI MASTER</span>
            <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">Solusindo</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="px-6 py-2.5 bg-white text-background font-bold rounded-lg hover:bg-accent hover:text-background transition-all">
            Hubungi Kami
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full py-4 bg-accent text-background font-bold rounded-xl mt-4">
            Hubungi Kami
          </button>
        </motion.div>
      )}
    </nav>
  );
}
