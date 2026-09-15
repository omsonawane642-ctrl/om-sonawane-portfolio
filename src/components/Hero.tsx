"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import Icon, { IconName } from "./Icon";
import GlobeScene from "./GlobeScene";

const cards: { label: string; icon: IconName; className: string }[] = [
  { label: "AI VOICE AGENTS", icon: "mic", className: "hero-card card-voice" },
  { label: "WEB DEVELOPMENT", icon: "code", className: "hero-card card-web" },
  { label: "BUSINESS AUTOMATION", icon: "cog", className: "hero-card card-business" },
  { label: "AI AUTOMATION", icon: "ai", className: "hero-card card-ai" },
  { label: "JAVASCRIPT", icon: "code", className: "hero-card card-js" },
  { label: "FULL-STACK DEVELOPMENT", icon: "layers", className: "hero-card card-stack" },
];

function PointerScene() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <GlobeScene pointerRef={pointer} isTouch={false} />;
}

export default function Hero() {
  const stars = useMemo(() => Array.from({ length: 90 }, (_, i) => ({
    left: `${(i * 47.3) % 100}%`,
    top: `${(i * 29.7 + 7) % 100}%`,
    size: `${1 + (i % 3)}px`,
    delay: `${-(i % 8)}s`,
    duration: `${4 + (i % 7)}s`,
  })), []);

  return (
    <section id="home" className="hero-cinematic relative min-h-[100svh] overflow-hidden">
      <div className="hero-space absolute inset-0" />
      <div className="hero-grid absolute inset-0" />
      <div className="hero-stars pointer-events-none absolute inset-0" aria-hidden="true">
        {stars.map((s, i) => <i key={i} style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }} />)}
      </div>
      <div className="hero-aurora aurora-cyan" />
      <div className="hero-aurora aurora-gold" />

      <div className="section-container relative z-10 grid min-h-[100svh] items-center gap-8 pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:pt-16">
        <div className="hero-copy max-w-2xl pb-8 lg:pb-0">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="hero-eyebrow">
            HELLO, I&apos;M <span />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .08 }} className="hero-title">
            <span>OM</span>
            <strong>SONAWANE.</strong>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .18 }} className="hero-role">COMPUTER ENGINEERING STUDENT</motion.p>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .26 }} className="hero-tagline">
            {profile.tagline}<br />I&apos;m Om Sonawane, a computer engineering student / developer.
          </motion.p>

          <div className="hero-pills">
            {[["mic", "AI Voice Agents"], ["cog", "Business Automation"], ["globe", "Web Development"], ["bolt", "AI Automation"]].map(([icon, label]) => (
              <div key={label} className="hero-pill"><Icon name={icon as IconName} />{label}</div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary">View My Work <span>→</span></a>
            <a href="#contact" className="hero-secondary">Contact Me <Icon name="mail" /></a>
          </div>
        </div>

        <div className="hero-scene relative h-[540px] sm:h-[620px] lg:h-[720px]" aria-label="Interactive 3D portfolio scene">
          <div className="scene-horizon" />
          <div className="scene-canvas"><PointerScene /></div>
          <div className="scene-beacon" />
          <div className="scene-platform platform-one" /><div className="scene-platform platform-two" /><div className="scene-platform platform-three" />
          {cards.map((card, i) => (
            <motion.div key={card.label} className={card.className} initial={{ opacity: 0, scale: .9, y: 14 }} animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }} transition={{ opacity: { delay: .45 + i * .08, duration: .6 }, scale: { delay: .45 + i * .08, duration: .6 }, y: { delay: 1 + i * .1, duration: 5 + i % 3, repeat: Infinity, ease: "easeInOut" } }}>
              <span><Icon name={card.icon} /></span><b>{card.label}</b>
            </motion.div>
          ))}
        </div>
      </div>

      <a href="#about" className="hero-scroll"><span>↓</span> SCROLL DOWN <i>⌄</i></a>
      <div className="hero-noise" />
    </section>
  );
}
