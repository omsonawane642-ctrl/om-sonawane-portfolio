export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  description: string;
};

// Edit this list to reflect your own journey.
export const timeline: TimelineEntry[] = [
  {
    id: "start",
    period: "2021",
    title: "Started Computer Engineering",
    description:
      "Began formal study of computer engineering, focusing on programming fundamentals and systems thinking.",
  },
  {
    id: "web-dev",
    period: "2022",
    title: "Learned Web Development",
    description:
      "Picked up JavaScript, HTML, and CSS, then moved into React to build interactive interfaces.",
  },
  {
    id: "automation",
    period: "2023",
    title: "Moved into Automation",
    description:
      "Started automating repetitive business processes, connecting APIs and tools to remove manual work.",
  },
  {
    id: "ai-voice",
    period: "2024",
    title: "Built AI Voice Agents",
    description:
      "Combined speech, language models, and automation to build voice agents that handle real conversations.",
  },
  {
    id: "now",
    period: "Now",
    title: "Full-Stack + AI Systems",
    description:
      "Building complete products end to end — from interface to automation logic to deployment.",
  },
];
