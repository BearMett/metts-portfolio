import type { Language } from '@/lib/resource.const';
import { resources } from '@/lib/resource.const';

interface CoverSlideProps {
  name: string;
  tagline: string;
  lang: Language;
  email?: string;
  githubUrl?: string;
}

export function CoverSlide({ name, tagline, lang, email, githubUrl }: CoverSlideProps) {
  const t = resources[lang];

  return (
    <div className="print-port-slide flex flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">{t.portfolio.title}</h1>

      <div className="mb-8 h-1 w-24 rounded bg-gray-800" />

      <p className="mb-2 text-2xl font-semibold text-gray-800">{name}</p>
      <p className="mb-10 max-w-lg text-base leading-relaxed text-gray-500">{tagline}</p>

      <div className="flex flex-col gap-1.5 text-sm text-gray-500">
        {email && <span>{email}</span>}
        {githubUrl && <span>{githubUrl}</span>}
      </div>
    </div>
  );
}
