import { PortfolioPageContent } from '@/components/client/portfolio-page-content';
import { getPortfolioDataBothLanguages } from '@/lib/server/portfolio-data';

export default function PortfolioPage() {
  const portfolioData = getPortfolioDataBothLanguages();

  return <PortfolioPageContent portfolioData={portfolioData} />;
}
