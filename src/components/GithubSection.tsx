"use client";

import { Reveal } from "./Reveal";
import { profile } from "@/data/profile";
import Icon from "./Icon";

export default function GithubSection() {
  return (
    <section id="github" className="relative py-20 md:py-28">
      <div className="section-container">
        <Reveal>
          <div className="glass-panel mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-10 text-center shadow-glow sm:p-14">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white">
              <Icon name="github" className="h-7 w-7" />
            </span>
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Code lives here
            </h2>
            <p className="max-w-md text-mist">
              Explore experiments, automation scripts, and project source on GitHub —{" "}
              <span className="font-mono text-cyan-glow">@{profile.github}</span>
            </p>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
            >
              <Icon name="github" className="h-4 w-4" />
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
