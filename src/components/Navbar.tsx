"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/profile";
import Icon from "./Icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 opacity-100 transition-colors duration-300 pointer-events-none ${
          scrolled ? "bg-void/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <nav className="section-container pointer-events-none flex h-16 items-center justify-between md:h-20">
          <a href="#home" className="focus-ring pointer-events-auto flex items-center gap-3 rounded" aria-label="Om Sonawane home">
            <span className="font-display text-[30px] font-semibold leading-none tracking-[-0.08em] text-gradient-cyan">OS</span>
            <span className="hidden sm:block">
              <span className="block font-display text-base font-semibold leading-tight text-white">OM SONAWANE</span>
              <span className="block text-xs leading-tight text-mist">Computer Engineer</span>
            </span>
          </a>

          <ul className="pointer-events-auto hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring relative text-sm transition-colors ${
                    active === link.href ? "text-white" : "text-mist hover:text-white"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-cyan-glow"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="focus-ring pointer-events-auto hidden rounded-full border border-cyan-glow/40 px-5 py-2 text-sm text-white transition-colors hover:bg-cyan-glow/10 md:inline-block"
          >
            Let&apos;s Talk
          </a>

          <button
            className="focus-ring pointer-events-auto rounded-lg p-2 text-white md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-void/98 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="section-container flex h-16 items-center justify-between">
              <span className="font-display text-lg font-semibold text-white">
                {profile.initials}
              </span>
              <button
                className="focus-ring rounded-lg p-2 text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <Icon name="close" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-start justify-center gap-8 px-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="focus-ring font-display text-3xl text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
