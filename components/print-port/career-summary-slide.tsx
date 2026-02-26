import type { CompanyGroup } from '@/lib/data/types';
import type { Language } from '@/lib/resource.const';
import { resources } from '@/lib/resource.const';
import { getCompanyBorderColor, getCompanyTextColor } from '@/lib/print-utils';

interface CareerSummarySlideProps {
  companyGroups: CompanyGroup[];
  lang: Language;
}

export function CareerSummarySlide({ companyGroups, lang }: CareerSummarySlideProps) {
  const t = resources[lang];

  return (
    <div className="print-port-slide flex flex-col">
      <h2 className="mb-4 text-xl font-bold text-gray-900">{t.portfolio.printPort.careerSummary}</h2>
      <div className="mb-4 border-t border-gray-200" />

      <div className="space-y-4">
        {companyGroups.map((group) => {
          const borderColor = getCompanyBorderColor(group.company.colors.primary);
          const textColor = getCompanyTextColor(group.company.colors.primary);

          // Collect unique tech stacks across all projects in this group
          const techStacks = [...new Set(group.items.flatMap((item) => item.techStack))];

          const isPersonal = group.company.type === 'personal';
          const periodFrom = group.company.period?.from ?? group.items[group.items.length - 1]?.date;
          const periodTo = group.company.period?.to ?? null;
          const periodStr =
            !isPersonal && periodFrom ? `${periodFrom} ~ ${periodTo ?? t.portfolio.printPort.present}` : '';

          return (
            <div key={group.company.id} className="border-l-4 pl-4" style={{ borderLeftColor: borderColor }}>
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-base font-semibold" style={{ color: textColor }}>
                  {group.company.name}
                </h3>
                {periodStr && <span className="text-sm text-gray-500">{periodStr}</span>}
              </div>

              <p className="mb-1.5 text-xs text-gray-500">
                {group.items.length} {lang === 'ko' ? '개 프로젝트' : group.items.length === 1 ? 'project' : 'projects'}
              </p>

              {techStacks.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {techStacks.map((tech) => (
                    <span key={tech} className="rounded bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
