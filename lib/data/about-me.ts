import { AboutMeTranslated, AboutMe } from './types';
import { Language } from '@/lib/resource.const';

export const aboutMeData: AboutMeTranslated = {
  title: {
    ko: '김영민 | 문맥 주도 - 실용주의 소프트웨어 엔지니어',
    en: 'Youngmin Kim | Context-Driven Pragmatic Software Engineer',
  },
  introduction: {
    ko: '안녕하세요. 사용자의 불편함을 해결하는 것에서 출발하는 소프트웨어 엔지니어 김영민입니다.',
    en: "Hello, I'm Youngmin Kim, a software engineer who starts from solving user pain points.",
  },
  values: {
    title: {
      ko: '문제를 바라보는 관점',
      en: 'My Approach to Problems',
    },
    items: {
      ko: [
        '저를 포함한 사용자나 동료가 "무엇을 불편해하는지"에서 출발합니다.',
        '기능 요청 이면의 본질적 니즈를 파악하려 노력합니다.',
        '기술은 문제 해결의 수단이지 목적이 아니라고 생각합니다.',
        '다양한 직군(기획, 영업, 디자이너)과 소통하며 문제의 맥락을 넓게 이해합니다.',
      ],
      en: [
        'I start from understanding what causes discomfort - for users, colleagues, and myself.',
        'I strive to identify the essential needs behind feature requests.',
        'I believe technology is a means to solve problems, not an end in itself.',
        'I communicate with various roles (planning, sales, designers) to broadly understand problem contexts.',
      ],
    },
  },
  workApproach: {
    title: {
      ko: '상황에 맞는 해결책 설계',
      en: 'Designing Context-Appropriate Solutions',
    },
    items: {
      ko: [
        '신규 서비스와 레거시 개선은 다른 접근이 필요하다고 판단하고 전략을 달리합니다.',
        '완벽한 설계보다 "지금 우리 팀이 감당 가능한 최선의 설계"를 추구합니다.',
        '장애 대응 시 빠른 복구와 근본 원인 해결의 우선순위를 상황에 맞게 판단합니다.',
        '팀 상황(레거시 정도, 인력 구성, 일정)에 따라 리팩토링/신규개발/점진적 개선 중 적절한 방식을 선택합니다.',
        '새로운 기술 도입 시 학습 비용과 예상치 못한 리스크를 고려하여 팀원들과 충분한 논의를 거칩니다.',
      ],
      en: [
        'I recognize that new services and legacy improvements require different approaches and adjust strategies accordingly.',
        'I pursue "the best design our team can currently manage" rather than perfect design.',
        'When responding to incidents, I prioritize quick recovery versus root cause resolution based on the situation.',
        'I choose among refactoring/new development/incremental improvement based on team circumstances (legacy level, team composition, timeline).',
        'When adopting new technologies, I discuss thoroughly with team members, considering learning costs and unexpected risks.',
      ],
    },
  },
  strengths: {
    title: {
      ko: '실행과 소통',
      en: 'Execution and Communication',
    },
    items: {
      ko: [
        '기술적 trade-off를 비개발자도 이해할 수 있게 설명합니다.',
        '제가 작성한 코드나 API를 사용할 동료 역시 제 고객이라는 인식으로 문서화합니다.',
        '모듈화와 테스트는 유지보수 비용 절감이라는 목적을 위한 수단으로 활용합니다.',
        '적극적인 피드백 문화를 지향합니다. 작업을 마치면 팀원들과 피드백을 주고받으며 장점은 강화하고 개선점은 보완해 나갑니다.',
        '폐쇄망과 온프레미스 환경에서의 네트워크 구축 경험을 보유하고 있습니다. 이를 바탕으로 데이터와 네트워크의 흐름을 도식화하여 관련 이슈를 명확히 파악하고 해결할 수 있습니다.',
      ],
      en: [
        'I explain technical trade-offs in a way that non-developers can understand.',
        'I document with the awareness that colleagues who use my code or APIs are also my customers.',
        'I use modularization and testing as means to reduce maintenance costs.',
        'I advocate for an active feedback culture. After completing tasks, I exchange feedback with team members to reinforce strengths and improve areas for development.',
        'I have experience building networks in closed networks and on-premises environments. Based on this, I can visualize data and network flows to clearly identify and solve related issues.',
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
