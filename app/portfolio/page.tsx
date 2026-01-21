'use client';

import { InteractivePortfolio } from '@/components/interactive-portfolio';
import { usePortfolioData } from '@/lib/portfolio-data';
import { useLanguage } from '@/components/language-provider';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import { downloadPortfolioPDF } from '@/lib/pdf-generator';

export default function PortfolioPage() {
  const { t } = useLanguage();
  const { items } = usePortfolioData();

  // PDF 다운로드 처리 함수
  const handleDownloadPDF = async () => {
    // 라벨을 현지화된 버전으로 준비
    const pdfLabels = {
      portfolioTitle: t('portfolio.title'),
      title: t('portfolio.projectTitle'),
      company: t('portfolio.company'),
      description: t('portfolio.projectDesc'),
      techStack: t('portfolio.usedTech'),
      tasks: t('portfolio.tasks'),
      achievements: t('portfolio.achievements'),
      category: t('portfolio.projectCategories'),
      date: t('portfolio.date'),
    };

    // 파일 이름 설정 (언어에 따라 다르게)
    const filename = language === 'ko' ? '포트폴리오.pdf' : 'portfolio.pdf';

    // PDF 다운로드 실행
    await downloadPortfolioPDF(localizedData, pdfLabels, filename);
  };

  return (
    <div className="container max-w-5xl py-8 md:py-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-center">{t('portfolio.title')}</h1>
        {process.env.NODE_ENV === 'development' ? (
          <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadPDF}>
            <FileDown size={16} />
            <span>{t('portfolio.downloadPDF')}</span>
          </Button>
        ) : (
          <></>
        )}
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center">{t('portfolio.subtitle')}</p>
      <InteractivePortfolio items={items} />
    </div>
  );
}
