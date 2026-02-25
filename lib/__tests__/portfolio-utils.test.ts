import { describe, it, expect } from 'vitest';
import { localizePortfolioItems, groupPortfolioItemsByCompany } from '@/lib/portfolio-utils';
import type { PortfolioItemTranslated, CompanyTranslated, PortfolioItem, Company } from '@/lib/data/types';

const mockCompanies: CompanyTranslated[] = [
  {
    id: 'test-co',
    name: { ko: '테스트', en: 'Test Co' },
    shortName: { ko: 'TC', en: 'TC' },
    description: { ko: '설명', en: 'Desc' },
    colors: { primary: 'blue' },
    website: null,
    type: 'company',
  },
];

const mockItem: PortfolioItemTranslated = {
  id: 'item-1',
  date: '2025-01',
  title: { ko: '프로젝트', en: 'Project' },
  companyId: 'test-co',
  shortDesc: { ko: '짧은설명', en: 'Short' },
  description: { ko: '설명', en: 'Desc' },
  techStack: ['React'],
  category: ['frontend'],
  tasks: { ko: ['작업1'], en: ['Task1'] },
  achievements: { ko: ['성과1'], en: ['Ach1'] },
};

describe('localizePortfolioItems', () => {
  it('should preserve companyId in localized output', () => {
    const result = localizePortfolioItems(
      { items: [mockItem], categories: [], companies: mockCompanies },
      'en',
    );
    expect(result[0].companyId).toBe('test-co');
  });

  it('should still resolve company display name', () => {
    const result = localizePortfolioItems(
      { items: [mockItem], categories: [], companies: mockCompanies },
      'en',
    );
    expect(result[0].company).toBe('Test Co');
  });

  it('should localize company name based on language', () => {
    const result = localizePortfolioItems(
      { items: [mockItem], categories: [], companies: mockCompanies },
      'ko',
    );
    expect(result[0].company).toBe('테스트');
    expect(result[0].companyId).toBe('test-co');
  });
});

const mockLocalizedCompanies: Company[] = [
  {
    id: 'co-a',
    name: 'Company A',
    shortName: 'A',
    description: '',
    colors: { primary: 'blue' },
    website: null,
    type: 'company',
    period: { from: '2025-01', to: '2025-06' },
  },
  {
    id: 'co-b',
    name: 'Company B',
    shortName: 'B',
    description: '',
    colors: { primary: 'red' },
    website: null,
    type: 'company',
    period: { from: '2024-01', to: '2024-12' },
  },
];

const mockLocalizedItems: PortfolioItem[] = [
  {
    id: '1',
    date: '2024-06',
    title: 'Old B',
    companyId: 'co-b',
    company: 'Company B',
    shortDesc: '',
    description: '',
    techStack: [],
    category: [],
    tasks: [],
    achievements: [],
  },
  {
    id: '2',
    date: '2025-03',
    title: 'New A',
    companyId: 'co-a',
    company: 'Company A',
    shortDesc: '',
    description: '',
    techStack: [],
    category: [],
    tasks: [],
    achievements: [],
  },
  {
    id: '3',
    date: '2025-01',
    title: 'Old A',
    companyId: 'co-a',
    company: 'Company A',
    shortDesc: '',
    description: '',
    techStack: [],
    category: [],
    tasks: [],
    achievements: [],
  },
  {
    id: '4',
    date: '2024-12',
    title: 'New B',
    companyId: 'co-b',
    company: 'Company B',
    shortDesc: '',
    description: '',
    techStack: [],
    category: [],
    tasks: [],
    achievements: [],
  },
];

describe('groupPortfolioItemsByCompany', () => {
  it('should group items by companyId', () => {
    const groups = groupPortfolioItemsByCompany(mockLocalizedItems, mockLocalizedCompanies);
    expect(groups).toHaveLength(2);
  });

  it('should sort groups by company period.to descending (most recent first)', () => {
    const groups = groupPortfolioItemsByCompany(mockLocalizedItems, mockLocalizedCompanies);
    expect(groups[0].company.id).toBe('co-a'); // period.to: 2025-06
    expect(groups[1].company.id).toBe('co-b'); // period.to: 2024-12
  });

  it('should sort items within each group by date descending', () => {
    const groups = groupPortfolioItemsByCompany(mockLocalizedItems, mockLocalizedCompanies);
    const coAItems = groups.find((g) => g.company.id === 'co-a')!.items;
    expect(coAItems[0].date).toBe('2025-03');
    expect(coAItems[1].date).toBe('2025-01');
  });

  it('should use latest item date as latestDate when company has no period', () => {
    const companiesNoPeriod: Company[] = [
      { ...mockLocalizedCompanies[0], period: undefined },
      { ...mockLocalizedCompanies[1], period: undefined },
    ];
    const groups = groupPortfolioItemsByCompany(mockLocalizedItems, companiesNoPeriod);
    const coA = groups.find((g) => g.company.id === 'co-a')!;
    expect(coA.latestDate).toBe('2025-03');
  });

  it('should exclude groups with no items after filtering', () => {
    const filtered = mockLocalizedItems.filter((i) => i.companyId === 'co-a');
    const groups = groupPortfolioItemsByCompany(filtered, mockLocalizedCompanies);
    expect(groups).toHaveLength(1);
    expect(groups[0].company.id).toBe('co-a');
  });
});
