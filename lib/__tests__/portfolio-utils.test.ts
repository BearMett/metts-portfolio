import { describe, it, expect } from 'vitest';
import { localizePortfolioItems } from '@/lib/portfolio-utils';
import type { PortfolioItemTranslated, CompanyTranslated } from '@/lib/data/types';

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
