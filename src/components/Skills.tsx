"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { skills } from "@/data/skills";
import Icon from "./Icon";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="SKILLS"
          title="What I bring to a project"
          description="A blend of AI, automation, and full-stack engineering — used together, not in isolation."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className="glass-panel group relative overflow-hidden rounded-2xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-azure/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
              <span className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-glow/10 text-cyan-glow">
                <Icon name={skill.icon} className="h-5 w-5" />
              </span>
              <h3 className="relative font-display text-lg font-medium text-white">
                {skill.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-mist">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
