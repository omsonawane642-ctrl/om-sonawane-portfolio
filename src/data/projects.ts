export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: "ai-voice-agent",
    title: "AI Voice Agent",
    category: "AI / Voice",
    description:
      "A voice assistant that answers calls, understands intent, and books appointments without a human on the line.",
    stack: ["Node.js", "OpenAI", "Twilio"],
    link: "#",
  },
  {
    id: "business-automation-system",
    title: "Business Automation System",
    category: "Automation",
    description:
      "An internal tool that replaced spreadsheet-based order tracking with automated status updates and alerts.",
    stack: ["Python", "Zapier", "Google Sheets API"],
    link: "#",
  },
  {
    id: "3d-portfolio",
    title: "3D Portfolio",
    category: "Web / 3D",
    description:
      "This site — a Three.js-driven portfolio with a cursor-reactive globe and glassmorphic UI.",
    stack: ["Next.js", "Three.js", "React Three Fiber"],
    link: "#",
  },
  {
    id: "web-development-projects",
    title: "Web Development Projects",
    category: "Web",
    description:
      "A collection of client and practice sites focused on clean layouts, performance, and responsive design.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    id: "arduino-electronics-projects",
    title: "Arduino / Electronics Projects",
    category: "Hardware",
    description:
      "Sensor-driven microcontroller builds exploring the hardware side of automation.",
    stack: ["Arduino", "C++", "Sensors"],
    link: "#",
  },
];
