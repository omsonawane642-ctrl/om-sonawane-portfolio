export type Skill = {
  id: string;
  title: string;
  description: string;
  icon: "mic" | "bolt" | "cog" | "code" | "globe" | "layers";
};

export const skills: Skill[] = [
  {
    id: "ai-voice-agents",
    title: "AI Voice Agents",
    description:
      "Designing conversational voice systems that handle real customer interactions end to end.",
    icon: "mic",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Connecting language models to real workflows so repetitive decisions run themselves.",
    icon: "bolt",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Mapping manual operations into automated pipelines that save hours every week.",
    icon: "cog",
  },
  {
    id: "javascript",
    title: "JavaScript",
    description:
      "Writing clean, dependable JavaScript and TypeScript across the whole stack.",
    icon: "code",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building fast, accessible, well-structured websites from layout to deployment.",
    icon: "globe",
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    description:
      "Shipping complete products — front end, back end, and the systems that connect them.",
    icon: "layers",
  },
];

export const heroSkillTags: string[] = [
  "AI Voice Agents",
  "Business Automation",
  "Web Development",
  "AI Automation",
];

export const floatingCardLabels: string[] = [
  "AI VOICE AGENTS",
  "AI AUTOMATION",
  "WEB DEVELOPMENT",
  "BUSINESS AUTOMATION",
  "JAVASCRIPT",
];
