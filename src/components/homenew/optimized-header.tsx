'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeaderContainer } from './header-container';
import { MobileMenu } from './mobile-menu';
import { ActiveLink } from './active-link';
import { NavDropdown } from './nav-dropdown';
import { navGroups } from '@/lib/navigation';

export const OptimizedHeader = () => {
  return (
    <HeaderContainer>
      {/* Logo Section - RSC */}
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 min-w-0" aria-label="Volver al inicio desde la cabecera">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
          <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" priority sizes="(max-width: 768px) 32px, 40px" />
        </div>
        <span className="font-display text-orbitron font-black text-sm sm:text-lg md:text-2xl tracking-tighter text-white uppercase italic whitespace-nowrap">
          Envíos<span className="text-secondary drop-shadow-[0_0_10px_rgba(255,230,0,0.35)]">Dosruedas</span>
        </span>
      </Link>

      {/* Desktop Navigation - RSC & Client Components for Interaction */}
      <nav className="hidden lg:flex items-center space-x-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-1.5 shadow-2xl">
        <ActiveLink 
          href="/" 
          className="text-gray-300 hover:text-white hover:bg-white/10"
          activeClassName="bg-primary/20 text-blue-400 border border-primary/30 shadow-lg"
        >
          <Home className="h-4 w-4" />
          <span>Inicio</span>
        </ActiveLink>

        {navGroups.map((group) => (
          <NavDropdown key={group.label} group={group} />
        ))}

        <ActiveLink 
          href="/contacto" 
          className="text-gray-300 hover:text-white hover:bg-white/10"
          activeClassName="bg-primary/20 text-blue-400 border border-primary/30 shadow-lg"
        >
          <Mail className="h-4 w-4" />
          <span>Contacto</span>
        </ActiveLink>

        <div className="w-px h-6 bg-white/10 mx-2" />

        <Button
          asChild
          variant="gradient"
          className="px-6 rounded-xl font-display text-orbitron uppercase tracking-tighter hover:scale-105 transition-transform"
        >
          <Link href="/cotizar/express" aria-label="Cotizar Envío desde la cabecera">
            <CalculatorIcon className="mr-2 h-4 w-4" />
            Cotizar Envío
          </Link>
        </Button>
      </nav>

      {/* Right side Hub - RSC & Client Components */}
      <div className="flex items-center gap-4">
        <a href="tel:+5492236602699" aria-label="Llamar al +54 223 660-2699" className="hidden xl:flex items-center gap-3 px-5 py-2.5 rounded-full glass-card text-white text-xxs font-black tracking-[0.2em] hover:text-primary hover:bg-white/10 transition-all uppercase active:scale-[0.95]">
          <Phone size={14} className="text-secondary animate-pulse" aria-hidden="true" /> +54 223 660-2699
        </a>

        <MobileMenu navGroups={navGroups} />
      </div>
    </HeaderContainer>
  );
};