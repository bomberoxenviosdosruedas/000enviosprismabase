'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import RotatingCard from '@/components/homenew/rotating-card';
import { Cursor, ShieldCheck } from '@phosphor-icons/react';

export function HeroVisuals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  // Mouse Parallax Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || typeof window === 'undefined') return;
    if (window.innerWidth > 1024) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="lg:col-span-5 relative flex justify-center items-center h-[350px] lg:h-[450px]"
    >
      <motion.div
        className="relative flex justify-center items-center w-full h-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          y: y2,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
      >
        <div className="relative w-full max-w-[480px] aspect-[1.4/1] transform-gpu">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-[100px] scale-90 opacity-50" />

          <motion.div
            className="w-full h-full relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <RotatingCard 
              frontImageSrc="/cards/card_mapa.webp"
              className="w-full h-full drop-shadow-[0_45px_70px_-15px_rgba(0,0,0,0.7)]" 
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-2xl z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <Cursor size={24} />
              </div>
              <div>
                <div className="text-[9px] text-gray-400 uppercase font-black tracking-[0.2em] mb-0.5">ESTADO REAL</div>
                <div className="text-sm font-black text-blue-400 uppercase italic font-display text-orbitron">EN TRÁNSITO</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-6 px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center gap-4 shadow-2xl z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary border border-secondary/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-[9px] text-gray-400 uppercase font-black tracking-[0.2em] mb-0.5">SEGURIDAD</div>
                <div className="text-sm font-black text-secondary uppercase italic font-display text-orbitron">VERIFICADO</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-primary/10 blur-[100px] rounded-full opacity-60" />
        </div>
      </motion.div>
    </div>
  );
}
