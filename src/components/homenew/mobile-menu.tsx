'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Menu,
  Home,
  Mail,
  Calculator as CalculatorIcon,
  Phone,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

interface MobileMenuProps {
  navGroups: any[];
}

export function MobileMenu({ navGroups }: MobileMenuProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const isGroupActive = (basePath: string) => pathname?.startsWith(basePath);

  const mobileNavVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const mobileNavItemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 w-12 h-12 rounded-xl" aria-label="Abrir menú de navegación">
            <Menu className="h-7 w-7" />
            <span className="sr-only">Abrir menú</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[320px] bg-[#0a0d16]/95 border-white/10 text-white backdrop-blur-2xl pt-12 p-6 shadow-2xl">
          <SheetHeader className="mb-12 flex flex-row items-center space-x-4">
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center drop-shadow-[0_0_10px_rgba(37,99,235,0.4)]">
              <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="40px" />
            </div>
            <SheetTitle className="text-white font-display text-orbitron font-black italic text-xl tracking-tighter uppercase whitespace-nowrap">
              Envíos Dos <span className="text-primary">Ruedas</span>
            </SheetTitle>
          </SheetHeader>

          <motion.div
            className="flex h-[calc(100vh-200px)] flex-col"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={mobileNavItemVariants}>
              <SheetClose asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex items-center space-x-5 py-4 px-5 rounded-2xl transition-all duration-300 w-full mb-2",
                    isActive("/")
                      ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-xl"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Home className="w-5 h-5" />
                  <span className="font-black font-display text-orbitron text-xs tracking-[0.1em] uppercase">Inicio</span>
                </Link>
              </SheetClose>
            </motion.div>

            <Accordion type="multiple" className="w-full space-y-2">
              {navGroups.map((group) => {
                const GroupIcon = group.icon;
                const groupIsActive = isGroupActive(group.basePath);

                return (
                  <motion.div variants={mobileNavItemVariants} key={group.label}>
                    <AccordionItem value={group.label} className="border-b-0">
                      <AccordionTrigger
                        className={cn(
                          "py-4 px-5 rounded-2xl transition-all duration-300 w-full justify-between group",
                          groupIsActive
                            ? "text-blue-400 font-bold [&[data-state=open]]:bg-primary/20 border border-primary/30"
                            : "text-gray-300 hover:text-white hover:bg-white/5",
                          "hover:no-underline",
                        )}
                      >
                        <div className="flex items-center space-x-5">
                          <GroupIcon className="w-5 h-5" />
                          <span className="font-black font-display text-orbitron text-xs tracking-[0.1em] uppercase">{group.label}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 pb-0">
                        <div className="flex flex-col space-y-1 pl-10 border-l border-white/5 ml-7 my-2">
                          {group.items.map((item: any) => {
                            const ItemIcon = item.icon;
                            return (
                              <SheetClose asChild key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "flex items-center space-x-4 py-3.5 px-5 rounded-xl transition-all duration-300 w-full text-left",
                                    isActive(item.href)
                                      ? "bg-primary/20 text-blue-400 font-bold"
                                      : "text-gray-400 hover:text-white hover:bg-white/5",
                                  )}
                                >
                                  {ItemIcon && <ItemIcon className="w-4 h-4" />}
                                  <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                              </SheetClose>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                );
              })}
            </Accordion>

            <motion.div variants={mobileNavItemVariants} className="mt-2">
              <SheetClose asChild>
                <Link
                  href="/contacto"
                  className={cn(
                    "flex items-center space-x-5 py-4 px-5 rounded-2xl transition-all duration-300 w-full group",
                    isActive("/contacto")
                      ? "bg-primary/20 text-blue-400 border border-primary/30 shadow-xl"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-black font-display text-orbitron text-xs tracking-[0.1em] uppercase">Contacto</span>
                </Link>
              </SheetClose>
            </motion.div>

            <motion.div variants={mobileNavItemVariants} className="mt-auto pt-8">
              <SheetClose asChild>
                <Link href="/cotizar/express" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full h-16 bg-secondary hover:bg-secondary/90 text-black font-display text-orbitron font-black rounded-2xl shadow-xl shadow-secondary/20 uppercase tracking-tighter active:scale-[0.95] transition-transform"
                  >
                    <CalculatorIcon className="w-6 h-6 mr-3" />
                    Cotizar Envío
                  </Button>
                </Link>
              </SheetClose>
              <div className="mt-6 flex items-center justify-center gap-6">
                <Link href="https://instagram.com/enviosdosruedas" aria-label="Visitar nuestro Instagram" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all active:scale-[0.95]">
                  <InstagramIcon className="w-6 h-6" />
                </Link>
                <a href="tel:+5492236602699" aria-label="Llamar a Envios DosRuedas" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary hover:bg-white/10 transition-all active:scale-[0.95]">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
