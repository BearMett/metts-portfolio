'use client';

import { useLanguage } from './language-provider';
import { Button } from '@/components/ui/button';
import { supportedLanguages } from '@/lib/resource.const';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const currentIndex = supportedLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    setLanguage(supportedLanguages[nextIndex]);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="w-9 px-0"
      title={`Switch to ${language === 'ko' ? 'English' : '한국어'}`}
    >
      {language === 'ko' ? 'KO' : 'EN'}
    </Button>
  );
}
