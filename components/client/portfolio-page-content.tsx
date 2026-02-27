'use client';

import { InteractivePortfolio } from '@/components/interactive-portfolio';
import { useLanguage } from '@/components/language-provider';
import type { PortfolioServerData } from '@/lib/data/types';

interface PortfolioPageContentProps {
  portfolioData: PortfolioServerData;
}

export function PortfolioPageContent({ portfolioData }: PortfolioPageContentProps) {
  const { t } = useLanguage();

  return (
    <div className="container max-w-5xl py-8 md:py-12">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-center">{t('portfolio.title')}</h1>
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center">{t('portfolio.subtitle')}</p>
      <InteractivePortfolio portfolioData={portfolioData} />
    </div>
  );
}
