'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/components/language-provider';
import { Language } from '@/lib/resource.const';
import companiesData from '@/lib/data/companies.json';

// Types for company data
export interface CompanyTranslated {
  id: string;
  name: { [key in Language]: string };
  shortName: { [key in Language]: string };
  description: { [key in Language]: string };
  colors: {
    primary: string;
  };
  website: string | null;
  type: 'company' | 'personal';
}

export interface Company {
  id: string;
  name: string;
  shortName: string;
  description: string;
  colors: {
    primary: string;
  };
  website: string | null;
  type: 'company' | 'personal';
}

// Custom hook for company data management
export function useCompanyData() {
  const { language } = useLanguage();

  // Transform and memoize company data
  const companies = useMemo((): Company[] => {
    const typedData = companiesData as CompanyTranslated[];
    return typedData.map((company) => ({
      id: company.id,
      name: company.name[language],
      shortName: company.shortName[language],
      description: company.description[language],
      colors: company.colors,
      website: company.website,
      type: company.type,
    }));
  }, [language]);

  // Utility function to get company by ID
  const getCompanyById = useMemo(() => {
    return (companyId: string): Company | undefined => {
      return companies.find((company) => company.id === companyId);
    };
  }, [companies]);

  // Utility function to get company by name (for backward compatibility)
  const getCompanyByName = useMemo(() => {
    return (companyName: string): Company | undefined => {
      return companies.find((company) => company.name.includes(companyName) || company.shortName.includes(companyName));
    };
  }, [companies]);

  // Utility function to get companies by type
  const getCompaniesByType = useMemo(() => {
    return (type: 'company' | 'personal'): Company[] => {
      return companies.filter((company) => company.type === type);
    };
  }, [companies]);

  // Utility function to get all company names for autocomplete/filtering
  const getAllCompanyNames = useMemo(() => {
    return companies.map((company) => ({
      id: company.id,
      name: company.name,
      shortName: company.shortName,
    }));
  }, [companies]);

  return {
    // Data
    companies,

    // Utility functions
    getCompanyById,
    getCompanyByName,
    getCompaniesByType,
    getAllCompanyNames,

    // Metadata
    totalCompanies: companies.length,
    companyTypes: ['company', 'personal'] as const,
  };
}
