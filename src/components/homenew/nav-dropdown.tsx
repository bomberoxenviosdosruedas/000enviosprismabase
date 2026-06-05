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
            "relative flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
            groupIsActive
              ? "bg-primary/20 text-blue-400 border border-primary/30"
              : "text-gray-300 hover:text-white hover:bg-white/10",
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
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-64 bg-[#0a0d16]/95 backdrop-blur-2xl border-white/10 text-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] p-2">
        {group.items.map((item: any) => {
          const ItemIcon = item.icon;
          return (
            <DropdownMenuItem key={item.href} asChild className="focus:bg-primary/20 focus:text-blue-400 cursor-pointer rounded-lg p-3 transition-colors">
              <Link
                href={item.href}
                className={cn(
                  "flex items-center space-x-4",
                  isActive(item.href) ? "text-blue-400 font-bold" : "text-gray-300",
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                  isActive(item.href) ? "bg-primary/20 text-blue-400" : "bg-white/5 text-gray-400"
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
