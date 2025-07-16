'use client';

import { Company } from './useCompanyData';

// Mock company data for testing
const mockCompanies: Company[] = [
  {
    id: 'mock-company-1',
    name: 'Mock Tech Inc.',
    shortName: 'MockTech',
    description: 'A mock technology company for testing purposes',
    colors: {
      primary: 'blue',
      timeline: {
        light: 'bg-blue-500',
        dark: 'bg-blue-400',
      },
      badge: {
        light: 'bg-blue-100 text-blue-800',
        dark: 'bg-blue-900 text-blue-100',
      },
      filter: {
        active: 'bg-blue-600 text-white',
        activeDark: 'bg-blue-500',
        inactive: 'bg-gray-200 text-gray-700',
        inactiveDark: 'bg-gray-700 text-gray-300',
      },
    },
    website: 'https://mocktech.com',
    type: 'company',
  },
  {
    id: 'mock-startup',
    name: 'Mock Startup',
    shortName: 'MockStartup',
    description: 'A mock startup company for testing',
    colors: {
      primary: 'green',
      timeline: {
        light: 'bg-green-500',
        dark: 'bg-green-400',
      },
      badge: {
        light: 'bg-green-100 text-green-800',
        dark: 'bg-green-900 text-green-100',
      },
      filter: {
        active: 'bg-green-600 text-white',
        activeDark: 'bg-green-500',
        inactive: 'bg-gray-200 text-gray-700',
        inactiveDark: 'bg-gray-700 text-gray-300',
      },
    },
    website: null,
    type: 'company',
  },
  {
    id: 'mock-personal',
    name: 'Mock Personal Project',
    shortName: 'Personal',
    description: 'Mock personal projects for testing',
    colors: {
      primary: 'purple',
      timeline: {
        light: 'bg-purple-500',
        dark: 'bg-purple-400',
      },
      badge: {
        light: 'bg-purple-100 text-purple-800',
        dark: 'bg-purple-900 text-purple-100',
      },
      filter: {
        active: 'bg-purple-600 text-white',
        activeDark: 'bg-purple-500',
        inactive: 'bg-gray-200 text-gray-700',
        inactiveDark: 'bg-gray-700 text-gray-300',
      },
    },
    website: null,
    type: 'personal',
  },
];

// Mock hook for testing
export function useMockCompanyData() {
  // Mock implementations of utility functions
  const getCompanyById = (companyId: string): Company | undefined => {
    return mockCompanies.find((company) => company.id === companyId);
  };

  const getCompanyByName = (companyName: string): Company | undefined => {
    return mockCompanies.find(
      (company) => company.name.includes(companyName) || company.shortName.includes(companyName),
    );
  };

  const getCompanyColorClass = (companyIdOrName: string): string => {
    let company = getCompanyById(companyIdOrName);

    if (!company) {
      company = getCompanyByName(companyIdOrName);
    }

    if (company) {
      return `${company.colors.timeline.light} dark:${company.colors.timeline.dark}`;
    }

    return 'bg-blue-500 dark:bg-blue-400';
  };

  const getCompanyBadgeClass = (companyIdOrName: string): string => {
    let company = getCompanyById(companyIdOrName);

    if (!company) {
      company = getCompanyByName(companyIdOrName);
    }

    if (company) {
      return `${company.colors.badge.light} dark:${company.colors.badge.dark}`;
    }

    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 text-gray-100';
  };

  const getCompanyFilterClass = (companyIdOrName: string, isActive: boolean = false): string => {
    let company = getCompanyById(companyIdOrName);

    if (!company) {
      company = getCompanyByName(companyIdOrName);
    }

    if (company) {
      return isActive
        ? `${company.colors.filter.active} dark:${company.colors.filter.activeDark}`
        : `${company.colors.filter.inactive} dark:${company.colors.filter.inactiveDark}`;
    }

    return isActive
      ? 'bg-gray-600 text-white dark:bg-gray-500'
      : 'bg-gray-200 text-gray-700 dark:bg-gray-700 text-gray-300';
  };

  const getCompaniesByType = (type: 'company' | 'personal'): Company[] => {
    return mockCompanies.filter((company) => company.type === type);
  };

  const getAllCompanyNames = () => {
    return mockCompanies.map((company) => ({
      id: company.id,
      name: company.name,
      shortName: company.shortName,
    }));
  };

  return {
    // Mock data
    companies: mockCompanies,

    // Mock utility functions
    getCompanyById,
    getCompanyByName,
    getCompanyColorClass,
    getCompanyBadgeClass,
    getCompanyFilterClass,
    getCompaniesByType,
    getAllCompanyNames,

    // Mock metadata
    totalCompanies: mockCompanies.length,
    companyTypes: ['company', 'personal'] as const,
  };
}

// Export mock data for direct testing
export { mockCompanies };
