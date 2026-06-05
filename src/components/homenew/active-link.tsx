'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

export function ActiveLink({ href, children, className, activeClassName }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link href={href}>
      <motion.div
        className={cn(
          "relative flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300",
          isActive ? activeClassName : className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="active-indicator"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
}
