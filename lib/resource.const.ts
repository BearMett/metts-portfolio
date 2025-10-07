// All translatable string resources
export const resources = {
  ko: {
    navigation: {
      home: '홈',
      resume: '이력서',
      portfolio: '포트폴리오',
      blog: '블로그',
      contact: '연락처',
    },
    portfolio: {
      title: '포트폴리오',
      subtitle: '프로젝트를 선택하시면 자세한 내용을 확인 할 수 있습니다! 😊',
      categories: {
        all: '전체 보기',
        backend: '백엔드 개발',
        database: '데이터베이스',
        devops: 'DevOps/인프라',
        security: '보안',
        parser: '파서/분석',
        ai: 'AI/머신러닝',
        refactoring: '리팩토링',
        integration: '시스템 연동',
        frontend: '프론트엔드',
        search: '검색 엔진',
        cloud: '클라우드',
      },
      filterTitle: '기술 분야별 필터링',
      noProjects: '선택한 필터에 해당하는 프로젝트가 없습니다.',
      projectDesc: '프로젝트 설명',
      usedTech: '사용 기술',
      tasks: '진행 업무',
      achievements: '주요 성과',
      screenshots: '스크린샷',
      sourceCode: '소스 코드',
      viewSource: '소스 코드 확인하기',
    },
  },
  en: {
    navigation: {
      home: 'Home',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Select a project to view more details! 😊',
      categories: {
        all: 'View All',
        backend: 'Backend Development',
        database: 'Database',
        devops: 'DevOps/Infrastructure',
        security: 'Security',
        parser: 'Parser/Analysis',
        ai: 'AI/Machine Learning',
        refactoring: 'Refactoring',
        integration: 'System Integration',
        frontend: 'Frontend',
        search: 'Search Engine',
        cloud: 'Cloud',
      },
      filterTitle: 'Filter by Technology Area',
      noProjects: 'No projects match the selected filters.',
      projectDesc: 'Project Description',
      usedTech: 'Technologies Used',
      tasks: 'Tasks',
      achievements: 'Key Achievements',
      screenshots: 'Screenshots',
      sourceCode: 'Source Code',
      viewSource: 'View Source Code',
    },
  },
};

export type Language = 'ko' | 'en';
export type ResourceKey = keyof typeof resources.en;

export const defaultLanguage: Language = 'ko';
export const supportedLanguages: Language[] = ['ko', 'en'];
