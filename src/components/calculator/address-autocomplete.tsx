'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhotonFeature {
  properties: {
    name?: string;
    street?: string;
    housenumber?: string;
    city?: string;
    state?: string;
  };
}

interface AddressAutocompleteProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  className?: string;
  label?: string;
}

export function AddressAutocomplete({ id, placeholder, value, onChange, required, className, label }: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<PhotonFeature[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const listboxId = `${id}-listbox`;

  const displaySuggestions = useMemo(() => {
    return value.length >= 3 ? suggestions : [];
  }, [value, suggestions]);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!value || value.length < 3) {
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(value + ', Mar del Plata')}&bbox=-57.65,-38.08,-57.50,-37.90`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.features) {
          setSuggestions(data.features);
          setShowSuggestions(true);
        }
      } catch (e) {
        console.error('Autocomplete error', e);
      }
    }, 300);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [value]);

  const handleSelect = (feature: PhotonFeature) => {
    const properties = feature.properties;
    const name = properties.name || '';
    const street = properties.street || '';
    const housenumber = properties.housenumber || '';

    let fullAddress = '';
    if (street && housenumber) fullAddress = `${street} ${housenumber}`;
    else if (name) fullAddress = name;
    else if (street) fullAddress = street;

    if (properties.city) {
      fullAddress += `, ${properties.city}`;
    }

    onChange(fullAddress);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full group">
      <div className="relative">
        <Input
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => {
            setIsFocused(true);
            if (displaySuggestions.length > 0) setShowSuggestions(true);
          }}
          onBlur={() => {
            setIsFocused(false);
            setTimeout(() => setShowSuggestions(false), 200);
          }}
          required={required}
          className={cn(
            "pl-10 transition-all duration-200 focus-visible:ring-primary/50",
            className
          )}
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-expanded={showSuggestions && displaySuggestions.length > 0}
          aria-controls={listboxId}
          aria-label={label || placeholder}
          role="combobox"
        />
        <MapPin className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200",
          isFocused ? "text-primary" : "text-muted-foreground"
        )} />
      </div>

      <AnimatePresence>
        {showSuggestions && displaySuggestions.length > 0 && (
          <motion.ul
            id={listboxId}
            role="listbox"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-full bg-popover border border-border rounded-xl shadow-xl mt-2 max-h-60 overflow-auto backdrop-blur-xl"
          >
            {displaySuggestions.map((s, i) => (
              <li
                key={i}
                role="option"
                aria-selected={false}
                className="px-4 py-3 hover:bg-accent hover:text-accent-foreground cursor-pointer text-sm transition-colors duration-150 flex flex-col gap-0.5 border-b border-border/50 last:border-0 active:bg-accent/80"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(s);
                }}
              >
                <span className="font-medium text-foreground">
                  {s.properties.name || s.properties.street} {s.properties.housenumber}
                </span>
                <span className="text-xs text-muted-foreground">
                  {s.properties.city || 'Mar del Plata'}, {s.properties.state}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
