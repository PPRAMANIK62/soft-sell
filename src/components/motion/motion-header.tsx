import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Badge } from "../ui/badge";

interface MotionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  children?: ReactNode;
}

/**
 * A reusable motion header component for section headers with badge, title, and description
 */
export const MotionHeader = ({
  badge,
  title,
  description,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  children,
}: MotionHeaderProps) => {
  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      variants={fadeIn(direction, delay, duration)}
    >
      {badge && (
        <Badge variant="outline" className="mb-2">
          {badge}
        </Badge>
      )}
      <h2 className="mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};
