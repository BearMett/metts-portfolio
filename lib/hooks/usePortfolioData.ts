'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/components/language-provider';
import portfolioItemsData from '@/lib/data/portfolio';
import portfolioCategoriesData from '@/lib/data/portfolio-categories.json';
import { useCompanyData } from './useCompanyData';
import type {
  PortfolioItemTranslated,
  PortfolioItem,
  PortfolioCategoryTranslated,
  PortfolioCategory,
} from '@/lib/data/types';

// Re-export types for backward compatibility
export type { PortfolioItemTranslated, PortfolioItem, PortfolioCategoryTranslated, PortfolioCategory };

// Custom hook for portfolio data management
export function usePortfolioData() {
  const { language } = useLanguage();
  const { getCompanyById } = useCompanyData();

  // Transform and memoize portfolio items
  const portfolioItems = useMemo((): PortfolioItem[] => {
    const typedData = portfolioItemsData as PortfolioItemTranslated[];
    return typedData.map((item) => {
      const company = getCompanyById(item.companyId);
      return {
        id: item.id,
        date: item.date,
        title: item.title[language],
        company: company?.name || item.companyId,
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
  }, [language, getCompanyById]);

  // Transform and memoize portfolio categories
  const portfolioCategories = useMemo((): PortfolioCategory[] => {
    const typedData = portfolioCategoriesData as PortfolioCategoryTranslated[];
    return typedData.map((category) => ({
      id: category.id,
      label: category.label[language],
      icon: category.icon,
    }));
  }, [language]);

  // Utility function to filter portfolio items by categories
  const getFilteredItems = useMemo(() => {
    return (activeFilters: Record<string, boolean>): PortfolioItem[] => {
      if (activeFilters.all) {
        return portfolioItems;
      }

      return portfolioItems.filter((item) => item.category.some((cat) => activeFilters[cat]));
    };
  }, [portfolioItems]);

  // Utility function to get items by category
  const getItemsByCategory = useMemo(() => {
    return (categoryId: string): PortfolioItem[] => {
      if (categoryId === 'all') {
        return portfolioItems;
      }
      return portfolioItems.filter((item) => item.category.includes(categoryId));
    };
  }, [portfolioItems]);

  // Utility function to get item by ID
  const getItemById = useMemo(() => {
    return (itemId: string): PortfolioItem | undefined => {
      return portfolioItems.find((item) => item.id === itemId);
    };
  }, [portfolioItems]);

  // Utility function to get all tech stack items
  const getAllTechStack = useMemo(() => {
    const techStackSet = new Set<string>();
    portfolioItems.forEach((item) => {
      item.techStack.forEach((tech) => techStackSet.add(tech));
    });
    return Array.from(techStackSet).sort();
  }, [portfolioItems]);

  // Utility function to get items by tech stack
  const getItemsByTechStack = useMemo(() => {
    return (techName: string): PortfolioItem[] => {
      return portfolioItems.filter((item) =>
        item.techStack.some((tech) => tech.toLowerCase().includes(techName.toLowerCase())),
      );
    };
  }, [portfolioItems]);

  // Utility function to get items by company
  const getItemsByCompany = useMemo(() => {
    return (companyId: string): PortfolioItem[] => {
      return portfolioItems.filter((item) => {
        const company = getCompanyById(companyId);
        return company && item.company === company.name;
      });
    };
  }, [portfolioItems, getCompanyById]);

  // Utility function to get company for an item
  const getCompanyForItem = useMemo(() => {
    return (itemId: string) => {
      const item = portfolioItems.find((item) => item.id === itemId);
      if (!item) return undefined;

      const typedData = portfolioItemsData as PortfolioItemTranslated[];
      const rawItem = typedData.find((data) => data.id === itemId);
      return rawItem ? getCompanyById(rawItem.companyId) : undefined;
    };
  }, [portfolioItems, getCompanyById]);

  return {
    // Data
    items: portfolioItems,
    categories: portfolioCategories,

    // Utility functions
    getFilteredItems,
    getItemsByCategory,
    getItemById,
    getAllTechStack,
    getItemsByTechStack,
    getItemsByCompany,
    getCompanyForItem,

    // Metadata
    totalItems: portfolioItems.length,
    totalCategories: portfolioCategories.length,
  };
}
