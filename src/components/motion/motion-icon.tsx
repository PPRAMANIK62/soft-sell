import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionIconProps {
  children: ReactNode;
  className?: string;
  hoverRotate?: number;
  hoverScale?: number;
  hoverDuration?: number;
}

/**
 * A reusable motion icon component with hover animations
 */
export const MotionIcon = ({
  children,
  className = "",
  hoverRotate = 5,
  hoverScale = 1.1,
  hoverDuration = 0.3,
}: MotionIconProps) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        rotate: hoverRotate,
        scale: hoverScale,
        transition: { duration: hoverDuration },
      }}
    >
      {children}
    </motion.div>
  );
};
