export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "ai-voice-agents",
    title: "AI Voice Agents",
    description:
      "Custom voice assistants that answer calls, qualify leads, and handle bookings automatically.",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Turning manual, repetitive operations into reliable automated workflows.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Applying language models to real tasks — support, data entry, research, and reporting.",
  },
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Fast, responsive, well-structured websites built to represent your brand properly.",
  },
  {
    id: "javascript-development",
    title: "JavaScript Development",
    description:
      "Custom scripts, integrations, and full applications built in modern JavaScript and TypeScript.",
  },
];
