'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { useScrollPageTransition } from '@/hooks/use-scroll-page-transition';
import { getPageLabel } from '@/lib/page-order';

export function ScrollPageTransition() {
  const { nextPage } = useScrollPageTransition();
  const { t } = useLanguage();

  if (!nextPage) return null;

  const nextPageName = t(getPageLabel(nextPage));
  const goToNextLabel = t('scrollTransition.goToNext');

  return (
    <div className="border-t mt-12 py-8">
      {/* Desktop: subtle hint text, hidden on mobile */}
      <div className="hidden md:flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="text-sm">
          {t('scrollTransition.next')}: {nextPageName}
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>

      {/* Mobile: explicit navigation button */}
      <div className="md:hidden flex justify-center">
        <Link
          href={nextPage}
          className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
        >
          {goToNextLabel}: {nextPageName}
          <ChevronDown className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
