import portfolioItemsData from '@/lib/data/portfolio';
import portfolioCategoriesData from '@/lib/data/portfolio-categories.json';
import companiesData from '@/lib/data/companies';
import type {
  PortfolioItemTranslated,
  PortfolioCategoryTranslated,
  CompanyTranslated,
  PortfolioServerData,
} from '@/lib/data/types';

export function getPortfolioDataBothLanguages(): PortfolioServerData {
  const items = portfolioItemsData as PortfolioItemTranslated[];
  const categories = portfolioCategoriesData as PortfolioCategoryTranslated[];
  const companies = companiesData as CompanyTranslated[];

  return { items, categories, companies };
}
