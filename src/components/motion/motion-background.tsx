import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionBackgroundProps {
  children?: ReactNode;
  className?: string;
  initialOpacity?: number;
  animateOpacity?: number;
  duration?: number;
  delay?: number;
}

/**
 * A reusable motion background component for decorative elements
 */
export const MotionBackground = ({
  children,
  className = "",
  initialOpacity = 0,
  animateOpacity = 1,
  duration = 1.5,
  delay = 0,
}: MotionBackgroundProps) => {
  return (
    <motion.div
      className={`absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

interface MotionBlobProps {
  className?: string;
  animate?: "float" | "pulse" | "move";
  duration?: number;
  x?: number[] | number;
  y?: number[] | number;
  scale?: number[] | number;
}

/**
 * A reusable motion blob component for background decorative elements
 */
export const MotionBlob = ({
  className = "",
  animate = "move",
  duration = 8,
  x = [0, 10, 0],
  y = [0, 0, 0],
}: MotionBlobProps) => {
  const getAnimation = () => {
    switch (animate) {
      case "float":
        return {
          animate: {
            y: [0, -10, 0],
            transition: {
              duration,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            },
          },
        };
      case "pulse":
        return {
          animate: {
            scale: [1, 1.05, 1],
            transition: {
              duration,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            },
          },
        };
      case "move":
      default:
        return {
          animate: {
            x,
            y,
            transition: {
              duration,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            },
          },
        };
    }
  };

  const animationProps = getAnimation();
  return <motion.div className={className} {...animationProps} />;
};
