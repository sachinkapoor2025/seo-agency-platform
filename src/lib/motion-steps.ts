const heroDelays = {
  eyebrow: 0,
  heading: 0.06,
  description: 0.14,
  cta: 0.22,
  visual: 0.28,
} as const;

export function heroStep(step: keyof typeof heroDelays, className?: string) {
  return {
    delay: heroDelays[step],
    duration: 0.5,
    distance: 14,
    className,
  };
}

export function revealStep(index = 0, className?: string) {
  return {
    delay: index * 0.07,
    duration: 0.46,
    distance: 14,
    amount: 0.15 as const,
    className,
  };
}
