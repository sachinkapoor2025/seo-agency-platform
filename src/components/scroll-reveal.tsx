"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "motion/react";
import { useLayoutEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number | "some" | "all";
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.48,
  distance = 16,
  amount = "some",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const played = useRef(false);
  const inView = useInView(ref, { once: true, margin: "0px 0px -48px 0px", amount });

  useLayoutEffect(() => {
    if (played.current) return;

    const reduced =
      prefersReducedMotion === true ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = ref.current;
    if (reduced || !node) {
      played.current = true;
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    const rect = node.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
    if (alreadyVisible) {
      played.current = true;
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    controls.set({ opacity: 0, y: distance });
  }, [controls, distance, prefersReducedMotion]);

  useLayoutEffect(() => {
    if (!inView || played.current) return;

    const reduced =
      prefersReducedMotion === true ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    played.current = true;

    if (reduced) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    void controls.start({
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease },
    });
  }, [controls, delay, duration, inView, prefersReducedMotion]);

  return (
    <motion.div ref={ref} className={className} initial={false} animate={controls}>
      {children}
    </motion.div>
  );
}
