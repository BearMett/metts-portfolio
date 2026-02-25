import type { SkillCategoryTranslated, SkillCategory } from './types';
import type { Language } from '@/lib/resource.const';

export const skillCategoriesData: SkillCategoryTranslated[] = [
  {
    id: 'languages',
    label: {
      ko: '프로그래밍 언어',
      en: 'Programming Languages',
    },
    skills: {
      ko: ['TypeScript/JavaScript', 'Node.js', 'Python', 'C/C++', 'PHP', 'Lua', 'SQL'],
      en: ['TypeScript/JavaScript', 'Node.js', 'Python', 'C/C++', 'PHP', 'Lua', 'SQL'],
    },
  },
  {
    id: 'frameworks',
    label: {
      ko: '프레임워크 / 라이브러리',
      en: 'Frameworks / Libraries',
    },
    skills: {
      ko: [
        'Next.js',
        'React',
        'React Native',
        'Expo/EAS',
        'NestJS',
        'Express',
        'FastAPI',
        'Prisma',
        'TypeORM',
        'TanStack Query',
        'Tailwind CSS',
      ],
      en: [
        'Next.js',
        'React',
        'React Native',
        'Expo/EAS',
        'NestJS',
        'Express',
        'FastAPI',
        'Prisma',
        'TypeORM',
        'TanStack Query',
        'Tailwind CSS',
      ],
    },
  },
  {
    id: 'infra',
    label: {
      ko: '인프라 / DevOps',
      en: 'Infrastructure / DevOps',
    },
    skills: {
      ko: [
        'AWS (S3)',
        'GCP (AppEngine/Function/CloudBuild)',
        'Azure (OpenAI)',
        'Docker',
        'Nginx',
        'Jenkins',
        'GitHub Actions',
        'Linux/CentOS',
        'ElasticSearch',
        'CI/CD 파이프라인',
        'Blue-Green 배포',
      ],
      en: [
        'AWS (S3)',
        'GCP (AppEngine/Function/CloudBuild)',
        'Azure (OpenAI)',
        'Docker',
        'Nginx',
        'Jenkins',
        'GitHub Actions',
        'Linux/CentOS',
        'ElasticSearch',
        'CI/CD Pipelines',
        'Blue-Green Deployment',
      ],
    },
  },
  {
    id: 'methodology',
    label: {
      ko: '설계 / 방법론',
      en: 'Design / Methodology',
    },
    skills: {
      ko: ['DDD (도메인 주도 설계)', 'TDD', '아키텍처 설계', 'REST API 설계'],
      en: ['DDD (Domain-Driven Design)', 'TDD', 'Architecture Design', 'REST API Design'],
    },
  },
];

export function getSkillCategories(language: Language): SkillCategory[] {
  return skillCategoriesData.map((cat) => ({
    id: cat.id,
    label: cat.label[language],
    skills: cat.skills[language],
  }));
}
