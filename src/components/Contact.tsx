"use client";

import { useState, FormEvent } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { profile } from "@/data/profile";
import Icon from "./Icon";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="CONTACT"
          title="Let's build something amazing"
          description="Have a project in mind, or just want to talk shop? Reach out."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.1}>
            <div className="glass-panel h-full rounded-2xl p-8">
              <h3 className="font-display text-lg font-medium text-white">{profile.name}</h3>
              <p className="mt-1 text-sm text-mist">{profile.title}</p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a
                    href={`tel:+91${profile.phone}`}
                    className="focus-ring flex items-center gap-3 text-sm text-mist transition-colors hover:text-white"
                  >
                    <Icon name="phone" className="h-4 w-4 text-cyan-glow" />
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="focus-ring flex items-center gap-3 text-sm text-mist transition-colors hover:text-white"
                  >
                    <Icon name="mail" className="h-4 w-4 text-cyan-glow" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-3 text-sm text-mist transition-colors hover:text-white"
                  >
                    <Icon name="linkedin" className="h-4 w-4 text-cyan-glow" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex items-center gap-3 text-sm text-mist transition-colors hover:text-white"
                  >
                    <Icon name="github" className="h-4 w-4 text-cyan-glow" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-panel h-full rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-mist">
                  Name
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/40"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-mist">
                  Email
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="focus-ring rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/40"
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="mt-5 flex flex-col gap-2 text-sm text-mist">
                Message
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="focus-ring resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-mist/40"
                  placeholder="Tell me about your project..."
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-glow px-7 py-3 text-sm font-medium text-void shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                <Icon name="send" className="h-4 w-4" />
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="mt-4 text-sm text-cyan-glow">
                  Thanks — your message has been captured. I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
