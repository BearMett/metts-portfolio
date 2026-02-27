'use client';
import React, { createContext, useContext, useState, useEffect, useMemo, useSyncExternalStore } from 'react';
import { defaultLanguage, Language, resources, isLanguage } from '@/lib/resource.const';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => any; // Change return type from string to any to support arrays
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;

  const cookieMatch = document.cookie.match(/(?:^|; )language=([^;]+)/);
  const cookieLanguage = cookieMatch ? decodeURIComponent(cookieMatch[1]) : null;
  if (isLanguage(cookieLanguage)) return cookieLanguage;

  const stored = localStorage.getItem('language');
  if (isLanguage(stored)) return stored;

  const htmlLanguage = document.documentElement.lang;
  if (isLanguage(htmlLanguage)) return htmlLanguage;

  return defaultLanguage;
}

function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const storedLanguage = useSyncExternalStore(subscribeToStorage, getStoredLanguage, () => defaultLanguage);
  const [language, setLanguageState] = useState<Language>(storedLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.cookie = `language=${lang}; path=/; max-age=31536000; samesite=lax`;
  };

  // Keep language in sync across html attribute and cookie for server rendering
  useEffect(() => {
    document.documentElement.lang = language;
    document.cookie = `language=${language}; path=/; max-age=31536000; samesite=lax`;
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
