import { staggerContainer } from "@/lib/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  staggerAmount?: number;
  delayChildren?: number;
  viewportAmount?: number;
  once?: boolean;
  hasBgElements?: boolean;
}

/**
 * A reusable motion section component that applies staggered animations to its children
 */
export const MotionSection = ({
  children,
  id,
  className = "",
  staggerAmount = 0.1,
  delayChildren = 0.1,
  viewportAmount = 0.25,
  once = true,
}: MotionSectionProps) => {
  return (
    <section
      id={id}
      className={`section relative overflow-hidden ${className}`}
    >
      <motion.div
        className="relative container"
        variants={staggerContainer(staggerAmount, delayChildren)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewportAmount }}
      >
        {children}
      </motion.div>
    </section>
  );
};
