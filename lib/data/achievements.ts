import type { AchievementTranslated, Achievement } from './types';
import type { Language } from '@/lib/resource.const';

export const achievementsData: AchievementTranslated[] = [
  {
    id: 'cc-certification',
    title: {
      ko: 'CC 인증 획득 기여',
      en: 'Contributed to CC Certification',
    },
    metric: {
      ko: 'CC(Common Criteria) 인증 획득 완료',
      en: 'CC (Common Criteria) Certification Achieved',
    },
    result: {
      ko: '메모리 보안 루틴 및 OS 독립적 데몬 관리 시스템을 개발하여 CC 인증 획득에 기여. 인증 심사자와 직접 소통하며 기술 구현 방식 설명.',
      en: 'Developed memory security routines and OS-independent daemon management, contributing to CC certification. Communicated directly with auditors to explain technical implementations.',
    },
  },
  {
    id: 'legacy-migration',
    title: {
      ko: '대형 통신사 경쟁사 제품 마이그레이션 성공',
      en: 'Major Telecom Competitor Product Migration',
    },
    metric: {
      ko: '2,000대 DB / 5,000개 정책 100% 이관',
      en: '2,000 DBs / 5,000 Policies Migrated at 100%',
    },
    result: {
      ko: '경쟁사 제품 마이그레이션 선례 확립. 대형 통신사 계약 이행 및 무결성 검증 완료.',
      en: 'Established precedent for competitor product migration. Fulfilled major telecom contract with full integrity verification.',
    },
  },
  {
    id: 'cbt-zero-bug',
    title: {
      ko: '메타버스 서비스 틀로나 CBT 버그 0건 달성',
      en: 'Zero Bugs in Metaverse Service CBT',
    },
    metric: {
      ko: 'CBT 버그 0건 / 병합 주기 7일→1~2일',
      en: '0 CBT Bugs / Merge Cycle 7d→1-2d',
    },
    result: {
      ko: '도메인 경계 분리 아키텍처 도입으로 테스트 용이한 구조를 확보하여 CBT에서 버그 0건 달성. 병합 주기를 7일에서 1~2일로 단축.',
      en: 'Achieved zero bugs in closed beta by introducing domain boundary separation for testable architecture. Reduced merge cycle from 7 days to 1-2 days.',
    },
  },
  {
    id: 'sql-injection-rebuild',
    title: {
      ko: 'SQL 인젝션 공격 대응 - 2주 내 전면 재구축',
      en: 'SQL Injection Response - Full Rebuild in 2 Weeks',
    },
    metric: {
      ko: '2주 내 Next.js 15 + Prisma 기반 전면 재구축 완료',
      en: 'Full Rebuild on Next.js 15 + Prisma in 2 Weeks',
    },
    result: {
      ko: 'EOL 스택(CI 2.x, PHP 5.6)에서 발생한 실제 SQL 인젝션 공격에 대응. 법적 리스크 제거 및 기존 서비스 무중단 전환 달성.',
      en: 'Responded to a real SQL injection attack on an EOL stack (CI 2.x, PHP 5.6). Eliminated legal risk and achieved zero-downtime transition.',
    },
  },
];

export function getAchievements(language: Language): Achievement[] {
  return achievementsData.map((item) => ({
    id: item.id,
    title: item.title[language],
    metric: item.metric[language],
    result: item.result[language],
  }));
}
