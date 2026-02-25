'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getNextPage } from '@/lib/page-order';

const DELTA_THRESHOLD = 150;
const TIME_WINDOW_MS = 500;
const SETTLE_MS = 100;
const BOTTOM_TOLERANCE_PX = 5;
const MOUNT_COOLDOWN_MS = 300;
const MOMENTUM_ABSORB_SILENCE_MS = 300;

/**
 * Two-phase scroll detection for intentional page transitions.
 *
 * Phase 1 (IDLE → SETTLED): User scrolls to bottom → wait for scroll to
 *   fully stop (no wheel events for SETTLE_MS).
 * Phase 2 (SETTLED → accumulating): A new wheel gesture after settling
 *   accumulates delta. If it exceeds DELTA_THRESHOLD within TIME_WINDOW_MS,
 *   trigger navigation.
 *
 * This prevents fast trackpad swipes from triggering an immediate transition
 * because momentum scroll events keep firing until the user lifts their
 * fingers — only after those events stop does Phase 2 begin.
 *
 * On page transition, scroll is locked (overflow: hidden) and a wheel
 * listener absorbs residual momentum events. Scroll unlocks only after
 * wheel events fully stop (MOMENTUM_ABSORB_SILENCE_MS of silence).
 */
export function useScrollPageTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const nextPage = getNextPage(pathname);

  const phase = useRef<'idle' | 'settled'>('idle');
  const accumulatedDelta = useRef(0);
  const lastWheelTime = useRef(0);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioning = useRef(false);
  const mountTime = useRef(Date.now());
  const absorbCleanup = useRef<(() => void) | null>(null);

  // Reset all state on route change + absorb residual momentum
  useEffect(() => {
    phase.current = 'idle';
    accumulatedDelta.current = 0;
    lastWheelTime.current = 0;
    isTransitioning.current = false;
    mountTime.current = Date.now();
    if (settleTimer.current) {
      clearTimeout(settleTimer.current);
      settleTimer.current = null;
    }

    // Lock scroll to absorb residual trackpad momentum from previous page
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';

    let silenceTimer: ReturnType<typeof setTimeout> | null = null;

    function unlock() {
      html.style.overflow = prevOverflow;
      window.removeEventListener('wheel', onMomentumWheel);
      if (silenceTimer) clearTimeout(silenceTimer);
    }

    function resetSilenceTimer() {
      if (silenceTimer) clearTimeout(silenceTimer);
      silenceTimer = setTimeout(unlock, MOMENTUM_ABSORB_SILENCE_MS);
    }

    function onMomentumWheel() {
      // Each incoming wheel event resets the silence countdown
      resetSilenceTimer();
    }

    window.addEventListener('wheel', onMomentumWheel, { passive: true });
    // Start the silence timer immediately — if no wheel events arrive,
    // unlock after MOMENTUM_ABSORB_SILENCE_MS
    resetSilenceTimer();

    absorbCleanup.current = unlock;

    return () => {
      unlock();
      absorbCleanup.current = null;
    };
  }, [pathname]);

  useEffect(() => {
    if (!nextPage) return;

    function isAtBottom(): boolean {
      const { scrollY, innerHeight } = window;
      const docHeight = document.documentElement.scrollHeight;
      return scrollY + innerHeight >= docHeight - BOTTOM_TOLERANCE_PX;
    }

    function normalizeWheelDelta(e: WheelEvent): number {
      if (e.deltaMode === 1) return e.deltaY * 16; // line mode
      if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // page mode
      return e.deltaY; // pixel mode (default)
    }

    const handleWheel = (e: WheelEvent) => {
      // Skip during mount cooldown (prevents trigger on short pages)
      if (Date.now() - mountTime.current < MOUNT_COOLDOWN_MS) return;
      if (isTransitioning.current) return;

      const delta = normalizeWheelDelta(e);

      // Not scrolling down or not at bottom → reset everything
      if (delta <= 0 || !isAtBottom()) {
        phase.current = 'idle';
        accumulatedDelta.current = 0;
        if (settleTimer.current) {
          clearTimeout(settleTimer.current);
          settleTimer.current = null;
        }
        return;
      }

      // At bottom, scrolling down
      if (phase.current === 'idle') {
        // Phase 1: at bottom but scroll hasn't settled yet.
        // Reset the settle timer on every wheel event — it only fires
        // after SETTLE_MS of no wheel activity.
        if (settleTimer.current) clearTimeout(settleTimer.current);
        settleTimer.current = setTimeout(() => {
          phase.current = 'settled';
          accumulatedDelta.current = 0;
          lastWheelTime.current = 0;
          settleTimer.current = null;
        }, SETTLE_MS);
        return;
      }

      // Phase 2 (settled): accumulate intentional scroll delta
      const now = Date.now();
      if (lastWheelTime.current > 0 && now - lastWheelTime.current > TIME_WINDOW_MS) {
        accumulatedDelta.current = 0;
      }

      lastWheelTime.current = now;
      accumulatedDelta.current += delta;

      if (accumulatedDelta.current >= DELTA_THRESHOLD) {
        isTransitioning.current = true;
        accumulatedDelta.current = 0;
        router.push(nextPage);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (settleTimer.current) {
        clearTimeout(settleTimer.current);
        settleTimer.current = null;
      }
    };
  }, [nextPage, router]);

  return { nextPage };
}
