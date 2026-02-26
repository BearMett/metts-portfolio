'use client';

import { Printer, ArrowLeft } from 'lucide-react';

interface PrintActionBarProps {
  instruction: string;
  printLabel: string;
  backLabel: string;
  backHref: string;
}

export function PrintActionBar({ instruction, printLabel, backLabel, backHref }: PrintActionBarProps) {
  return (
    <div className="no-print sticky top-0 z-50 border-b border-gray-200 bg-white px-6 py-3">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href={backHref}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            {backLabel}
          </a>
          <span className="text-sm text-gray-400">{instruction}</span>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
          <Printer size={16} />
          {printLabel}
        </button>
      </div>
    </div>
  );
}
