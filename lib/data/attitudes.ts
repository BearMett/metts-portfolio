import type { AttitudeTranslated, Attitude } from './types';
import type { Language } from '@/lib/resource.const';

export const attitudesData: AttitudeTranslated[] = [
  {
    id: 'solve-first',
    title: {
      ko: '먼저 해결하고, 점진적으로 자동화합니다',
      en: 'Solve First, Automate Incrementally',
    },
    description: {
      ko: '완벽한 자동화보다 문제 해결을 우선합니다. 작동하는 해결책을 먼저 만들고, 안정성을 확인하며 점진적으로 고도화합니다.',
      en: 'I prioritize working solutions over perfect automation. Build it working first, verify stability, then enhance incrementally.',
    },
  },
  {
    id: 'ask-first',
    title: {
      ko: '먼저 묻고, 직접 확인합니다',
      en: 'Ask First, Verify Directly',
    },
    description: {
      ko: '반복되는 요청이나 오류를 발견하면 담당자에게 미팅을 요청해 실제 업무 화면을 함께 보며, 표면적 요청 뒤에 있는 구조적 문제를 파악합니다.',
      en: 'When I spot repeated requests or errors, I schedule meetings with stakeholders to observe actual workflows and uncover structural problems behind surface-level requests.',
    },
  },
  {
    id: 'find-hidden',
    title: {
      ko: '사용자가 인식하지 못한 불편함을 찾습니다',
      en: "Find Pain Points Users Don't See",
    },
    description: {
      ko: '비개발자가 당연하게 여기던 복잡한 작업 과정에서 구조적 문제를 발견하고, 익숙한 도구 위에 검증과 자동화를 얹어 쉽게 사용할 수 있는 해결책을 제안합니다.',
      en: 'I discover structural issues in complex workflows that non-developers take for granted, and propose solutions built on familiar tools with added validation and automation.',
    },
  },
  {
    id: 'human-lang',
    title: {
      ko: '사람의 언어로 설계합니다',
      en: 'Design in Human Language',
    },
    description: {
      ko: 'API를 설계할 때 엔티티와 행위가 자연스러운 문장으로 읽히도록 구성하여, 연동하는 개발자가 직관적으로 이해할 수 있는 구조를 지향합니다.',
      en: 'When designing APIs, I structure entities and actions to read like natural sentences so integrating developers can intuitively understand them.',
    },
  },
];

export function getAttitudes(language: Language): Attitude[] {
  return attitudesData.map((item) => ({
    id: item.id,
    title: item.title[language],
    description: item.description[language],
  }));
}
