# Om Sonawane — Portfolio

A premium, animated personal portfolio built with Next.js, TypeScript, Tailwind CSS, and an interactive Three.js globe.

---

## 1. Running the project (beginner steps)

**STEP 1** — Download and extract the ZIP file.

**STEP 2** — Open the extracted `portfolio` folder in VS Code.

**STEP 3** — Open a terminal in VS Code (`Terminal` → `New Terminal`).

**STEP 4** — Install dependencies:

```
npm install
```

**STEP 5** — Start the site:

```
npm run dev
```

**STEP 6** — Open your browser at:

```
http://localhost:3000
```

That's it. Every time you save a file, the browser updates automatically.

To build a production version later, run `npm run build` then `npm run start`.

---

## 2. Project structure

```
src/
  app/
    layout.tsx      → page <head> setup: fonts, SEO title/description
    page.tsx         → assembles all sections in order
    globals.css      → global styles, color helpers, glass effect
  components/
    Navbar.tsx        → top navigation bar
    Hero.tsx           → the hero section (left text + right globe)
    GlobeScene.tsx     → the 3D globe, rings, particles (Three.js)
    FloatingCard.tsx   → the small glass cards floating around the globe
    Icon.tsx           → all icons used across the site (inline SVG)
    Reveal.tsx         → shared scroll-reveal animation + section headings
    About.tsx          → About Me section
    Skills.tsx         → Skills section
    Projects.tsx       → Projects section
    Experience.tsx      → Journey / timeline section
    Services.tsx       → Services section
    GithubSection.tsx  → GitHub call-to-action section
    Contact.tsx         → Contact form + contact details
    Footer.tsx          → bottom footer
  data/
    profile.ts    → your name, phone, email, links, nav labels
    skills.ts     → skill cards + hero skill tags
    projects.ts   → project cards
    experience.ts → timeline entries
    services.ts    → service list
  hooks/
    usePointerParallax.ts → tracks the cursor once, shared by the globe and the floating cards
public/            → static files (add your portrait photo here — see below)
```

You should almost never need to touch `app/` or the Three.js internals of `GlobeScene.tsx` — nearly everything you'll want to personalize lives in `src/data/`.

---

## 3. Where to change things

### Your name, title, contact info, links
Open `src/data/profile.ts`. Edit the `profile` object:

```ts
export const profile = {
  name: "Om Sonawane",
  title: "Computer Engineer / Developer",
  phone: "9021552446",
  email: "omsonawane642@gmail.com",
  githubUrl: "https://github.com/omsonawane642-ctrl",
  linkedinUrl: "https://www.linkedin.com/in/om-sonawane-1b7b7223b",
  ...
};
```

This one file updates the navbar, hero, GitHub section, and contact section all at once.

### Your skills
Open `src/data/skills.ts` and edit the `skills` array (used in the Skills section) or `heroSkillTags` / `floatingCardLabels` (used in the hero).

### Your projects
Open `src/data/projects.ts`. Each project is one object:

```ts
{
  id: "ai-voice-agent",
  title: "AI Voice Agent",
  category: "AI / Voice",
  description: "…",
  stack: ["Node.js", "OpenAI", "Twilio"],
  link: "https://your-project-link.com", // or "#" if none yet
}
```

Add, remove, or edit entries in this array — the grid updates automatically.

### Your journey / timeline
Open `src/data/experience.ts` and edit the `timeline` array.

### Your services
Open `src/data/services.ts` and edit the `services` array.

### Colors
Open `tailwind.config.ts` → `theme.extend.colors`. The main ones:

```ts
cyan: { glow: "#5ee1ff" },  // main cyan accent
azure: "#3b82f6",            // blue accent
ember: "#ff9a56",            // warm orange glow
void: "#05070d",             // background
```

Change a hex value and every component using that color (`text-cyan-glow`, `bg-azure`, etc.) updates across the whole site.

### The 3D globe
Open `src/components/GlobeScene.tsx`. A few knobs worth knowing:

- `groupRef.current.rotation.y += delta * 0.12` — the globe's own idle spin speed. Increase for a faster spin.
- `pointer.current.y * 0.35` / `pointer.current.x * 0.5` — how far the globe tilts toward the cursor. Lower these for a more subtle effect.
- The `0.045` values are the "smoothing" factor (lerp speed) — lower = smoother/slower follow, higher = snappier.
- `OrbitRing` components — change `radius`, `color`, or `speed` for the glowing rings.
- `ParticleField` — change `particleCount` (in `GlobeScene`'s props) for more or fewer particles.

### Adding your portrait to the About section

The portfolio now keeps the first-page globe clean and interactive. Your portrait is displayed on the About section with a smooth reveal and hover animation. The image is stored at `public/om-portrait.png`.

The hero globe follows the mouse cursor smoothly while continuing its own slow rotation. On touch devices it falls back to the ambient animation.


### The contact form
The form in `src/components/Contact.tsx` currently just simulates sending (no email actually leaves your computer yet). To connect it to a real inbox, the easiest beginner-friendly options are:

- [Formspree](https://formspree.io) — no backend code needed, just point the form at a Formspree endpoint.
- [Resend](https://resend.com) or [EmailJS](https://www.emailjs.com) — a little more setup, more control.

The `handleSubmit` function in `Contact.tsx` has a comment showing exactly where to add the `fetch(...)` call once you pick a service.

---

## 4. How the cursor interaction works

- The globe never snaps directly to the cursor. It keeps its own slow, constant spin, and *also* smoothly leans toward wherever the cursor is, using linear interpolation (lerp) each frame — see `usePointerParallax.ts` and the `useFrame` loop in `GlobeScene.tsx`.
- The floating skill cards read the same cursor position (through a shared spring value), so they drift together with the globe instead of moving independently.
- On touch devices (phones/tablets), cursor tracking is automatically disabled — the globe still spins on its own, and particle count is reduced for performance.

---

## 5. Notes

- All icons are hand-built inline SVGs (`src/components/Icon.tsx`) — no external icon library needed.
- The globe, rings, and particles are all generated in Three.js code — no external 3D model or image file is required for the site to work.
- Reduced-motion is respected automatically for visitors who have that OS setting enabled.
