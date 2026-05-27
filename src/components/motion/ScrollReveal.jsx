import { motion } from 'motion/react';

const directions = {
  up: { y: 54, x: 0 },
  down: { y: -54, x: 0 },
  left: { x: 54, y: 0 },
  right: { x: -54, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  as = 'div',
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.75,
  once = false,
  amount = 0.28,
  ...props
}) {
  const MotionTag = motion[as];
  const offset = directions[direction] ?? directions.up;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)', ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
