'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import RotatingCard from '@/components/homenew/rotating-card';
import { MousePointer2, ShieldCheck } from 'lucide-react';

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
          <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-[100px] scale-90 opacity-50" />

          <motion.div
            className="w-full h-full relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <RotatingCard 
              frontImageSrc="/cards/card_mapa.webp"
              className="w-full h-full shadow-xl border border-outline-variant/30 rounded-lg" 
            />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 px-5 py-4 rounded bg-card border border-outline-variant flex items-center gap-4 shadow-lg z-20"
            >
              <div className="w-12 h-12 rounded bg-[#2563eb]/10 flex items-center justify-center text-[#2563eb] border border-[#2563eb]/20">
                <MousePointer2 size={24} />
              </div>
              <div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.1em] mb-0.5">ESTADO REAL</div>
                <div className="text-sm font-bold text-[#2563eb] uppercase italic font-display">EN TRÁNSITO</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-6 px-5 py-4 rounded bg-card border border-outline-variant flex items-center gap-4 shadow-lg z-20"
            >
              <div className="w-12 h-12 rounded bg-[#fbc107]/10 flex items-center justify-center text-[#fbc107] border border-[#fbc107]/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="text-[9px] text-muted-foreground uppercase font-bold tracking-[0.1em] mb-0.5">SEGURIDAD</div>
                <div className="text-sm font-bold text-[#fbc107] uppercase italic font-display">VERIFICADO</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-primary/10 blur-[100px] rounded-full opacity-60" />
        </div>
      </motion.div>
    </div>
  );
}
