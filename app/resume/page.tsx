import { getMarkdownContent } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import path from 'path';
import fs from 'fs';
import ResumeDownloadButton from '@/components/resume-download-button';
import { getRequestLanguage } from '@/lib/server-language';
import { resources } from '@/lib/resource.const';

export default async function ResumePage() {
  const language = await getRequestLanguage();
  const koreanResumePath = path.join(process.cwd(), 'app/resume/resume.md');
  const englishResumePath = path.join(process.cwd(), 'app/resume/resume.en.md');
  const koreanResumePdfPath = path.join(process.cwd(), 'public/resume.pdf');
  const englishResumePdfPath = path.join(process.cwd(), 'public/resume.en.pdf');
  const hasEnglishResume = fs.existsSync(englishResumePath);
  const hasKoreanResumePdf = fs.existsSync(koreanResumePdfPath);
  const hasEnglishResumePdf = fs.existsSync(englishResumePdfPath);

  const targetResumePath = language === 'en' && hasEnglishResume ? englishResumePath : koreanResumePath;
  const { fileContent } = await getMarkdownContent(targetResumePath);

  return (
    <>
      <ResumeDownloadButton
        hasKoreanResumePdf={hasKoreanResumePdf}
        hasEnglishResumePdf={hasEnglishResumePdf}
      />
      <div className="container max-w-4xl py-8 md:py-12">
        {language === 'en' && !hasEnglishResume && (
          <p className="mb-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {resources.en.resume.fallbackNotice}
          </p>
        )}
        <MarkdownContent content={fileContent} />
      </div>
    </>
  );
}
