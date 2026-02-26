'use client';

import { useLanguage } from '@/components/language-provider';
import { PrintActionBar } from '@/components/print/print-action-bar';
import { CoverSlide } from '@/components/print-port/cover-slide';
import { CareerSummarySlide } from '@/components/print-port/career-summary-slide';
import { ProjectSlide } from '@/components/print-port/project-slide';
import {
  localizePortfolioItems,
  localizeCompanies,
  localizePortfolioCategories,
  groupPortfolioItemsByCompany,
} from '@/lib/portfolio-utils';
import { aboutMeData } from '@/lib/data/about-me';
import type { PortfolioServerData } from '@/lib/data/types';

interface PrintPortContentProps {
  portfolioData: PortfolioServerData;
}

export function PrintPortContent({ portfolioData }: PrintPortContentProps) {
  const { language, t } = useLanguage();

  const items = localizePortfolioItems(portfolioData, language);
  const companies = localizeCompanies(portfolioData, language);
  const categories = localizePortfolioCategories(portfolioData, language);
  const companyGroups = groupPortfolioItemsByCompany(items, companies);

  const categoryMap = new Map(categories.map((c) => [c.id, c.label]));
  const getCategoryLabel = (cat: string) => categoryMap.get(cat) || cat;

  const name = aboutMeData.name[language];
  const tagline = aboutMeData.tagline[language];

  return (
    <div data-print-page>
      <PrintActionBar
        instruction={t('portfolio.printInstruction')}
        printLabel={t('portfolio.printButton')}
        backLabel={t('portfolio.backToPortfolio')}
        backHref="/portfolio"
      />

      <div className="py-4">
        <CoverSlide name={name} tagline={tagline} lang={language} />
        <CareerSummarySlide companyGroups={companyGroups} lang={language} />

        {companyGroups.map((group) =>
          group.items.map((item) => (
            <ProjectSlide key={item.id} item={item} lang={language} getCategoryLabel={getCategoryLabel} />
          )),
        )}
      </div>
    </div>
  );
}
