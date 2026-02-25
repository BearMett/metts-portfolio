'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getNextPage } from '@/lib/page-order';

const DELTA_THRESHOLD = 150;
const TIME_WINDOW_MS = 500;
const BOTTOM_TOLERANCE_PX = 5;
const MOUNT_COOLDOWN_MS = 300;

export function useScrollPageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const nextPage = getNextPage(pathname);

  const accumulatedDelta = useRef(0);
  const lastWheelTime = useRef(0);
  const isTransitioning = useRef(false);
  const mountTime = useRef(Date.now());

  // Reset refs on route change
  useEffect(() => {
    accumulatedDelta.current = 0;
    lastWheelTime.current = 0;
    isTransitioning.current = false;
    mountTime.current = Date.now();
  }, [pathname]);

  const isAtBottom = useCallback((): boolean => {
    const { scrollY, innerHeight } = window;
    const docHeight = document.documentElement.scrollHeight;
    return scrollY + innerHeight >= docHeight - BOTTOM_TOLERANCE_PX;
  }, []);

  useEffect(() => {
    if (!nextPage) return;

    const handleWheel = (e: WheelEvent) => {
      // Skip during mount cooldown (prevents trigger on short pages)
      if (Date.now() - mountTime.current < MOUNT_COOLDOWN_MS) return;
      // Skip if already transitioning
      if (isTransitioning.current) return;
      // Only care about downward scroll at bottom
      if (e.deltaY <= 0 || !isAtBottom()) {
        accumulatedDelta.current = 0;
        return;
      }

      const now = Date.now();
      // Reset accumulation if too much time passed
      if (now - lastWheelTime.current > TIME_WINDOW_MS) {
        accumulatedDelta.current = 0;
      }

      lastWheelTime.current = now;
      accumulatedDelta.current += e.deltaY;

      if (accumulatedDelta.current >= DELTA_THRESHOLD) {
        isTransitioning.current = true;
        accumulatedDelta.current = 0;
        router.push(nextPage);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextPage, router, isAtBottom]);

  return { nextPage };
}
