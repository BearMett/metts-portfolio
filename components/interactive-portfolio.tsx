'use client';
import React, { useState } from 'react';
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
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PortfolioItem, usePortfolioData } from '@/lib/portfolio-data';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from './language-provider';

interface InteractivePortfolioProps {
  items: PortfolioItem[];
}

export function InteractivePortfolio({ items }: InteractivePortfolioProps) {
  const { t } = useLanguage();
  const { categories, getFilteredItems } = usePortfolioData();
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
  const filteredItems = getFilteredItems(activeFilters);

  // 회사별 타임라인 포인트 색상 가져오기
  const getCompanyColorClass = (company: string): string => {
    if (company.includes('BnZ')) return 'bg-purple-500 dark:bg-purple-400';
    else if (company.includes('Maxst')) return 'bg-blue-500 dark:bg-blue-400';
    else if (company.includes('웨어밸리')) return 'bg-orange-500 dark:bg-orange-400';
    else if (company.includes('프로젝트')) return 'bg-green-500 dark:bg-green-400';
    else if (company.includes('버터')) return 'bg-yellow-500 dark:bg-yellow-400';
    else return 'bg-blue-500 dark:bg-blue-400';
  };

  // 아이콘 매핑
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'backend':
        return <Server size={16} />;
      case 'database':
        return <Database size={16} />;
      case 'devops':
        return <Cloud size={16} />;
      case 'security':
        return <Shield size={16} />;
      case 'parser':
        return <Code size={16} />;
      case 'ai':
        return <Brain size={16} />;
      case 'refactoring':
        return <RefreshCw size={16} />;
      case 'integration':
        return <LinkIcon size={16} />;
      case 'frontend':
        return <Layout size={16} />;
      case 'search':
        return <Search size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  // 카테고리 레이블 매핑
  const getCategoryLabel = (category: string) => {
    return t(`portfolio.categories.${category}`);
  };

  // 카테고리 색상 매핑
  const getCategoryColorClasses = (category: string): string => {
    switch (category) {
      case 'backend':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'database':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'devops':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100';
      case 'security':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      case 'parser':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'ai':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100';
      case 'refactoring':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'integration':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100';
      case 'frontend':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100';
      case 'search':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100';
      case 'static analysis':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
    }
  };

  // 필터 버튼 색상 매핑
  const getFilterButtonClasses = (categoryId: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors';
    if (categoryId === 'all') {
      return cn(
        baseClasses,
        activeFilters.all
          ? 'bg-blue-600 text-white dark:bg-blue-500'
          : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      );
    }
    const categoryClasses: Record<string, string> = {
      backend: 'bg-blue-600 text-white dark:bg-blue-500',
      database: 'bg-yellow-600 text-white dark:bg-yellow-500',
      devops: 'bg-purple-600 text-white dark:bg-purple-500',
      security: 'bg-red-600 text-white dark:bg-red-500',
      parser: 'bg-green-600 text-white dark:bg-green-500',
      ai: 'bg-indigo-600 text-white dark:bg-indigo-500',
      refactoring: 'bg-orange-600 text-white dark:bg-orange-500',
      integration: 'bg-teal-600 text-white dark:bg-teal-500',
      frontend: 'bg-pink-600 text-white dark:bg-pink-500',
      search: 'bg-emerald-600 text-white dark:bg-emerald-500',
    };
    const activeClass = categoryClasses[categoryId] || 'bg-gray-600 text-white dark:bg-gray-500';
    const inactiveClass = 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    return cn(baseClasses, activeFilters[categoryId] ? activeClass : inactiveClass);
  };

  return (
    <div className="w-full">
      {/* 필터 섹션 */}
      <div className="mb-8">
        <div className="flex items-center mb-3">
          <Filter size={18} className="mr-2 text-gray-700 dark:text-gray-300" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{t('portfolio.filterTitle')}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={getFilterButtonClasses(category.id)}
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
                  className={`absolute left-6 w-6 h-6 rounded-full transform -translate-x-1/2 mt-3 z-10 border-2 border-white dark:border-gray-800 shadow-md ${getCompanyColorClass(item.company)}`}
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
