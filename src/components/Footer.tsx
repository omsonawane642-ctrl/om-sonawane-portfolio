import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-xs text-mist/60 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js &amp; Three.js</p>
      </div>
    </footer>
  );
}
