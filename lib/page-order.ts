export const PAGE_ORDER = ['/', '/resume', '/portfolio', '/contact'] as const;
export type PagePath = (typeof PAGE_ORDER)[number];

export function getNextPage(currentPath: string): PagePath | null {
  const index = PAGE_ORDER.indexOf(currentPath as PagePath);
  if (index === -1 || index === PAGE_ORDER.length - 1) return null;
  return PAGE_ORDER[index + 1];
}

export function getPageLabel(path: PagePath): string {
  const labels: Record<PagePath, string> = {
    '/': 'navigation.home',
    '/resume': 'navigation.resume',
    '/portfolio': 'navigation.portfolio',
    '/contact': 'navigation.contact',
  };
  return labels[path];
}
