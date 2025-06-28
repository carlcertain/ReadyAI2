import React from 'react';
import { motion } from 'framer-motion';

export default function SlideAnimator({
  direction = 'left',   // left, right, up, down
  duration = 0.8,
  delay = 0,
  children,
  className = ''
}) {
  let initialX = 0;
  let initialY = 0;

  // Determine initial position based on direction
  if (direction === 'left') initialX = -100;
  if (direction === 'right') initialX = 100;
  if (direction === 'up') initialY = -100;
  if (direction === 'down') initialY = 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
