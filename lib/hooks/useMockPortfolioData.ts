'use client';

import { PortfolioItem, PortfolioCategory } from './usePortfolioData';

// Mock portfolio data for testing
const mockPortfolioItems: PortfolioItem[] = [
  {
    id: 'mock-project-1',
    date: '2024-01',
    title: 'Mock Project 1',
    company: 'Mock Company',
    shortDesc: 'A mock project for testing purposes',
    description: 'This is a detailed description of the mock project used for testing the portfolio system.',
    techStack: ['React', 'TypeScript', 'Jest'],
    category: ['frontend', 'backend'],
    tasks: ['Task 1', 'Task 2', 'Task 3'],
    achievements: ['Achievement 1', 'Achievement 2'],
    sourceUrl: 'https://github.com/mock/project',
    images: [
      {
        src: '/mock-image.png',
        alt: 'Mock project screenshot',
      },
    ],
  },
  {
    id: 'mock-project-2',
    date: '2023-12',
    title: 'Mock Project 2',
    company: 'Another Mock Company',
    shortDesc: 'Another mock project for testing',
    description: 'This is another mock project with different categories and tech stack.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    category: ['backend', 'database'],
    tasks: ['Backend development', 'Database design'],
    achievements: ['Improved performance', 'Enhanced security'],
  },
];

const mockPortfolioCategories: PortfolioCategory[] = [
  { id: 'all', label: 'All', icon: 'Filter' },
  { id: 'frontend', label: 'Frontend', icon: 'Layout' },
  { id: 'backend', label: 'Backend', icon: 'Server' },
  { id: 'database', label: 'Database', icon: 'Database' },
];

// Mock hook for testing
export function useMockPortfolioData() {
  // Mock implementations of utility functions
  const getFilteredItems = (activeFilters: Record<string, boolean>): PortfolioItem[] => {
    if (activeFilters.all) {
      return mockPortfolioItems;
    }

    return mockPortfolioItems.filter((item) => item.category.some((cat) => activeFilters[cat]));
  };

  const getItemsByCategory = (categoryId: string): PortfolioItem[] => {
    if (categoryId === 'all') {
      return mockPortfolioItems;
    }
    return mockPortfolioItems.filter((item) => item.category.includes(categoryId));
  };

  const getItemById = (itemId: string): PortfolioItem | undefined => {
    return mockPortfolioItems.find((item) => item.id === itemId);
  };

  const getAllTechStack = (): string[] => {
    const techStackSet = new Set<string>();
    mockPortfolioItems.forEach((item) => {
      item.techStack.forEach((tech) => techStackSet.add(tech));
    });
    return Array.from(techStackSet).sort();
  };

  const getItemsByTechStack = (techName: string): PortfolioItem[] => {
    return mockPortfolioItems.filter((item) =>
      item.techStack.some((tech) => tech.toLowerCase().includes(techName.toLowerCase())),
    );
  };

  return {
    // Mock data
    items: mockPortfolioItems,
    categories: mockPortfolioCategories,

    // Mock utility functions
    getFilteredItems,
    getItemsByCategory,
    getItemById,
    getAllTechStack,
    getItemsByTechStack,

    // Mock metadata
    totalItems: mockPortfolioItems.length,
    totalCategories: mockPortfolioCategories.length,
  };
}

// Export mock data for direct testing
export { mockPortfolioItems, mockPortfolioCategories };