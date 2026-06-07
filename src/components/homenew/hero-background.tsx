'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function HeroBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/hero/hero_background.jpeg"
          alt="Logística Urbana Mar del Plata"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.15]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
      </motion.div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <pattern id="grid-dots" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-on-surface" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>
    </>
  );
}
