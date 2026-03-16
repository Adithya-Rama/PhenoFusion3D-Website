"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#visualisation", label: "Visualisation" },
  { href: "#tech", label: "Technology" },
  { href: "#organisation", label: "Organisation" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050a0a]/90 backdrop-blur-xl border-b border-green-900/40 shadow-lg shadow-green-950/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 20, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 bg-gradient-to-br from-green-400 to-lime-500 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30"
            >
              <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
            </motion.div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-green-400">Pheno</span>
              <span className="text-white">Fusion</span>
              <span className="text-lime-400">3D</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-green-100/70 hover:text-green-300 rounded-md hover:bg-green-900/20 transition-all duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-4 py-1.5 bg-gradient-to-r from-green-500 to-lime-500 text-black text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-200"
            >
              Get Access
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-green-300 hover:bg-green-900/20 rounded-lg transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0a1510]/95 backdrop-blur-xl border-b border-green-900/40 px-6 py-4 flex flex-col gap-2 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 text-green-100/80 hover:text-green-300 hover:bg-green-900/20 rounded-lg transition font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-2 bg-gradient-to-r from-green-500 to-lime-500 text-black text-sm font-semibold rounded-full text-center hover:shadow-lg hover:shadow-green-500/30 transition"
            >
              Get Access
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
