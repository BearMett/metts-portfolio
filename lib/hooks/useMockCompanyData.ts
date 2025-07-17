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
    getCompaniesByType,
    getAllCompanyNames,

    // Mock metadata
    totalCompanies: mockCompanies.length,
    companyTypes: ['company', 'personal'] as const,
  };
}

// Export mock data for direct testing
export { mockCompanies };
