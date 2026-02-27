import React from 'react';
import {
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
  Smartphone,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Returns a lucide-react icon JSX element for the given portfolio category.
 */
export function getCategoryIcon(category: string): React.ReactElement {
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
    case 'mobile':
      return <Smartphone size={16} />;
    case 'cloud':
      return <Cloud size={16} />;
    default:
      return <Code size={16} />;
  }
}

/**
 * Returns Tailwind CSS class string for category badge colors (background + text).
 */
export function getCategoryColorClasses(category: string): string {
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
    case 'mobile':
      return 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-100';
    case 'cloud':
      return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-100';
    case 'static analysis':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
  }
}

/**
 * Returns Tailwind CSS class string for filter buttons based on category and active state.
 */
export function getFilterButtonClasses(categoryId: string, isActive: boolean): string {
  const baseClasses = 'px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors';

  if (categoryId === 'all') {
    return cn(
      baseClasses,
      isActive
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
    mobile: 'bg-fuchsia-600 text-white dark:bg-fuchsia-500',
    cloud: 'bg-sky-600 text-white dark:bg-sky-500',
  };

  const activeClass = categoryClasses[categoryId] || 'bg-gray-600 text-white dark:bg-gray-500';
  const inactiveClass = 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300';

  return cn(baseClasses, isActive ? activeClass : inactiveClass);
}
