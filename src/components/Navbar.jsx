"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Dynamic scroll background blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust scroll-position based active section tracking for both desktop and mobile
  useEffect(() => {
    const handleScrollActive = () => {
      const sections = navLinks.map((link) => {
        const element = document.querySelector(link.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: link.href.substring(1),
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive, { passive: true });
    handleScrollActive(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScrollActive);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setActiveSection("home")}
          className="text-2xl font-black tracking-wider text-white group flex items-center gap-1"
        >
          <span className="group-hover:text-cyan-400 transition-colors duration-300">
            Kawser
          </span>
          <span className="text-cyan-400 animate-pulse">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.href.substring(1))}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {/* Background sliding active pill using framer motion */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Resume CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center gap-2 active:scale-95"
          >
            <span>Resume</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition z-50 relative"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={20} className="text-cyan-400" /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Right Side Drawer (Off-canvas Sidebar) */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-40 md:hidden flex justify-end">
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-[300px] h-screen bg-slate-950 border-l border-cyan-500/20 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto z-10"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
                <div className="text-xl font-black tracking-wider text-white flex items-center gap-1">
                  <span>Kawser</span>
                  <span className="text-cyan-400">.</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-400 hover:text-cyan-400 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition"
                  aria-label="Close Menu"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Sidebar Navigation Links */}
              <nav className="flex flex-col gap-2 my-auto py-6">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.href.substring(1));
                        setOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                          : "text-gray-300 hover:text-white hover:bg-slate-900/60"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Sidebar Resume Button Fixed at Bottom */}
              <div className="pt-6 border-t border-slate-800/80">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-center tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <span>Resume</span>
                  <FiArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}