import { motion } from 'motion/react';

export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.85,
  once = false,
  amount = 0.24,
  ...props
}) {
  const offsets = {
    up: { y: 76, x: 0 },
    down: { y: -76, x: 0 },
    left: { x: 76, y: 0 },
    right: { x: -76, y: 0 },
    none: { x: 0, y: 0 },
  };
  const offset = offsets[direction] ?? offsets.up;

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, scale: 0.985, filter: 'blur(10px)', ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
