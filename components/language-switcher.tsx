'use client';

import { useLanguage } from './language-provider';
import { Button } from '@/components/ui/button';
import { supportedLanguages } from '@/lib/resource.const';
import { useRouter } from 'next/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const currentIndex = supportedLanguages.indexOf(language);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    setLanguage(supportedLanguages[nextIndex]);
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="w-9 px-0"
      title={language === 'ko' ? t('languageSwitcher.switchToEnglish') : t('languageSwitcher.switchToKorean')}
    >
      {language === 'ko' ? 'KO' : 'EN'}
    </Button>
  );
}
