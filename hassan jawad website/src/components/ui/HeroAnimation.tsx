'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface HeroAnimationProps {
  className?: string;
}

export default function HeroAnimation({ className = '' }: HeroAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '100%',
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {/* العناصر المتحركة */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/10 dark:bg-primary/20"
          variants={circleVariants}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-secondary/10 dark:bg-secondary/20"
          variants={circleVariants}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"
          variants={circleVariants}
        />

        {/* خطوط متحركة */}
        <motion.div
          className="absolute top-1/4 right-0 h-px bg-gradient-to-l from-primary to-transparent"
          variants={lineVariants}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 h-px bg-gradient-to-r from-secondary to-transparent"
          variants={lineVariants}
        />

        {/* العناصر الرئيسية */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            م. حسن جواد
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            منصة تعليمية متكاملة للمهندسين المدنيين
          </p>
        </motion.div>

        <motion.div className="flex justify-center space-x-4 rtl:space-x-reverse" variants={itemVariants}>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            استكشف الدورات
          </button>
          <button className="px-6 py-3 bg-white dark:bg-gray-800 text-primary dark:text-secondary border border-primary dark:border-secondary rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            تواصل معنا
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
