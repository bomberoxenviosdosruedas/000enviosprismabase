'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

interface FooterSocialLinksProps {
  links: SocialLink[];
}

export const FooterSocialLinks = ({ links }: FooterSocialLinksProps) => {
  return (
    <div className="flex gap-5">
      {links.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visitar nuestro ${social.label}`}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center hover:bg-blue-100 hover:border-blue-200 transition-all text-blue-600 group/social"
        >
          <div className="relative w-6 h-6 opacity-60 group-hover/social:opacity-100 transition-opacity">
            <Image src={social.icon} alt={social.label} fill className="object-contain" />
          </div>
        </motion.a>
      ))}
    </div>
  );
};
