'use client';
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { defaultLanguage, Language, resources, supportedLanguages } from '@/lib/resource.const';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any; // Change return type from string to any to support arrays
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  // Load language preference from localStorage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as Language;
    if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Also update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const contextValue = useMemo(() => {
    // Translation function - updated to handle arrays and other types
    const t = (path: string): any => {
      const keys = path.split('.');
      let current: any = resources[language] as any;

      for (const key of keys) {
        if (current && current[key] !== undefined) {
          current = current[key];
        } else {
          // Fallback to default language
          let fallback = resources[defaultLanguage] as any;
          for (const k of keys) {
            if (fallback && fallback[k] !== undefined) {
              fallback = fallback[k];
            } else {
              return path; // Return key path if translation not found
            }
          }
          return fallback; // Return the fallback value, whatever type it is
        }
      }

      return current; // Return the value, whether it's a string, array, or other type
    };

    return { language, setLanguage, t };
  }, [language]);

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

// Custom hook for using the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
