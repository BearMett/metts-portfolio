import { PrintPortContent } from '@/components/client/print-port-content';
import { getPortfolioDataBothLanguages } from '@/lib/server/portfolio-data';
import { GITHUB_URL, MY_EMAIL } from '@/lib/consts';

export default function PrintPortPage() {
  const portfolioData = getPortfolioDataBothLanguages();
  return <PrintPortContent portfolioData={portfolioData} email={MY_EMAIL} githubUrl={GITHUB_URL} />;
}
