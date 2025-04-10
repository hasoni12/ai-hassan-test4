'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CardHoverEffectProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
}

export default function CardHoverEffect({
  children,
  className = '',
  hoverScale = 1.03,
}: CardHoverEffectProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`${className} transition-all duration-300`}
      whileHover={{ scale: hoverScale, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
