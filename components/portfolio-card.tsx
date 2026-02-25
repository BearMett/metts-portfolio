'use client';

import React from 'react';
import { ChevronDown, ChevronUp, Code, ExternalLink, Image as ImageIcon, Trophy, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import type { PortfolioItem } from '@/lib/data/types';
import { getCategoryIcon, getCategoryColorClasses } from '@/lib/category-utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from './language-provider';

interface PortfolioCardProps {
  item: PortfolioItem;
  isExpanded: boolean;
  onToggle: () => void;
  getCategoryLabel: (category: string) => string;
}

export function PortfolioCard({ item, isExpanded, onToggle, getCategoryLabel }: PortfolioCardProps) {
  const { t } = useLanguage();

  // Show top 2 achievements in the preview
  const previewAchievements = item.achievements.slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
      {/* Header section - always visible, clickable to toggle */}
      <div
        className="p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {/* Title row with chevron */}
        <div className="flex justify-between items-start">
          <div className="flex-1 mr-3">
            <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{item.title}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.company}</div>
          </div>
          <div className="flex-shrink-0 mt-1">
            {isExpanded ? (
              <ChevronUp size={20} className="text-gray-400" />
            ) : (
              <ChevronDown size={20} className="text-gray-400" />
            )}
          </div>
        </div>

        {/* Short description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.shortDesc}</p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2.5 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Preview achievements (top 1-2) */}
        {previewAchievements.length > 0 && (
          <div className="mb-3">
            <div className="flex items-center gap-1 mb-1">
              <Trophy size={14} className="text-amber-500 dark:text-amber-400" />
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {t('portfolio.achievements')}
              </span>
            </div>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-0.5">
              {previewAchievements.map((achievement) => (
                <li key={`preview-${item.id}-${achievement.substring(0, 20)}`} className="flex items-start gap-1.5">
                  <span className="text-amber-500 dark:text-amber-400 mt-1 flex-shrink-0">&#8226;</span>
                  <span className="line-clamp-1">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.category.map((cat) => (
            <span
              key={cat}
              className={`inline-flex items-center text-xs rounded-full px-2 py-0.5 gap-1 ${getCategoryColorClasses(cat)}`}
            >
              {getCategoryIcon(cat)}
              <span>{getCategoryLabel(cat)}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Expandable content with CSS grid animation */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 border-t border-gray-100 dark:border-gray-700">
            {/* Full description */}
            <div className="mb-4 pt-4">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                {t('portfolio.projectDesc')}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Tasks list */}
            {item.tasks.length > 0 && (
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
            )}

            {/* Full achievements list (if more than the preview 2) */}
            {item.achievements.length > 2 && (
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
            )}

            {/* Source code link */}
            {item.sourceUrl && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  {t('portfolio.sourceCode')}
                </h4>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={14} />
                  {t('portfolio.viewSource')}
                </a>
              </div>
            )}

            {/* Image gallery */}
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
        </div>
      </div>
    </div>
  );
}
