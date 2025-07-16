'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Language } from '@/lib/resource.const';
import portfolioItemsData from '@/lib/data/portfolio-items.json';
import portfolioCategoriesData from '@/lib/data/portfolio-categories.json';

// Types for the portfolio data
export interface PortfolioItemTranslated {
  id: string;
  date: string;
  title: { [key in Language]: string };
  company: { [key in Language]: string };
  shortDesc: { [key in Language]: string };
  description: { [key in Language]: string };
  techStack: string[];
  category: string[];
  tasks: { [key in Language]: string[] };
  achievements: { [key in Language]: string[] };
  sourceUrl?: string;
  images?: { src: string; alt: { [key in Language]: string } }[];
}

export interface PortfolioItem {
  id: string;
  date: string;
  title: string;
  company: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  category: string[];
  tasks: string[];
  achievements: string[];
  sourceUrl?: string;
  images?: { src: string; alt: string }[];
}

export interface PortfolioCategory {
  id: string;
  label: string;
  icon: string;
}

export interface PortfolioCategoryTranslated {
  id: string;
  label: { [key in Language]: string };
  icon: string;
}

// Custom hook for portfolio data management
export function usePortfolioData() {
  const { language } = useLanguage();

  // Transform and memoize portfolio items
  const portfolioItems = useMemo((): PortfolioItem[] => {
    const typedData = portfolioItemsData as PortfolioItemTranslated[];
    return typedData.map((item) => ({
      id: item.id,
      date: item.date,
      title: item.title[language],
      company: item.company[language],
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
    }));
  }, [language]);

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

    // Metadata
    totalItems: portfolioItems.length,
    totalCategories: portfolioCategories.length,
  };
}