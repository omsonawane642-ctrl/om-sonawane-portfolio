"use client";

import { motion } from "framer-motion";
import Icon, { IconName } from "./Icon";

export default function FloatingCard({
  label,
  icon,
  className = "",
  delay = 0,
  floatDuration = 6,
}: {
  label: string;
  icon: IconName;
  className?: string;
  delay?: number;
  floatDuration?: number;
}) {
  return (
    <motion.div
      className={`glass-panel absolute flex items-center gap-3 rounded-xl border-white/10 bg-[#07101b]/80 px-4 py-3 shadow-[0_0_32px_rgba(61,211,255,0.12)] backdrop-blur-xl ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.7, delay },
        y: { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay },
      }}
      whileHover={{ scale: 1.06, y: -14 }}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#10294a]/80 text-cyan-glow">
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="font-mono text-[11px] tracking-wide text-mist whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
}
