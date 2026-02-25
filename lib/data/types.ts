import { Language } from '@/lib/resource.const';

// Company Types
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

// Portfolio Types
export interface PortfolioItemTranslated {
  id: string;
  date: string;
  title: { [key in Language]: string };
  companyId: string;
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
  companyId: string;
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

// Category Types
export interface PortfolioCategoryTranslated {
  id: string;
  label: { [key in Language]: string };
  icon: string;
}

export interface PortfolioCategory {
  id: string;
  label: string;
  icon: string;
}

// About Me Types
export interface AboutMeTranslated {
  name: { [key in Language]: string };
  tagline: { [key in Language]: string };
  introduction: { [key in Language]: string };
  values: {
    title: { [key in Language]: string };
    items: { [key in Language]: string[] };
  };
  strengths: {
    title: { [key in Language]: string };
    items: { [key in Language]: string[] };
  };
  skillStack: { [key in Language]: string };
}

export interface AboutMe {
  name: string;
  tagline: string;
  introduction: string;
  values: {
    title: string;
    items: string[];
  };
  strengths: {
    title: string;
    items: string[];
  };
  skillStack: string;
}

// Skill Category Types
export interface SkillCategoryTranslated {
  id: string;
  label: { [key in Language]: string };
  skills: { [key in Language]: string[] };
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

// Achievement Types
export interface AchievementTranslated {
  id: string;
  title: { [key in Language]: string };
  metric: { [key in Language]: string };
  result: { [key in Language]: string };
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  result: string;
}

// Attitude Types
export interface AttitudeTranslated {
  id: string;
  title: { [key in Language]: string };
  description: { [key in Language]: string };
}

export interface Attitude {
  id: string;
  title: string;
  description: string;
}

// Company Group Type (for grouping portfolio items by company)
export interface CompanyGroup {
  company: Company;
  items: PortfolioItem[];
  latestDate: string; // "YYYY-MM" format, for sorting sections
  dateRange: { from: string; to: string }; // derived min/max from item dates
}

// Server-to-client data transfer type (bilingual portfolio data)
export interface PortfolioServerData {
  items: PortfolioItemTranslated[];
  categories: PortfolioCategoryTranslated[];
  companies: CompanyTranslated[];
}
