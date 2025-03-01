'use client';

import { InteractivePortfolio } from '@/components/interactive-portfolio';
import { getLocalizedPortfolioData } from '@/lib/portfolio-data';
import { useLanguage } from '@/components/language-provider';

export default function PortfolioPage() {
  const { t, language } = useLanguage();
  const localizedData = getLocalizedPortfolioData(language);

  return (
    <div className="container max-w-5xl py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{t('portfolio.title')}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center">{t('portfolio.subtitle')}</p>
      <InteractivePortfolio items={localizedData} />
    </div>
  );
}
