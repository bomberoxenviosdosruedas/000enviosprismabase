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
import { ThemeToggle } from '@/components/theme-toggle';
import { navGroups } from '@/lib/navigation';

export const OptimizedHeader = () => {
  return (
    <HeaderContainer>
      {/* Logo Section - RSC */}
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 min-w-0" aria-label="Volver al inicio desde la cabecera">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110">
          <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" priority sizes="(max-width: 768px) 32px, 40px" />
        </div>
        <span className="font-display font-black text-sm sm:text-lg md:text-2xl tracking-tighter text-white uppercase italic whitespace-nowrap">
          Envíos<span className="text-[#fbc107]">Dosruedas</span>
        </span>
      </Link>

      {/* Desktop Navigation - RSC & Client Components for Interaction */}
      <nav className="hidden lg:flex items-center space-x-2 bg-surface-variant/80 backdrop-blur-md border border-outline-variant rounded p-1.5 shadow-sm">
        <ActiveLink 
          href="/" 
          className="text-white/80 hover:text-[#fbc107] hover:bg-white/5"
          activeClassName="bg-[#fbc107]/10 text-[#fbc107] border border-[#fbc107]/20 shadow-sm"
        >
          <Home className="h-4 w-4" />
          <span>Inicio</span>
        </ActiveLink>

        {navGroups.map((group) => (
          <NavDropdown key={group.label} group={group} />
        ))}

        <ActiveLink 
          href="/contacto" 
          className="text-white/80 hover:text-[#fbc107] hover:bg-white/5"
          activeClassName="bg-[#fbc107]/10 text-[#fbc107] border border-[#fbc107]/20 shadow-sm"
        >
          <Mail className="h-4 w-4" />
          <span>Contacto</span>
        </ActiveLink>

        <div className="w-px h-6 bg-outline-variant mx-2" />

        <Button
          asChild
          className="px-6 rounded bg-[#fbc107] text-black hover:bg-[#fbc107]/90 font-display text-xxs font-semibold uppercase tracking-wider hover:scale-105 transition-transform shadow-sm"
        >
          <Link href="/cotizar/express" aria-label="Cotizar Envío desde la cabecera">
            <CalculatorIcon className="mr-2 h-4 w-4" />
            Cotizar Envío
          </Link>
        </Button>
      </nav>

      {/* Right side Hub - RSC & Client Components */}
      <div className="flex items-center gap-4">
        <a href="tel:+5492236602699" aria-label="Llamar al +54 223 660-2699" className="hidden xl:flex items-center gap-3 px-5 py-2.5 rounded bg-surface-variant text-white border border-outline-variant text-xxs font-bold tracking-[0.1em] hover:text-[#fbc107] hover:bg-surface-variant/80 transition-all uppercase active:scale-[0.95]">
          <Phone size={14} className="text-[#fbc107] animate-pulse" aria-hidden="true" /> +54 223 660-2699
        </a>

        <ThemeToggle />

        <MobileMenu navGroups={navGroups} />
      </div>
    </HeaderContainer>
  );
};