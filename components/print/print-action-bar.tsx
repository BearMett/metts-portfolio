'use client';

import { useSyncExternalStore } from 'react';
import { Printer, ArrowLeft } from 'lucide-react';

const emptySubscribe = () => () => {};
const getShortcut = () => (/Mac|iPhone|iPad/.test(navigator.userAgent) ? '⌘P' : 'Ctrl+P');
const getServerShortcut = () => '';

interface PrintActionBarProps {
  printLabel: string;
  backLabel: string;
  backHref: string;
}

export function PrintActionBar({ printLabel, backLabel, backHref }: PrintActionBarProps) {
  const shortcut = useSyncExternalStore(emptySubscribe, getShortcut, getServerShortcut);

  return (
    <div className="no-print sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-4">
          <a href={backHref} className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft size={16} />
            {backLabel}
          </a>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
          <Printer size={16} />
          {printLabel}
          {shortcut && <kbd className="rounded bg-gray-700 px-1.5 py-0.5 text-xs font-mono">{shortcut}</kbd>}
        </button>
      </div>
    </div>
  );
}
