'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavDropdownProps {
  group: any;
}

export function NavDropdown({ group }: NavDropdownProps) {
  const pathname = usePathname();
  const GroupIcon = group.icon;
  const groupIsActive = pathname?.startsWith(group.basePath);
  const isActive = (path: string) => pathname === path;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          className={cn(
            "relative flex cursor-pointer items-center space-x-2 rounded px-4 py-2 text-sm font-medium transition-all duration-200",
            groupIsActive
              ? "bg-[#fbc107]/10 text-[#fbc107] border border-[#fbc107]/20"
              : "text-white/80 hover:text-[#fbc107] hover:bg-white/5",
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <GroupIcon className="h-4 w-4" />
          <span>{group.label}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
          {groupIsActive && (
            <motion.div
              layoutId="active-indicator"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#fbc107] shadow-[0_0_8px_rgba(251,193,7,0.5)]"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-64 bg-card border border-outline-variant text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-2">
        {group.items.map((item: any) => {
          const ItemIcon = item.icon;
          return (
            <DropdownMenuItem key={item.href} asChild className="focus:bg-[#fbc107]/10 focus:text-[#fbc107] cursor-pointer rounded p-3 transition-colors">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-4",
                  isActive(item.href) ? "text-[#fbc107] font-bold" : "text-white/80 hover:text-[#fbc107]",
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded flex items-center justify-center transition-colors",
                  isActive(item.href) ? "bg-[#fbc107]/10 text-[#fbc107]" : "bg-surface-variant text-white/80"
                )}>
                  {ItemIcon && <ItemIcon className="h-4 w-4" />}
                </div>
                <span className="text-sm">{item.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
