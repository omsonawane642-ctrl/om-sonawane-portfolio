"use client";

import { motion } from "framer-motion";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/profile";

const stats = [
  { label: "Focus", value: "AI & Automation" },
  { label: "Stack", value: "JavaScript / TypeScript" },
  { label: "Based in", value: "India" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="ABOUT"
          title="A developer who likes making things run on their own."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* Portrait */}
          <Reveal delay={0.1} className="relative mx-auto w-full max-w-[430px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="group relative overflow-hidden rounded-3xl border border-cyan-glow/40 bg-void shadow-[0_0_45px_rgba(94,225,255,0.12)]"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-void/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -inset-1 z-0 rounded-3xl bg-gradient-to-br from-cyan-glow/20 via-transparent to-amber-400/20 blur-xl opacity-70" />
              <img
                src="/om-portrait.png"
                alt="Portrait of Om Sonawane"
                className="relative z-[1] block aspect-[4/5] w-full object-cover object-top grayscale transition duration-700 group-hover:grayscale-0"
              />
              <div className="absolute bottom-5 left-5 z-20 rounded-full border border-white/10 bg-black/45 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-cyan-glow backdrop-blur-md">
                OM SONAWANE
              </div>
            </motion.div>
          </Reveal>

          {/* About copy */}
          <div>
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-mist">
                Hi, I&apos;m {profile.name}, a Computer Engineering student and developer
                interested in AI, automation, and modern web development. I like taking a
                slow, manual process and turning it into something that just works —
                whether that&apos;s a voice agent answering calls, a script quietly moving
                data between tools, or a website built to actually convert visitors.
              </p>
              <p className="mt-5 leading-relaxed text-mist">
                My work sits at the intersection of practical engineering and applied AI:
                clean code, dependable systems, and interfaces that feel considered rather
                than default.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="glass-panel mt-8 rounded-2xl p-6">
                <ul className="space-y-5">
                  {stats.map((s) => (
                    <li
                      key={s.label}
                      className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-mono text-xs tracking-wide text-mist">{s.label}</span>
                      <span className="text-sm font-medium text-white">{s.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
