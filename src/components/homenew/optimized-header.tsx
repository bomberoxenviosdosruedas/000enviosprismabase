'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calculator as CalculatorIcon, Envelope, House, Phone } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { HeaderContainer } from './header-container';
import { MobileMenu } from './mobile-menu';
import { ActiveLink } from './active-link';
import { NavDropdown } from './nav-dropdown';
import { navGroups } from '@/lib/navigation';

export const OptimizedHeader = () => {
  return (
    <HeaderContainer>
      {/* Logo Section */}
      <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group shrink-0 min-w-0" aria-label="Volver al inicio desde la cabecera">
        <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-[var(--radius-brand)] flex items-center justify-center transition-all group-hover:rotate-6 group-hover:scale-110">
          <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" priority sizes="(max-width: 768px) 32px, 40px" />
        </div>
        <span className="font-display text-2xl font-black text-foreground uppercase tracking-tighter whitespace-nowrap">
          Envíos<span className="text-primary">Dosruedas</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-2 bg-surface-container border border-outline-variant rounded-[var(--radius-brand)] p-1.5 shadow-sm">
        <ActiveLink
          href="/"
          className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
          activeClassName="bg-primary/10 text-primary"
        >
          <House className="h-4 w-4" />
          <span>Inicio</span>
        </ActiveLink>

        {navGroups.map((group) => (
          <NavDropdown key={group.label} group={group} />
        ))}

        <ActiveLink
          href="/contacto"
          className="text-muted-foreground hover:text-foreground hover:bg-primary/10"
          activeClassName="bg-primary/10 text-primary"
        >
          <Envelope className="h-4 w-4" />
          <span>Contacto</span>
        </ActiveLink>

        <div className="w-px h-6 bg-outline-variant mx-2" />

        <Button
          asChild
          className="px-6 rounded-[var(--radius-brand)] font-bold uppercase tracking-tighter hover:scale-105 transition-transform bg-primary text-primary-foreground"
        >
          <Link href="/cotizar/express" aria-label="Cotizar Envío desde la cabecera">
            <CalculatorIcon className="mr-2 h-4 w-4" />
            Cotizar Envío
          </Link>
        </Button>
      </nav>

      {/* Right side Hub */}
      <div className="flex items-center gap-4">
        <a href="tel:+5492236602699" aria-label="Llamar al +54 223 660-2699" className="hidden xl:flex items-center gap-3 px-5 py-2.5 rounded-[var(--radius-brand)] border border-outline-variant text-primary text-xxs font-black tracking-[0.2em] hover:text-primary/90 hover:bg-primary/10 transition-all uppercase">
          <Phone size={14} className="text-primary" aria-hidden="true" /> +54 223 660-2699
        </a>

        <MobileMenu navGroups={navGroups} />
      </div>
    </HeaderContainer>
  );
};
