"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="SERVICES"
          title="How I can help"
          description="Available for freelance projects, internships, and collaborations."
        />

        <div className="mt-14 divide-y divide-white/5 border-y border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col gap-2 py-6 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-7"
            >
              <div className="flex items-center gap-4">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow/60 transition-colors group-hover:bg-cyan-glow" />
                <h3 className="font-display text-xl font-medium text-white transition-colors group-hover:text-cyan-glow sm:text-2xl">
                  {service.title}
                </h3>
              </div>
              <p className="max-w-md text-sm text-mist sm:text-right">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
