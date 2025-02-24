'use client';

import { useRef, useState } from 'react';

export default function ResumeDownloadButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalOpen(true);
    // Trigger the hidden download link
    if (downloadRef.current) {
      downloadRef.current.click();
    }
  };

  return (
    <>
      <button
        onClick={handleDownload}
        className="bg-primary text-primary-foreground py-2 px-4 rounded shadow hover:bg-primary/90 transition-colors"
      >
        이력서 내려받기
      </button>
      {/* Hidden anchor for download */}
      <a
        ref={downloadRef}
        href="/resume.pdf"
        download="김영민-소프트웨어-서비스-엔지니어.pdf"
        style={{ display: 'none' }}
      >
        download
      </a>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-neutral-800 dark:text-white p-8 rounded shadow-lg text-center">
            <p className="text-lg font-semibold">
              감사합니다! 😃 <br />
              뜻깊은 인연이 되었으면 좋겠어요.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-primary text-primary-foreground py-1 px-3 rounded hover:bg-primary/90 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
