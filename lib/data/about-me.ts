import { AboutMeTranslated, AboutMe } from './types';
import { Language } from '@/lib/resource.const';

export const aboutMeData: AboutMeTranslated = {
  title: {
    ko: '김영민 | 소프트웨어 서비스 엔지니어',
    en: 'Youngmin Kim | Software Service Engineer',
  },
  introduction: {
    ko: '안녕하세요. 함께 일하는 문화를 즐기는 소프트웨어 엔지니어 김영민입니다.',
    en: "Hello, I'm Youngmin Kim, a software engineer who enjoys collaborative work culture.",
  },
  values: {
    title: {
      ko: '제가 일에 임하는 가치관은',
      en: 'My Work Values',
    },
    items: {
      ko: [
        '사용자와 동료의 문제를 해결하고 만족시키는 데서 보람을 느낍니다.',
        '문제의 근본 원인을 파악하고 해결하고자 노력합니다.',
        '팀원들과 작업 경험을 공유하며 인사이트를 확장하는 것을 즐깁니다.',
        '새로운 기술에 도전하되, 문제 해결의 수단으로 활용하는 것을 원칙으로 삼습니다.',
        '설계와 준비는 신중하게, 실행은 과감하게 합니다.',
      ],
      en: [
        'I find fulfillment in solving problems and satisfying both users and colleagues.',
        'I strive to identify and address the root causes of problems.',
        'I enjoy sharing work experiences with team members and expanding insights.',
        'I embrace new technologies while utilizing them as a means to solve problems.',
        'I design and plan carefully but execute boldly.',
      ],
    },
  },
  workApproach: {
    title: {
      ko: '이런 가치관을 토대로 업무에 임할 때',
      en: 'Based on these values, in my work',
    },
    items: {
      ko: [
        '제가 작성한 코드나 API를 사용할 동료 역시 제 고객이라는 인식으로 사용법과 오류 상황을 문서화합니다.',
        '버그나 이슈 발생 시 단순 코드 수정에 그치지 않고 근본 원인을 분석하여 재발 방지책을 강구합니다.',
        '새로운 기술 도입 시 학습 비용과 예상치 못한 리스크를 고려하여 팀원들과 충분한 논의를 거칩니다.',
        '구현 목적에 따라 객체 설계, 사이드이펙트 고려, PoC, 프로토타입 등 적합한 접근 방식을 선택하여 실행합니다.',
        '서버 개발이 주 업무지만 프론트엔드 개발자, 영업, 기획 등 다양한 직군의 동료들과 소통하며 인사이트를 얻는 것을 즐깁니다.',
      ],
      en: [
        'I document usage methods and error scenarios, recognizing that colleagues who use my code or APIs are also my customers.',
        "When bugs or issues occur, I don't just modify code but analyze root causes to prevent recurrence.",
        'When adopting new technologies, I discuss thoroughly with team members, considering learning costs and unexpected risks.',
        'I choose and implement appropriate approaches such as object design, side effect consideration, PoC, and prototyping based on implementation goals.',
        'While server development is my main job, I enjoy communicating with colleagues from various roles such as frontend developers, sales, and planning to gain insights.',
      ],
    },
  },
  strengths: {
    title: {
      ko: '저의 강점은',
      en: 'My Strengths',
    },
    items: {
      ko: [
        '모듈화와 단위 테스트를 적극 활용하여 코드를 작성합니다. 책임을 명확히 분리하고 재사용 가능한 코드를 구현함으로써 가독성과 유지보수성을 높이고자 합니다.',
        '적극적인 피드백 문화를 지향합니다. 작업을 마치면 팀원들과 피드백을 주고받으며 장점은 강화하고 개선점은 보완해 나갑니다.',
        '폐쇄망과 온프레미스 환경에서의 네트워크 구축 경험을 보유하고 있습니다. 이를 바탕으로 데이터와 네트워크의 흐름을 도식화하여 관련 이슈를 명확히 파악하고 해결할 수 있습니다.',
      ],
      en: [
        'I write code utilizing modularization and unit testing. I aim to improve readability and maintainability by clearly separating responsibilities and implementing reusable code.',
        'I advocate for an active feedback culture. After completing tasks, I exchange feedback with team members to reinforce strengths and improve areas for development.',
        'I have experience building networks in closed networks and on-premises environments. Based on this, I can visualize data and network flows to clearly identify and solve related issues.',
      ],
    },
  },
  skillStack: {
    ko: '기술 스택',
    en: 'Technical Skills',
  },
  interests: {
    ko: '최근 관심사',
    en: 'Recent Interests',
  },
  interestsContent: {
    ko: '이력 블로그 개발',
    en: 'Portfolio Blog Development',
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
    interests: aboutMeData.interests[language],
    interestsContent: aboutMeData.interestsContent[language],
  };
}
