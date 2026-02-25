'use client';
import React, { useState, useMemo } from 'react';
import {
  Filter,
  Code,
  Database,
  Server,
  Cloud,
  Shield,
  Brain,
  RefreshCw,
  Link as LinkIcon,
  Layout,
  Search,
  FileDown,
  ChevronsUpDown,
} from 'lucide-react';
import type { PortfolioServerData } from '@/lib/data/types';
import {
  localizePortfolioItems,
  localizePortfolioCategories,
  localizeCompanies,
  groupPortfolioItemsByCompany,
} from '@/lib/portfolio-utils';
import { getFilterButtonClasses } from '@/lib/category-utils';
import { useLanguage } from './language-provider';
import { Button } from '@/components/ui/button';
import { downloadPortfolioPDF } from '@/lib/pdf-generator';
import { CompanySection } from './company-section-header';
import { PortfolioCard } from './portfolio-card';

interface InteractivePortfolioProps {
  portfolioData: PortfolioServerData;
}

export function InteractivePortfolio({ portfolioData }: InteractivePortfolioProps) {
  const { t, language } = useLanguage();

  const items = useMemo(() => localizePortfolioItems(portfolioData, language), [portfolioData, language]);
  const categories = useMemo(() => localizePortfolioCategories(portfolioData, language), [portfolioData, language]);
  const companies = useMemo(() => localizeCompanies(portfolioData, language), [portfolioData, language]);

  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
    all: true,
  });
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // 필터링 로직
  const handleFilterChange = (filter: string) => {
    if (filter === 'all') {
      const resetFilters: Record<string, boolean> = { all: true };
      categories.forEach((cat) => {
        if (cat.id !== 'all') resetFilters[cat.id] = false;
      });
      setActiveFilters(resetFilters);
    } else {
      const newFilters = {
        ...activeFilters,
        all: false,
        [filter]: !activeFilters[filter],
      };
      const anyFilterActive = Object.entries(newFilters).some(([key, value]) => key !== 'all' && value === true);
      if (!anyFilterActive) {
        newFilters.all = true;
      }
      setActiveFilters(newFilters);
    }
  };

  // 개별 카드 확장 토글
  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  // 필터링된 아이템
  const filteredItems = useMemo(() => {
    if (activeFilters.all) {
      return items;
    }
    return items.filter((item) => item.category.some((cat) => activeFilters[cat]));
  }, [items, activeFilters]);

  // 회사별 그룹핑
  const groups = useMemo(
    () => groupPortfolioItemsByCompany(filteredItems, companies),
    [filteredItems, companies],
  );

  // 모두 열기/닫기
  const allExpanded = filteredItems.length > 0 && filteredItems.every((item) => expandedItems.has(item.id));
  const toggleAll = () => {
    if (allExpanded) {
      setExpandedItems(new Set());
    } else {
      setExpandedItems(new Set(filteredItems.map((item) => item.id)));
    }
  };

  // 카테고리 레이블 매핑
  const getCategoryLabel = (category: string) => {
    return t(`portfolio.categories.${category}`);
  };

  // PDF 다운로드 처리 함수
  const handleFilteredDownloadPDF = async () => {
    const pdfLabels = {
      portfolioTitle: `${t('portfolio.title')} - ${getFilterLabel()}`,
      title: t('portfolio.projectTitle'),
      company: t('portfolio.company'),
      description: t('portfolio.projectDesc'),
      techStack: t('portfolio.usedTech'),
      tasks: t('portfolio.tasks'),
      achievements: t('portfolio.achievements'),
      category: t('portfolio.projectCategories'),
      date: t('portfolio.date'),
    };

    const filterLabel = getFilterLabel(true);
    const filename = language === 'ko' ? `포트폴리오_${filterLabel}.pdf` : `portfolio_${filterLabel}.pdf`;
    await downloadPortfolioPDF(filteredItems, pdfLabels, filename);
  };

  // 현재 필터 라벨 가져오기
  const getFilterLabel = (forFilename: boolean = false) => {
    if (activeFilters.all) {
      return forFilename ? 'all' : t('portfolio.filterAll');
    }
    const activeFilterNames = categories
      .filter((cat) => cat.id !== 'all' && activeFilters[cat.id])
      .map((cat) => (forFilename ? cat.id : getCategoryLabel(cat.id)));
    return activeFilterNames.join(forFilename ? '_' : ', ');
  };

  return (
    <div className="w-full">
      {/* 필터 섹션 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Filter size={18} className="mr-2 text-gray-700 dark:text-gray-300" />
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{t('portfolio.filterTitle')}</h2>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-xs px-2"
              onClick={toggleAll}
            >
              <ChevronsUpDown size={14} />
              <span>{allExpanded ? t('portfolio.collapseAll') : t('portfolio.expandAll')}</span>
            </Button>
            {process.env.NODE_ENV === 'development' && (
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-xs px-2"
                onClick={handleFilteredDownloadPDF}
              >
                <FileDown size={14} />
                <span>{t('portfolio.downloadFiltered')}</span>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={getFilterButtonClasses(category.id, !!activeFilters[category.id])}
            >
              {(() => {
                switch (category.icon) {
                  case 'Server':
                    return <Server size={14} />;
                  case 'Database':
                    return <Database size={14} />;
                  case 'Cloud':
                    return <Cloud size={14} />;
                  case 'Shield':
                    return <Shield size={14} />;
                  case 'Code':
                    return <Code size={14} />;
                  case 'Brain':
                    return <Brain size={14} />;
                  case 'RefreshCw':
                    return <RefreshCw size={14} />;
                  case 'Link':
                    return <LinkIcon size={14} />;
                  case 'Layout':
                    return <Layout size={14} />;
                  case 'Search':
                    return <Search size={14} />;
                  case 'Filter':
                  default:
                    return <Filter size={14} />;
                }
              })()}
              {category.label}
            </button>
          ))}
        </div>

        {!activeFilters.all && (
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t('portfolio.currentFilter')}: {getFilterLabel()}
          </div>
        )}
      </div>

      {/* 회사별 그룹 섹션 */}
      {groups.length === 0 ? (
        <div className="py-8 text-center text-gray-500 dark:text-gray-400">{t('portfolio.noProjects')}</div>
      ) : (
        <div className="space-y-10">
          {groups.map((group) => (
            <CompanySection key={group.company.id} company={group.company}>
              {group.items.map((item) => (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  isExpanded={expandedItems.has(item.id)}
                  onToggle={() => toggleExpand(item.id)}
                  getCategoryLabel={getCategoryLabel}
                />
              ))}
            </CompanySection>
          ))}
        </div>
      )}
    </div>
  );
}
