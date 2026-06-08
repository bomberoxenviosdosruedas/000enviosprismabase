'use client';
import React from 'react';
import { Button, type buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import type { VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MeshGradientBackground } from '@/components/ui/MeshGradientBackground';
import { ArrowRight, Calculator as CalculatorIcon, CaretDown, Envelope, House, List, Play, Star, Truck, Users, X } from '@phosphor-icons/react';

const iconMap: Record<string, React.ElementType> = {
  ArrowRight,
  Envelope,
  Star,
  House,
  Truck,
  Calculator: CalculatorIcon,
  Users,
  CaretDown,
  List,
  X,
  Play,
};

interface CtaButtonProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  icon?: string;
  target?: string;
  rel?: string;
  asChild?: boolean;
  className?: string;
}

export interface HeroSectionProps {
  title: React.ReactNode;
  preTitle?: React.ReactNode;
  description?: string | React.ReactNode;
  ctaButtons?: CtaButtonProps[];
  backgroundType?: 'color' | 'gradient' | 'image' | 'shader';
  backgroundColor?: string;
  backgroundGradient?: string;
  backgroundImageUrl?: string;
  backgroundImageAlt?: string;
  backgroundOverlayOpacity?: number;
  textColorClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  visualElement?: React.ReactNode;
  layout?: 'center-stacked' | 'split-visual-right' | 'split-visual-left';
  minHeight?: string;
  contentMaxWidth?: string;
  textAlignment?: 'text-center' | 'text-left' | 'text-right';
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export function HeroSection({
  title,
  preTitle,
  description,
  ctaButtons,
  backgroundType = 'shader',
  backgroundColor = 'bg-blue-50',
  backgroundGradient = 'bg-gradient-to-br from-primary to-blue-200',
  backgroundImageUrl = '/bannerenvios.webp',
  backgroundImageAlt = 'Hero background image',
  backgroundOverlayOpacity = 0.2,
  textColorClassName = 'text-foreground',
  titleClassName = 'text-3xl sm:text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.9] mb-8 uppercase text-foreground font-display',
  descriptionClassName = 'text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-sans',
  visualElement,
  layout = 'center-stacked',
  minHeight = 'min-h-[100dvh]',
  contentMaxWidth = 'max-w-7xl',
  textAlignment = 'text-center',
  className = '',
  children,
  priority = false,
}: HeroSectionProps) {

  let bgClasses = '';
  if (backgroundType === 'color') bgClasses = backgroundColor;
  else if (backgroundType === 'gradient') bgClasses = backgroundGradient;
  else if (backgroundType === 'image') bgClasses = 'bg-blue-50';

  const sectionClasses = cn(
    'relative flex items-center overflow-hidden pt-24 pb-12 md:pt-24 md:pb-20 px-6',
    minHeight,
    bgClasses,
    className
  );

  const textContentWrapper = (
     <div
      className={cn(
        'relative z-10 w-full',
        layout === 'center-stacked' ? `mx-auto ${contentMaxWidth} ${textAlignment}` :
        (layout === 'split-visual-right' ? `${textAlignment} lg:text-left` :
         layout === 'split-visual-left' ? `${textAlignment} lg:text-right` : textAlignment),
      )}
    >
      {preTitle && (
        <div className="mb-8">
          {typeof preTitle === 'string' ? (
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-blue-950 text-xs font-bold tracking-widest uppercase">
                <div className="w-2 h-2 bg-foreground animate-pulse" />
                {preTitle}
             </div>
          ) : preTitle}
        </div>
      )}

      <h1 className={cn(titleClassName, "animate-fade-in-up")}>
        {title}
      </h1>

      {description && (
        <div
          className={cn(descriptionClassName, textAlignment === 'text-left' ? 'lg:mr-auto lg:ml-0' : textAlignment === 'text-right' ? 'lg:ml-auto lg:mr-0' : 'mx-auto', "animate-fade-in-up")}
          style={{ animationDelay: '0.1s' }}
        >
            {description}
        </div>
      )}

      {children && <div className="mt-6 md:mt-8">{children}</div>}

      {ctaButtons && ctaButtons.length > 0 && (
        <div
          className={cn(
            'flex flex-col sm:flex-row gap-6 items-center',
            textAlignment === 'text-center' ? 'justify-center' :
            (layout === 'split-visual-right' || textAlignment === 'text-left') ? 'justify-start' :
            (layout === 'split-visual-left' || textAlignment === 'text-right') ? 'justify-end' :
            'justify-center'
          )}
        >
          {ctaButtons.map((button, index) => {
            const IconComponent = button.icon ? iconMap[button.icon] : null;

            const isYellowButton = button.variant === 'secondary';

            return (
              <div
                key={index}
                className="transition-transform hover:scale-105 active:scale-95 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Button
                  variant={button.variant || 'default'}
                  asChild
                  className={cn(
                    'px-10 py-5 font-sans font-bold rounded-none transition-all uppercase tracking-tight h-auto',
                    isYellowButton
                      ? "bg-secondary hover:bg-[#d97706] text-black shadow-lg"
                      : "bg-blue-950 border border-blue-900 text-white hover:bg-blue-900",
                    button.className
                  )}
                >
                  <Link href={button.href} target={button.target} rel={button.rel}>
                    {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                    {button.text}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <section className={sectionClasses}>
      {backgroundType === 'shader' && (
        <>
          <MeshGradientBackground />
          <div className="absolute inset-0 bg-blue-50/40 backdrop-blur-[1px] pointer-events-none z-0" />
        </>
      )}

      {backgroundType === 'image' && backgroundImageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageUrl}
            alt={backgroundImageAlt}
            fill
            className="object-cover opacity-10"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-transparent to-blue-50" />
        </div>
      )}

      <div className={cn("container mx-auto relative z-10 w-full", layout === 'center-stacked' ? "" : "grid lg:grid-cols-2 gap-20 items-center")}>
        {layout === 'center-stacked' ? textContentWrapper : (
           <>
             {layout === 'split-visual-left' && visualElement && (
                <div className="relative flex justify-center items-center">
                  {visualElement}
                </div>
             )}
             {textContentWrapper}
             {layout === 'split-visual-right' && visualElement && (
                <div className="relative flex justify-center items-center">
                  {visualElement}
                </div>
             )}
           </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
}
