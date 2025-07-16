// Re-export types and interfaces from the new hook
export type {
  PortfolioItem,
  PortfolioItemTranslated,
  PortfolioCategory,
  PortfolioCategoryTranslated,
} from './hooks/usePortfolioData';

// Re-export the main hook
export { usePortfolioData } from './hooks/usePortfolioData';

// Legacy function exports for backward compatibility
import { Language } from './resource.const';
import portfolioItemsData from './data/portfolio-items.json';
import portfolioCategoriesData from './data/portfolio-categories.json';
import companiesData from './data/companies.json';

// Legacy function - prefer using the hook instead
export function getLocalizedPortfolioData(language: Language) {
  const typedData = portfolioItemsData as any[];
  const companies = companiesData as any[];

  return typedData.map((item) => {
    const company = companies.find((c) => c.id === item.companyId);
    return {
      id: item.id,
      date: item.date,
      title: item.title[language],
      company: company ? company.name[language] : item.companyId,
      shortDesc: item.shortDesc[language],
      description: item.description[language],
      techStack: item.techStack,
      category: item.category,
      tasks: item.tasks[language],
      achievements: item.achievements[language],
      sourceUrl: item.sourceUrl,
      images: item.images
        ? item.images.map((img: any) => ({
            src: img.src,
            alt: img.alt[language],
          }))
        : undefined,
    };
  });
}

// Legacy exports - prefer using the hook instead
export const portfolioData = getLocalizedPortfolioData('ko');

export const portfolioCategories = (portfolioCategoriesData as any[]).map((category) => ({
  id: category.id,
  label: category.label.ko,
  icon: category.icon,
}));

export function getLocalizedCategories(language: Language) {
  return (portfolioCategoriesData as any[]).map((category) => ({
    id: category.id,
    label: category.label[language],
    icon: category.icon,
  }));
}

// Note: The actual portfolio data is now stored in JSON files:
// - lib/data/portfolio-items.json
// - lib/data/portfolio-categories.json
//
// Use the usePortfolioData hook to access this data with proper localization
// and utility functions for filtering and searching.
