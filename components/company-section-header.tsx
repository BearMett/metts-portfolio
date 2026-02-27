'use client';

import type { Company } from '@/lib/data/types';
import { useLanguage } from '@/components/language-provider';

const borderColorMap: Record<string, string> = {
  blue: 'border-l-blue-400 dark:border-l-blue-500',
  purple: 'border-l-purple-400 dark:border-l-purple-500',
  indigo: 'border-l-indigo-400 dark:border-l-indigo-500',
  green: 'border-l-green-400 dark:border-l-green-500',
  rose: 'border-l-rose-400 dark:border-l-rose-500',
  amber: 'border-l-amber-400 dark:border-l-amber-500',
  orange: 'border-l-orange-400 dark:border-l-orange-500',
  yellow: 'border-l-yellow-400 dark:border-l-yellow-500',
};

const textColorMap: Record<string, string> = {
  blue: 'text-blue-700 dark:text-blue-300',
  purple: 'text-purple-700 dark:text-purple-300',
  indigo: 'text-indigo-700 dark:text-indigo-300',
  green: 'text-green-700 dark:text-green-300',
  rose: 'text-rose-700 dark:text-rose-300',
  amber: 'text-amber-700 dark:text-amber-300',
  orange: 'text-orange-700 dark:text-orange-300',
  yellow: 'text-yellow-700 dark:text-yellow-300',
};

interface CompanySectionProps {
  company: Company;
  children: React.ReactNode;
}

export function CompanySection({ company, children }: CompanySectionProps) {
  const { t } = useLanguage();
  const color = company.colors.primary;
  const borderClass = borderColorMap[color] || 'border-l-gray-400 dark:border-l-gray-500';
  const textClass = textColorMap[color] || 'text-gray-700 dark:text-gray-300';

  return (
    <section className={`rounded-lg border-l-4 ${borderClass} bg-gray-50 dark:bg-gray-900/50 overflow-hidden`}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <div className="flex items-center justify-between">
          <h2 className={`text-lg font-semibold ${textClass}`}>{company.name}</h2>
          {company.period && (
            <span className="text-sm text-muted-foreground">
              {company.period.from} ~ {company.period.to ?? t('common.present')}
            </span>
          )}
        </div>
      </div>
      {/* Cards */}
      <div className="px-5 pb-5 space-y-3">
        {children}
      </div>
    </section>
  );
}
