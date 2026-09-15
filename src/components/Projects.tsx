"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Selected work"
          description="A mix of AI systems, automation tools, and web builds. Swap these placeholders for your own work in src/data/projects.ts."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link ?? "#"}
              className="glass-panel focus-ring group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 transition-colors hover:border-cyan-glow/30"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-cyan-glow">
                  {project.category.toUpperCase()}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-mist"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
