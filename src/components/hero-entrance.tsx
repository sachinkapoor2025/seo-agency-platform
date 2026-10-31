"use client";

import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import { useLayoutEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type HeroEntranceProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
};

export function HeroEntrance({
  children,
  className,
  delay = 0,
  duration = 0.55,
  distance = 16,
}: HeroEntranceProps) {
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimationControls();

  useLayoutEffect(() => {
    const reduced =
      prefersReducedMotion === true ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    controls.set({ opacity: 0, y: distance });
    void controls.start({
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease },
    });
  }, [controls, delay, distance, duration, prefersReducedMotion]);

  return (
    <motion.div className={className} initial={false} animate={controls}>
      {children}
    </motion.div>
  );
}
