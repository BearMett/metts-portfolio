import { PrintPortContent } from '@/components/client/print-port-content';
import { getPortfolioDataBothLanguages } from '@/lib/server/portfolio-data';

export default function PrintPortPage() {
  const portfolioData = getPortfolioDataBothLanguages();
  return <PrintPortContent portfolioData={portfolioData} />;
}
