import { getMarkdownContent } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import path from 'path';
import ResumeDownloadButton from '@/components/resume-download-button';

export default async function ResumePage() {
  const { fileContent } = await getMarkdownContent(path.join(process.cwd(), 'app/resume/resume.md'));

  return (
    <>
      <ResumeDownloadButton />
      <div className="container max-w-4xl py-8 md:py-12">
        <MarkdownContent content={fileContent} />
      </div>
    </>
  );
}
