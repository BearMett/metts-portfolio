import type { Language } from '@/lib/resource.const';
import type { PortfolioServerData, PortfolioItem, PortfolioCategory, Company, CompanyGroup } from '@/lib/data/types';

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

export function localizeCompanies(portfolioData: PortfolioServerData, language: Language): Company[] {
  return portfolioData.companies.map((c) => ({
    id: c.id,
    name: c.name[language],
    shortName: c.shortName[language],
    description: c.description[language],
    colors: c.colors,
    website: c.website,
    type: c.type,
  }));
}

export function groupPortfolioItemsByCompany(items: PortfolioItem[], companies: Company[]): CompanyGroup[] {
  const companyMap = new Map(companies.map((c) => [c.id, c]));
  const grouped = new Map<string, PortfolioItem[]>();

  for (const item of items) {
    const list = grouped.get(item.companyId) || [];
    list.push(item);
    grouped.set(item.companyId, list);
  }

  const groups: CompanyGroup[] = [];
  for (const [companyId, groupItems] of grouped) {
    const company = companyMap.get(companyId);
    if (!company) continue;

    const sorted = groupItems.sort((a, b) => b.date.localeCompare(a.date));
    const dates = sorted.map((i) => i.date);

    groups.push({
      company,
      items: sorted,
      latestDate: dates[0],
      dateRange: { from: dates[dates.length - 1], to: dates[0] },
    });
  }

  return groups.sort((a, b) => b.latestDate.localeCompare(a.latestDate));
}
