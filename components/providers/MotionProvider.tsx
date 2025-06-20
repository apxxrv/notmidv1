'use client';

import { motion, MotionConfig } from 'framer-motion';
import { ReactNode } from 'react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
    >
      {children}
    </MotionConfig>
  );
}
