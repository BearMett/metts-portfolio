'use client';
import React, { useState, useMemo } from 'react';
import {
  Filter,
  Code,
  Database,
  Server,
  Cloud,
  ChevronDown,
  ChevronUp,
  Shield,
  Brain,
  RefreshCw,
  Link as LinkIcon,
  Layout,
  Search,
  Image as ImageIcon,
  ZoomIn,
  FileDown,
} from 'lucide-react';
import type { PortfolioServerData } from '@/lib/data/types';
import { localizePortfolioItems, localizePortfolioCategories } from '@/lib/portfolio-utils';
import { getCategoryIcon, getCategoryColorClasses, getFilterButtonClasses } from '@/lib/category-utils';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from './language-provider';
import { Button } from '@/components/ui/button';
import { downloadPortfolioPDF } from '@/lib/pdf-generator';

interface InteractivePortfolioProps {
  portfolioData: PortfolioServerData;
}

export function InteractivePortfolio({ portfolioData }: InteractivePortfolioProps) {
  const { t, language } = useLanguage();

  const items = useMemo(() => localizePortfolioItems(portfolioData, language), [portfolioData, language]);

  const categories = useMemo(() => localizePortfolioCategories(portfolioData, language), [portfolioData, language]);
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
    all: true,
  });
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // 필터링 로직
  const handleFilterChange = (filter: string) => {
    if (filter === 'all') {
      // 'all' 필터 선택 시 다른 모든 필터를 비활성화
      const resetFilters: Record<string, boolean> = { all: true };
      categories.forEach((cat) => {
        if (cat.id !== 'all') resetFilters[cat.id] = false;
      });
      setActiveFilters(resetFilters);
    } else {
      // 다른 필터 선택 시 'all' 필터를 비활성화하고 해당 필터 토글
      const newFilters = {
        ...activeFilters,
        all: false,
        [filter]: !activeFilters[filter],
      };
      // 만약 모든 필터가 비활성화되면 'all' 필터를 활성화
      const anyFilterActive = Object.entries(newFilters).some(([key, value]) => key !== 'all' && value === true);
      if (!anyFilterActive) {
        newFilters.all = true;
      }
      setActiveFilters(newFilters);
    }
  };

  // 아이템 확장/축소 토글
  const toggleExpand = (id: string) => {
    setExpandedItems({
      ...expandedItems,
      [id]: !expandedItems[id],
    });
  };

  // 필터링된 아이템 가져오기
  const filteredItems = useMemo(() => {
    if (activeFilters.all) {
      return items;
    }
    return items.filter((item) => item.category.some((cat) => activeFilters[cat]));
  }, [items, activeFilters]);

  // 회사별 타임라인 포인트 색상 가져오기
  const getTimelineColorClass = (itemId: string): string => {
    const rawItem = portfolioData.items.find((i) => i.id === itemId);
    if (!rawItem) return 'bg-blue-500 dark:bg-blue-400';
    const company = portfolioData.companies.find((c) => c.id === rawItem.companyId);
    if (!company) {
      return 'bg-blue-500 dark:bg-blue-400';
    }

    // Tailwind CSS 색상 맵 미리 정의
    const colorMap: Record<string, string> = {
      purple: 'bg-purple-500 dark:bg-purple-400',
      blue: 'bg-blue-500 dark:bg-blue-400',
      orange: 'bg-orange-500 dark:bg-orange-400',
      yellow: 'bg-yellow-500 dark:bg-yellow-400',
      green: 'bg-green-500 dark:bg-green-400',
      red: 'bg-red-500 dark:bg-red-400',
      indigo: 'bg-indigo-500 dark:bg-indigo-400',
      pink: 'bg-pink-500 dark:bg-pink-400',
      teal: 'bg-teal-500 dark:bg-teal-400',
      cyan: 'bg-cyan-500 dark:bg-cyan-400',
      emerald: 'bg-emerald-500 dark:bg-emerald-400',
      lime: 'bg-lime-500 dark:bg-lime-400',
      amber: 'bg-amber-500 dark:bg-amber-400',
      rose: 'bg-rose-500 dark:bg-rose-400',
      violet: 'bg-violet-500 dark:bg-violet-400',
      slate: 'bg-slate-500 dark:bg-slate-400',
      gray: 'bg-gray-500 dark:bg-gray-400',
    };

    // 회사의 primary 색상 키를 사용해서 색상 클래스 반환
    return colorMap[company.colors.primary] || 'bg-blue-500 dark:bg-blue-400';
  };

  // PDF 다운로드 처리 함수 - 현재 필터링된 항목만 포함
  const handleFilteredDownloadPDF = async () => {
    // 라벨을 현지화된 버전으로 준비
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

    // 파일 이름 설정 (언어와 필터에 따라 다르게)
    const filterLabel = getFilterLabel(true);
    const filename = language === 'ko' ? `포트폴리오_${filterLabel}.pdf` : `portfolio_${filterLabel}.pdf`;

    // 현재 필터링된 항목만 PDF로 다운로드
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

  // 카테고리 레이블 매핑
  const getCategoryLabel = (category: string) => {
    return t(`portfolio.categories.${category}`);
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

          {/* 필터링된 항목 PDF 다운로드 버튼 */}
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

        {/* 현재 필터 표시 */}
        {!activeFilters.all && (
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t('portfolio.currentFilter')}: {getFilterLabel()}
          </div>
        )}
      </div>

      {/* 타임라인 섹션 */}
      <div className="relative">
        {/* 타임라인 중앙선 */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

        {filteredItems.length === 0 ? (
          <div className="py-8 text-center text-gray-500 dark:text-gray-400">{t('portfolio.noProjects')}</div>
        ) : (
          <div className="space-y-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="relative pl-16">
                {/* 타임라인 포인트 */}
                <div
                  className={`absolute left-6 w-6 h-6 rounded-full transform -translate-x-1/2 mt-3 z-10 border-2 border-white dark:border-gray-800 shadow-md ${getTimelineColorClass(item.id)}`}
                ></div>

                {/* 아이템 카드 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
                  {/* 헤더 섹션 - 항상 표시 */}
                  <div
                    className="p-4 cursor-pointer flex justify-between items-start hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    onClick={() => toggleExpand(item.id)}
                  >
                    <div className="flex-1 mr-4">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{item.title}</h3>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.company}</div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">{item.shortDesc}</p>

                      {/* 카테고리 태그 */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.category.map((cat) => (
                          <span
                            key={cat}
                            className={`inline-flex items-center text-xs rounded-full px-2 py-1 gap-1 ${getCategoryColorClasses(cat)}`}
                          >
                            {getCategoryIcon(cat)}
                            <span>{getCategoryLabel(cat)}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 대표 이미지 (첫 번째 이미지) */}
                    {item.images && item.images.length > 0 && (
                      <div className="hidden md:flex flex-shrink-0 w-32 h-32 relative rounded-md border border-gray-200 dark:border-gray-700 overflow-hidden items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="w-full h-full relative cursor-zoom-in group p-0 border-0">
                              <Image
                                src={item.images[0].src}
                                alt={item.images[0].alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 0vw, 128px"
                              />
                              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100" />
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none shadow-none">
                            <div className="relative w-full h-auto max-h-[80vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                              <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                  src={item.images[0].src}
                                  alt={item.images[0].alt}
                                  width={900}
                                  height={600}
                                  className="object-contain max-h-[80vh]"
                                />
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                                {item.images[0].alt}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}

                    <div className="flex-shrink-0 ml-3">
                      {expandedItems[item.id] ? (
                        <ChevronUp size={20} className="text-gray-400 mt-2" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400 mt-2" />
                      )}
                    </div>
                  </div>

                  {/* 확장 콘텐츠 - 토글 시 표시 */}
                  {expandedItems[item.id] && (
                    <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
                      {/* 상세 설명 */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                          {t('portfolio.projectDesc')}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
                      </div>

                      {/* 소스 링크가 있을 경우 표시 */}
                      {item.sourceUrl && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                            {t('portfolio.sourceCode')}
                          </h4>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                          >
                            <Code size={14} />
                            {t('portfolio.viewSource')}
                          </a>
                        </div>
                      )}

                      {/* 기술 스택 */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                          {t('portfolio.usedTech')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 진행 업무 */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                          {t('portfolio.tasks')}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          {item.tasks.map((task) => (
                            <li key={`${item.id}-task-${task.substring(0, 20)}`} className="pl-1">
                              <span className="pl-2">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 성과 */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                          {t('portfolio.achievements')}
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                          {item.achievements.map((achievement) => (
                            <li key={`${item.id}-achievement-${achievement.substring(0, 20)}`} className="pl-1">
                              <span className="pl-2">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* 이미지 갤러리 - 이미지가 있는 경우에만 표시 */}
                      {item.images && item.images.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                            <div className="flex items-center gap-2">
                              <ImageIcon size={16} />
                              <span>{t('portfolio.screenshots')}</span>
                            </div>
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.images.map((image) => (
                              <div key={`${item.id}-image-${image.src}`} className="relative">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="relative h-48 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 cursor-zoom-in group">
                                      <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                      />
                                      <div className="absolute inset-0 bg-black/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100" />
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="sm:max-w-[900px] p-0 bg-transparent border-none shadow-none">
                                    <div className="relative w-full h-auto max-h-[80vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                                      <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                          src={image.src}
                                          alt={image.alt}
                                          width={900}
                                          height={600}
                                          className="object-contain max-h-[80vh]"
                                        />
                                      </div>
                                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                                        {image.alt}
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                                <p className="text-xs text-center mt-1 text-gray-500 dark:text-gray-400">{image.alt}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
