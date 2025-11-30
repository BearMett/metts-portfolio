import { AboutMeTranslated, AboutMe } from './types';
import { Language } from '@/lib/resource.const';

export const aboutMeData: AboutMeTranslated = {
  title: {
    ko: '김영민 | 함께 일하는 가치를 아는 소프트웨어 개발자',
    en: 'Youngmin Kim | Software Developer Who Values Collaboration',
  },
  introduction: {
    ko: '함께 일하는 가치를 아는 소프트웨어 개발자, 김영민입니다.',
    en: "I'm Youngmin Kim, a software developer who values working together.",
  },
  values: {
    title: {
      ko: '핵심 가치',
      en: 'Core Values',
    },
    items: {
      ko: [
        '문제의 본질과 원인 파악: 표면적인 현상 해결에 그치지 않고, 근본 원인을 파악하여 재발을 방지하는 데 집중합니다.',
        '사용자에게 제공하는 가치: 기술 그 자체보다 사용자가 겪는 문제를 해결하고 실질적인 만족을 주는 것에 보람을 느낍니다.',
        '동료와 함께하는 가치: 팀원들과 지식을 공유하고 팀을 넘어 조직 전체의 인사이트를 함께합니다.',
        '기술적 실용주의: 새로운 기술에 열려있되, 비즈니스 문제 해결을 위한 최적의 수단으로 활용하는 것을 원칙으로 삼습니다.',
        '신중한 설계와 과감한 실행: 기획과 설계는 깊게 검토하고, 결정된 사항은 빠르게 실행합니다.',
      ],
      en: [
        'Identifying Root Causes: I focus on understanding fundamental causes to prevent recurrence, not just addressing surface-level symptoms.',
        'Delivering User Value: I find fulfillment in solving real user problems and providing genuine satisfaction, rather than technology for its own sake.',
        'Collaborative Value: I share knowledge with team members and contribute insights across the entire organization.',
        'Technical Pragmatism: While open to new technologies, I use them as optimal means to solve business problems.',
        'Careful Design, Bold Execution: I review planning and design thoroughly, then execute decisions quickly.',
      ],
    },
  },
  workApproach: {
    title: {
      ko: '문제 해결 방식',
      en: 'Problem-Solving Approach',
    },
    items: {
      ko: [
        '레거시 개선과 신규 구축의 비용을 분석하여 상황에 맞는 전략을 선택합니다.',
        '완벽한 설계보다 "지금 우리 팀이 감당 가능한 최선의 설계"를 추구합니다.',
        '비개발자도 이해할 수 있도록 기술적 trade-off를 설명합니다.',
        '팀 상황(레거시 정도, 인력 구성, 일정)에 따라 적절한 방식을 선택합니다.',
      ],
      en: [
        'I analyze costs between legacy improvement and new development to choose the right strategy.',
        'I pursue "the best design our team can currently manage" rather than perfect design.',
        'I explain technical trade-offs in ways non-developers can understand.',
        'I choose appropriate approaches based on team circumstances (legacy level, team composition, timeline).',
      ],
    },
  },
  strengths: {
    title: {
      ko: '기술 역량',
      en: 'Technical Strengths',
    },
    items: {
      ko: [
        '레거시 시스템 현대화: 20년 경과 PHP 프로젝트를 Git 기반으로 통합하고 성능을 개선한 경험',
        '보안 아키텍처: SQL 인젝션 대응부터 CC 인증까지 보안 요구사항 충족 경험',
        '자동화 및 DevOps: CI/CD 파이프라인 구축, 멀티테넌트 앱 배포 자동화',
        '도메인 설계: 교육, 보안, 메타버스 등 다양한 도메인에서 DDD 원칙 적용',
        '폐쇄망과 온프레미스 환경에서의 네트워크 구축 및 문제 해결 경험',
      ],
      en: [
        'Legacy Modernization: Experience integrating 20-year-old PHP projects to Git and improving performance',
        'Security Architecture: Experience meeting security requirements from SQL injection response to CC certification',
        'Automation & DevOps: CI/CD pipeline setup, multi-tenant app deployment automation',
        'Domain Design: Applied DDD principles across education, security, and metaverse domains',
        'Experience building and troubleshooting in closed networks and on-premises environments',
      ],
    },
  },
  skillStack: {
    ko: '기술 스택',
    en: 'Technical Skills',
  },
};

export function getAboutMeData(language: Language): AboutMe {
  return {
    title: aboutMeData.title[language],
    introduction: aboutMeData.introduction[language],
    values: {
      title: aboutMeData.values.title[language],
      items: aboutMeData.values.items[language],
    },
    workApproach: {
      title: aboutMeData.workApproach.title[language],
      items: aboutMeData.workApproach.items[language],
    },
    strengths: {
      title: aboutMeData.strengths.title[language],
      items: aboutMeData.strengths.items[language],
    },
    skillStack: aboutMeData.skillStack[language],
  };
}
