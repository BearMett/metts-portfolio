import type { PortfolioItem } from '@/lib/data/types';
import type { Language } from '@/lib/resource.const';
import { resources } from '@/lib/resource.const';
import { getCategoryColor } from '@/lib/print-utils';

interface ProjectSlideProps {
  item: PortfolioItem;
  lang: Language;
  getCategoryLabel: (cat: string) => string;
}

export function ProjectSlide({ item, lang, getCategoryLabel }: ProjectSlideProps) {
  const t = resources[lang];

  return (
    <div className="print-port-slide flex flex-col">
      {/* Header: title + date/company */}
      <div className="mb-1 flex items-start justify-between">
        <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
        <div className="ml-4 shrink-0 text-right">
          <span className="text-sm text-gray-500">{item.date}</span>
          <span className="mx-2 text-sm text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-700">{item.company}</span>
        </div>
      </div>

      {/* Category badges */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {item.category.map((cat) => {
          const color = getCategoryColor(cat);
          return (
            <span
              key={cat}
              className="rounded-full px-2.5 py-0.5 text-xs font-medium"
              style={{ backgroundColor: color.bg, color: color.text }}
            >
              {getCategoryLabel(cat)}
            </span>
          );
        })}
      </div>

      {/* Divider */}
      <div className="mb-3 border-t border-gray-200" />

      {/* Description */}
      <p className="mb-3 text-sm leading-relaxed text-gray-700">{item.description}</p>

      {/* Tech stack */}
      {item.techStack.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1">
          {item.techStack.map((tech) => (
            <span key={tech} className="rounded bg-gray-800 px-2 py-0.5 text-xs text-white">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="mb-3 border-t border-gray-200" />

      {/* Two-column: Tasks + Achievements */}
      <div className="mb-auto grid grid-cols-2 gap-6">
        {item.tasks.length > 0 && (
          <div>
            <div className="mb-1.5 text-sm font-semibold text-gray-800">{t.portfolio.tasks}</div>
            <ul className="space-y-1">
              {item.tasks.map((task, i) => (
                <li key={i} className="flex text-xs leading-relaxed text-gray-600">
                  <span className="mr-1.5 shrink-0 text-blue-600">-</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.achievements.length > 0 && (
          <div>
            <div className="mb-1.5 text-sm font-semibold text-gray-800">{t.portfolio.achievements}</div>
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex text-xs leading-relaxed text-gray-600">
                  <span className="mr-1.5 shrink-0 text-emerald-600">-</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer: source link (only if sourceUrl exists) */}
      {item.sourceUrl && (
        <div className="mt-3 border-t border-gray-100 pt-2 text-right">
          <span className="text-xs text-gray-400">
            {t.portfolio.viewSource}: {item.sourceUrl}
          </span>
        </div>
      )}
    </div>
  );
}
