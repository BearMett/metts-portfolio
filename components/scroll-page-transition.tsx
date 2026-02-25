'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/components/language-provider';
import { getNextPage, getPageLabel } from '@/lib/page-order';

export function ScrollPageTransition() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const nextPage = getNextPage(pathname);

  if (!nextPage) return null;

  const nextPageName = t(getPageLabel(nextPage));
  const goToNextLabel = t('scrollTransition.goToNext');

  return (
    <div className="border-t mt-12 py-8 flex justify-center">
      <Link
        href={nextPage}
        className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
      >
        {goToNextLabel}: {nextPageName}
        <ChevronDown className="h-4 w-4" />
      </Link>
    </div>
  );
}
