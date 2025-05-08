import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  index?: number;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  hoverEffect?: boolean;
  hoverY?: number;
  hoverScale?: number;
  hoverShadow?: string;
  hoverDuration?: number;
}

/**
 * A reusable motion card component with fade-in and hover animations
 */
export const MotionCard = ({
  children,
  className = "",
  index = 0,
  delay = 0,
  duration = 0.5,
  direction = "up",
  hoverEffect = true,
  hoverY = -10,
  hoverScale = 1,
  hoverShadow = "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  hoverDuration = 0.3,
}: MotionCardProps) => {
  // Calculate delay based on index if provided
  const calculatedDelay = index > 0 ? index * 0.1 + delay : delay;

  return (
    <motion.div
      className={className}
      variants={fadeIn(direction, calculatedDelay, duration)}
      whileHover={
        hoverEffect
          ? {
              y: hoverY,
              scale: hoverScale,
              boxShadow: hoverShadow,
              transition: { duration: hoverDuration },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};
