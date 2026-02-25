import type { Language } from '@/lib/resource.const';
import type { PortfolioServerData, PortfolioItem, PortfolioCategory } from '@/lib/data/types';

export function localizePortfolioItems(portfolioData: PortfolioServerData, language: Language): PortfolioItem[] {
  return portfolioData.items.map((item) => {
    const company = portfolioData.companies.find((c) => c.id === item.companyId);
    return {
      id: item.id,
      date: item.date,
      title: item.title[language],
      companyId: item.companyId,
      company: company ? company.name[language] : item.companyId,
      shortDesc: item.shortDesc[language],
      description: item.description[language],
      techStack: item.techStack,
      category: item.category,
      tasks: item.tasks[language],
      achievements: item.achievements[language],
      sourceUrl: item.sourceUrl,
      images: item.images
        ? item.images.map((img) => ({
            src: img.src,
            alt: img.alt[language],
          }))
        : undefined,
    };
  });
}

export function localizePortfolioCategories(
  portfolioData: PortfolioServerData,
  language: Language,
): PortfolioCategory[] {
  return portfolioData.categories.map((cat) => ({
    id: cat.id,
    label: cat.label[language],
    icon: cat.icon,
  }));
}
