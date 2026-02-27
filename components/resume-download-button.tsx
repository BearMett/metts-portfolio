'use client';

import { useRef, useState } from 'react';
import { useLanguage } from '@/components/language-provider';

interface ResumeDownloadButtonProps {
  hasKoreanResumePdf: boolean;
  hasEnglishResumePdf: boolean;
}

export default function ResumeDownloadButton({
  hasKoreanResumePdf,
  hasEnglishResumePdf,
}: ResumeDownloadButtonProps) {
  const { language, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const isEnglishMode = language === 'en';
  const downloadAvailable = isEnglishMode ? hasEnglishResumePdf : hasKoreanResumePdf;
  const downloadHref = isEnglishMode ? '/resume.en.pdf' : '/resume.pdf';
  const downloadFilename = t('resume.downloadFilename');

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(true);
    if (downloadAvailable && downloadRef.current) {
      downloadRef.current.click();
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground py-3 px-5 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:shadow-xl md:py-2 md:px-4"
      >
        {t('resume.download')}
      </button>
      {/* Hidden anchor for download */}
      <a
        ref={downloadRef}
        href={downloadHref}
        download={downloadFilename}
        style={{ display: 'none' }}
      >
        download
      </a>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-neutral-800 dark:text-white p-8 rounded shadow-lg text-center">
            <p className="text-lg font-semibold">
              {downloadAvailable ? (
                <>
                  {t('resume.thanksLine1')} <br />
                  {t('resume.thanksLine2')}
                </>
              ) : (
                t('resume.pdfUnavailable')
              )}
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-primary text-primary-foreground py-1 px-3 rounded hover:bg-primary/90 transition-colors"
            >
              {t('resume.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
