import { AboutMeTranslated, AboutMe } from './types';
import { Language } from '@/lib/resource.const';

export const aboutMeData: AboutMeTranslated = {
  name: {
    ko: '김영민',
    en: 'Youngmin Kim',
  },
  tagline: {
    ko: '일하는 사람들과 함께, 더 나은 워크플로우를 만드는 개발자',
    en: 'A Developer Who Builds Better Workflows, Together with the People Who Use Them',
  },
  introduction: {
    ko: '사람들이 반복하는 일을 관찰하고, 더 나은 흐름을 만듭니다. 현장의 업무 과정을 함께 보며 병목을 찾고, 비개발자도 직접 처리할 수 있는 도구를 만들어 운영 부담을 줄입니다. 분산된 시스템을 통합하고, 레거시를 점진적으로 현대화하는 일을 해왔습니다.',
    en: 'I observe repetitive work alongside the people who do it, and build better workflows. I identify bottlenecks by reviewing real work processes together, and build tools that let non-developers handle tasks on their own, reducing operational burden. I have experience consolidating distributed systems and incrementally modernizing legacy infrastructure.',
  },
  values: {
    title: {
      ko: '핵심 가치',
      en: 'Core Values',
    },
    items: {
      ko: [
        '먼저 묻고, 직접 확인합니다: 반복되는 요청이나 오류를 발견하면 담당자에게 미팅을 요청해 실제 업무 화면을 함께 봅니다. 표면적 요청 뒤에 있는 구조적 문제를 파악합니다.',
        '사용자가 인식하지 못한 불편함을 찾습니다: 비개발자가 당연하게 여기던 복잡한 작업 과정에서 구조적 문제를 발견하고, 익숙한 도구 위에 검증과 자동화를 얹어 쉽게 사용할 수 있는 해결책을 제안합니다.',
        '먼저 해결하고, 점진적으로 자동화합니다: 완벽한 자동화보다 문제 해결을 우선합니다. 작동하는 해결책을 먼저 만들고, 안정성을 확인하며 점진적으로 고도화합니다.',
        '사람의 언어로 설계합니다: API를 설계할 때 엔티티와 행위가 자연스러운 문장으로 읽히도록 구성합니다. 연동하는 개발자가 직관적으로 이해할 수 있는 구조를 지향합니다.',
      ],
      en: [
        'Ask first, verify directly: When I notice repeated requests or errors, I schedule meetings with stakeholders to observe their actual workflows. I identify structural problems behind surface-level requests.',
        "Find pain points users don't recognize: I discover structural issues in complex processes that non-developers take for granted, and propose easy-to-use solutions by adding validation and automation on top of familiar tools.",
        'Solve first, automate incrementally: I prioritize problem-solving over perfect automation. I build working solutions first, verify stability, and gradually enhance them.',
        'Design in human language: When designing APIs, I structure entities and actions to read like natural sentences. I aim for structures that developers can intuitively understand.',
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
        '레거시 현대화: 운영 중인 시스템을 멈추지 않고 점진적으로 전환하는 경험',
        '보안: 취약점 대응부터 보안 인증까지, 요구사항에 맞는 아키텍처 설계 경험',
        '자동화 및 DevOps: CI/CD 파이프라인 구축, 멀티테넌트 앱 배포 자동화',
        '도메인 설계: 교육, 보안, 메타버스 등 다양한 도메인에서 DDD 원칙 적용',
        '폐쇄망과 온프레미스 환경에서의 네트워크 구축 및 문제 해결 경험',
      ],
      en: [
        'Legacy Modernization: Experience incrementally migrating live systems without downtime',
        'Security: Architecture design experience from vulnerability response to security certification',
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
    name: aboutMeData.name[language],
    tagline: aboutMeData.tagline[language],
    introduction: aboutMeData.introduction[language],
    values: {
      title: aboutMeData.values.title[language],
      items: aboutMeData.values.items[language],
    },
    strengths: {
      title: aboutMeData.strengths.title[language],
      items: aboutMeData.strengths.items[language],
    },
    skillStack: aboutMeData.skillStack[language],
  };
}
