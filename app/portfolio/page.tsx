import { getMarkdownContent } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import path from 'path';

export default async function PortfolioPage() {
  const { fileContent } = await getMarkdownContent(path.join(process.cwd(), 'app/portfolio/index.md'));

  return (
    <div className="container max-w-4xl py-8 md:py-12">
      <MarkdownContent content={fileContent} />
    </div>
  );
}
