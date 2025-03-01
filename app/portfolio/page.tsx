import { InteractivePortfolio } from '@/components/interactive-portfolio';
import { portfolioData } from '@/lib/portfolio-data';

export default async function PortfolioPage() {
  return (
    <div className="container max-w-5xl py-8 md:py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">포트폴리오</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center">
        기술 카테고리를 선택하거나 프로젝트를 클릭하여 자세히 살펴보세요
      </p>
      <InteractivePortfolio items={portfolioData} />
    </div>
  );
}
