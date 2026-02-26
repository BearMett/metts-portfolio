/**
 * Hex color maps for print-friendly rendering.
 * Extracted from pdf-generator.ts and category-utils.tsx for inline styles
 * (Tailwind dark: classes don't work in print context).
 */

/** Category badge colors (background + text) for inline styles */
export const categoryColors: Record<string, { bg: string; text: string }> = {
  backend: { bg: '#dbeafe', text: '#1e40af' },
  database: { bg: '#fef3c7', text: '#92400e' },
  devops: { bg: '#ede9fe', text: '#5b21b6' },
  security: { bg: '#fee2e2', text: '#991b1b' },
  parser: { bg: '#d1fae5', text: '#065f46' },
  ai: { bg: '#e0e7ff', text: '#3730a3' },
  refactoring: { bg: '#ffedd5', text: '#9a3412' },
  integration: { bg: '#ccfbf1', text: '#115e59' },
  frontend: { bg: '#fce7f3', text: '#9d174d' },
  search: { bg: '#d1fae5', text: '#065f46' },
  mobile: { bg: '#e0f2fe', text: '#075985' },
  cloud: { bg: '#f3e8ff', text: '#6b21a8' },
};

/** Company primary color name → hex border color for print */
export const companyBorderColors: Record<string, string> = {
  blue: '#60a5fa',
  purple: '#a78bfa',
  indigo: '#818cf8',
  green: '#4ade80',
  rose: '#fb7185',
  amber: '#fbbf24',
  orange: '#fb923c',
  yellow: '#facc15',
};

/** Company primary color name → hex text color for print */
export const companyTextColors: Record<string, string> = {
  blue: '#1d4ed8',
  purple: '#7c3aed',
  indigo: '#4f46e5',
  green: '#15803d',
  rose: '#e11d48',
  amber: '#d97706',
  orange: '#ea580c',
  yellow: '#ca8a04',
};

export function getCategoryColor(category: string): { bg: string; text: string } {
  return categoryColors[category] || { bg: '#f3f4f6', text: '#374151' };
}

export function getCompanyBorderColor(colorName: string): string {
  return companyBorderColors[colorName] || '#9ca3af';
}

export function getCompanyTextColor(colorName: string): string {
  return companyTextColors[colorName] || '#374151';
}
