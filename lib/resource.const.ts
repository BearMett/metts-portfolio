// All translatable string resources
export const resources = {
  ko: {
    common: {
      present: '현재',
    },
    navigation: {
      home: '홈',
      resume: '이력서',
      portfolio: '포트폴리오',
      blog: '블로그',
      contact: '연락처',
    },
    languageSwitcher: {
      switchToEnglish: '영어로 전환',
      switchToKorean: '한국어로 전환',
    },
    home: {
      achievements: '핵심 성과',
      attitudes: '업무 철학',
    },
    contact: {
      title: '연락처',
      subtitle: '언제든 편하게 연락 주세요.',
      connect: '소셜 링크',
    },
    blog: {
      title: '블로그 글',
      backToAllPosts: '전체 글로 돌아가기',
    },
    resume: {
      download: '이력서 내려받기',
      downloadFilename: '김영민-소프트웨어-엔지니어.pdf',
      fallbackNotice: '영문 이력서는 준비 중입니다. 현재는 국문 버전이 표시됩니다.',
      pdfUnavailable: '현재 언어의 PDF는 아직 준비 중입니다.',
      thanksLine1: '감사합니다! 😃',
      thanksLine2: '뜻깊은 인연이 되었으면 좋겠어요.',
      close: '닫기',
    },
    scrollTransition: {
      next: '다음',
      goToNext: '다음 페이지로 이동',
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
        mobile: '네이티브 앱',
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
      // PDF 다운로드 관련 번역
      downloadPDF: 'PDF로 다운로드',
      downloadFiltered: '필터링된 항목 다운로드',
      // 인쇄 관련 번역
      printPortfolio: '인쇄용 보기',
      printInstruction: '브라우저의 인쇄 기능(Ctrl+P)을 사용하여 PDF로 저장할 수 있습니다.',
      backToPortfolio: '포트폴리오로 돌아가기',
      printButton: '인쇄 / PDF 저장',
      printDate: '생성일',
      printFilter: '필터',
      expandAll: '모두 열기',
      collapseAll: '모두 닫기',
      projectTitle: '프로젝트명',
      company: '회사/조직',
      currentFilter: '현재 필터',
      filterAll: '모든 카테고리',
      date: '작업 기간',
      projectCategories: '분야',
      printPort: {
        careerSummary: '커리어 요약',
        present: '현재',
        viewOriginal: '원본 보기',
      },
    },
  },
  en: {
    common: {
      present: 'Present',
    },
    navigation: {
      home: 'Home',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    languageSwitcher: {
      switchToEnglish: 'Switch to English',
      switchToKorean: 'Switch to Korean',
    },
    home: {
      achievements: 'Key Achievements',
      attitudes: 'Work Philosophy',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Feel free to reach out anytime.',
      connect: 'Connect',
    },
    blog: {
      title: 'Blog Posts',
      backToAllPosts: 'Back to all posts',
    },
    resume: {
      download: 'Download Resume',
      downloadFilename: 'youngmin-kim-software-engineer.pdf',
      fallbackNotice: 'English resume content is being prepared. Showing the Korean version for now.',
      pdfUnavailable: 'PDF for the current language is not available yet.',
      thanksLine1: 'Thank you! 😃',
      thanksLine2: 'I hope we can build a meaningful connection.',
      close: 'Close',
    },
    scrollTransition: {
      next: 'Next',
      goToNext: 'Go to next page',
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
        mobile: 'Native App',
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
      // PDF download translations
      downloadPDF: 'Download as PDF',
      downloadFiltered: 'Download Filtered Items',
      // Print translations
      printPortfolio: 'Print View',
      printInstruction: "Use your browser's print function (Ctrl+P) to save as PDF.",
      backToPortfolio: 'Back to Portfolio',
      printButton: 'Print / Save PDF',
      printDate: 'Generated',
      printFilter: 'Filter',
      expandAll: 'Expand All',
      collapseAll: 'Collapse All',
      projectTitle: 'Project Title',
      company: 'Company/Organization',
      currentFilter: 'Current Filter',
      filterAll: 'All Categories',
      date: 'Work Period',
      projectCategories: 'Categories',
      printPort: {
        careerSummary: 'Career Summary',
        present: 'Present',
        viewOriginal: 'View Original',
      },
    },
  },
};

export type Language = 'ko' | 'en';
export type ResourceKey = keyof typeof resources.en;

export const defaultLanguage: Language = 'ko';
export const supportedLanguages: Language[] = ['ko', 'en'];

export function isLanguage(value: string | null | undefined): value is Language {
  return !!value && supportedLanguages.includes(value as Language);
}

export function resolveLanguage(value: string | null | undefined): Language {
  return isLanguage(value) ? value : defaultLanguage;
}
