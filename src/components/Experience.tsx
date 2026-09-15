"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { timeline } from "@/data/experience";

export default function Experience() {
  return (
    <section id="journey" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="JOURNEY"
          title="How I got here"
          description="A quick timeline of how the learning turned into shipped work."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-glow/60 via-white/10 to-transparent md:left-1/2" />

          <ul className="space-y-10">
            {timeline.map((entry, i) => (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative pl-8 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cyan-glow bg-void ${
                    i % 2 === 0 ? "md:left-auto md:right-[-27px]" : "md:left-[-27px]"
                  }`}
                />
                <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow">
                  {entry.period}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-white">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {entry.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
