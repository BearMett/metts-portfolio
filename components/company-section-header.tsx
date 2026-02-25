'use client';

import type { Company } from '@/lib/data/types';

const bgColorMap: Record<string, string> = {
  blue: 'bg-blue-100 dark:bg-blue-900/30',
  purple: 'bg-purple-100 dark:bg-purple-900/30',
  indigo: 'bg-indigo-100 dark:bg-indigo-900/30',
  green: 'bg-green-100 dark:bg-green-900/30',
  rose: 'bg-rose-100 dark:bg-rose-900/30',
  amber: 'bg-amber-100 dark:bg-amber-900/30',
  orange: 'bg-orange-100 dark:bg-orange-900/30',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30',
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

interface CompanySectionHeaderProps {
  company: Company;
}

export function CompanySectionHeader({ company }: CompanySectionHeaderProps) {
  const color = company.colors.primary;
  const bgClass = bgColorMap[color] || 'bg-gray-100 dark:bg-gray-800';
  const textClass = textColorMap[color] || 'text-gray-700 dark:text-gray-300';

  return (
    <div className={`rounded-lg px-4 py-3 mb-4 ${bgClass}`}>
      <div className="flex items-center justify-between">
        <h2 className={`text-lg font-semibold ${textClass}`}>{company.name}</h2>
        {company.period && (
          <span className="text-sm text-muted-foreground">
            {company.period.from} ~ {company.period.to ?? '현재'}
          </span>
        )}
      </div>
    </div>
  );
}
