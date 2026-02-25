import { AboutMeTranslated, AboutMe } from './types';
import { Language } from '@/lib/resource.const';

export const aboutMeData: AboutMeTranslated = {
  title: {
    ko: '김영민 | 먼저 묻고, 사용자의 불편함을 해결하는 소프트웨어 엔지니어',
    en: 'Youngmin Kim | Software Engineer Who Asks First and Solves User Pain Points',
  },
  introduction: {
    ko: '운영 중인 시스템을 멈추지 않고 현대화하는 백엔드 엔지니어입니다. 15개 SVN 저장소를 단일 Git으로 통합하고, EOL 스택을 2주 만에 재구축하며, 사업팀이 스스로 콘텐츠를 등록할 수 있는 CMS를 만들었습니다.',
    en: "I'm a backend engineer who modernizes live systems without downtime. I consolidated 15 SVN repos into a single Git, rebuilt an EOL stack in 2 weeks, and built a CMS that empowered the business team to manage content independently.",
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
    strengths: {
      title: aboutMeData.strengths.title[language],
      items: aboutMeData.strengths.items[language],
    },
    skillStack: aboutMeData.skillStack[language],
  };
}
