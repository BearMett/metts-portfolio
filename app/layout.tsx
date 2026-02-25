import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { LanguageProvider } from '@/components/language-provider';
import { ClarityProvider } from '@/components/clarity-provider';
import { ScrollPageTransition } from '@/components/scroll-page-transition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '김영민 - 소프트웨어 엔지니어',
  description: '소프트웨어 엔지니어 김영민을 소개합니다',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen bg-background">
              <Navigation />
              <main className="container mx-auto px-4 py-6">
                {children}
                <ScrollPageTransition />
              </main>
              <Toaster />
            </div>
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <ClarityProvider />}
      </body>
    </html>
  );
}
