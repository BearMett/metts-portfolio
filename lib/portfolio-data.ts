import { Language } from './resource.const';

export interface PortfolioItemTranslated {
  id: string;
  date: string;
  title: { [key in Language]: string };
  company: { [key in Language]: string };
  shortDesc: { [key in Language]: string };
  description: { [key in Language]: string };
  techStack: string[];
  category: string[];
  tasks: { [key in Language]: string[] };
  achievements: { [key in Language]: string[] };
  sourceUrl?: string;
  images?: { src: string; alt: { [key in Language]: string } }[];
}

export interface PortfolioItem {
  id: string;
  date: string;
  title: string;
  company: string;
  shortDesc: string;
  description: string;
  techStack: string[];
  category: string[];
  tasks: string[];
  achievements: string[];
  sourceUrl?: string;
  images?: { src: string; alt: string }[];
}

export const portfolioDataTranslated: PortfolioItemTranslated[] = [
  {
    id: 'bnz-odapp',
    date: '2025-01',
    company: {
      ko: '주식회사비엔제트 (BnZ)',
      en: 'BnZ Inc.',
    },
    title: {
      ko: '오답노트 관리 시스템 개발',
      en: 'Wrong Answer Note Management System Development',
    },
    shortDesc: {
      ko: '학생들의 오답을 체계적으로 관리하고 복습할 수 있는 웹 애플리케이션 개발',
      en: "Development of a web application for systematic management and review of students' wrong answers",
    },
    description: {
      ko: '오답노트 관리 시스템 "O답"은 시험을 치른 학생들의 오답을 체계적으로 관리하고, 문제를 마치 일감 관리하듯 한눈에 확인할 수 있게 해주는 서비스입니다. 학생들은 자신의 오답노트를 효율적으로 관리하고, 선생님은 학생들의 진행 상황을 모니터링하며 필요한 피드백을 제공할 수 있습니다. 이 프로젝트는 Next.js, TypeScript, PostgreSQL을 기반으로 개발되었으며, 다양한 사용자 역할과 권한 관리를 지원합니다.',
      en: 'The wrong answer note management system "Odapp" is a service that systematically manages students\' wrong answers and allows them to check their problems at a glance, similar to task management. Students can efficiently manage their wrong answer notes, and teachers can monitor students\' progress and provide necessary feedback. This project was developed based on Next.js, TypeScript, and PostgreSQL, supporting various user roles and permission management.',
    },
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS',
      'Docker',
      'React Query',
      'Vitest',
      'SSE',
    ],
    category: ['frontend', 'backend', 'database'],
    tasks: {
      ko: [
        '사용자(학생, 교사, 관리자)별 맞춤형 인터페이스와 권한 관리 시스템을 구현했습니다.',
        'Prisma ORM을 활용한 효율적인 데이터베이스 설계 및 마이그레이션 관리 시스템을 개발했습니다.',
        '저장소 인터페이스를 추상화하여 운영 환경의 실제 데이터를 처리하면서도 동일한 코드 베이스를 유지할 수 있으며, 단위 테스트가 용이해졌습니다.',
        'RESTful API 설계 및 구현으로 프론트엔드와 백엔드 간의 효율적인 통신을 구현했습니다.',
        '자동화된 테스트 환경(Vitest)을 구축하여 코드 품질을 보장했습니다.',
        '프론트엔드의 SSE와 같은 이벤트 핸들러 및 알고리즘 유틸리티를 독립적인 모듈로 추출하여 관심사 분리를 구현했습니다.',
      ],
      en: [
        'Implemented customized interfaces and permission management systems for different user types (students, teachers, administrators).',
        'Developed an efficient database design and migration management system using Prisma ORM.',
        'Implemented file upload and management functions that can selectively use local storage or Google Cloud Storage.',
        'Optimized application performance with state management and data caching using React Query.',
        'Designed and implemented RESTful APIs for efficient communication between frontend and backend.',
        'Built automated testing environment (Vitest) to ensure code quality.',
      ],
    },
    achievements: {
      ko: [
        '학생들의 오답 관리 효율성을 높여 학습 성과 개선에 기여했습니다.',
        '교사가 학생들의 문제 풀이 상황을 실시간으로 모니터링할 수 있도록 하여 적시에 피드백을 제공할 수 있게 했습니다.',
        '모듈화된 설계로 새로운 기능 추가와 유지보수가 용이한 시스템을 구축했습니다.',
      ],
      en: [
        "Contributed to improving learning outcomes by increasing the efficiency of students' wrong answer management.",
        "Enabled teachers to monitor students' problem-solving situations in real-time, allowing them to provide timely feedback.",
        'Built a system that makes it easy to add new features and maintain with a modularized design.',
      ],
    },
  },
  {
    id: 'personal-nextjs-uri-generator',
    date: '2024-11',
    company: {
      ko: '개인 프로젝트',
      en: 'Personal Project',
    },
    title: {
      ko: 'Next.js URI 자동 생성기 개발',
      en: 'Next.js URI Generator Development',
    },
    shortDesc: {
      ko: 'Next.js 앱 라우터 API의 URL을 간편하게 생성하는 VS Code 확장 프로그램',
      en: 'VS Code extension that easily generates URLs for Next.js app router API',
    },
    description: {
      ko: 'Next.js에서는 파일 경로 기반으로 API 주소가 생성됩니다. 이 방식은 파일 관리는 편리하지만, 현재 작업 중인 파일의 정확한 API 엔드포인트를 즉시 파악하기 어렵습니다. 이 문제를 해결하기 위해 타입스크립트 기반의 URI 생성 확장 프로그램을 개발했습니다. 이 도구는 현재 작업 중인 파일의 API 주소를 즉시 생성해주어 개발 생산성을 크게 향상시킵니다.',
      en: "Next.js generates API addresses based on file paths, which simplifies route management but can make it challenging to quickly determine the exact endpoint for the file you're working on. To address this challenge, I developed a TypeScript-based URI generation utility as a VS Code extension. This tool enhances developer experience by instantly generating the correct API address for the current file. It works seamlessly with both App Router and Pages Router architectures.",
    },
    techStack: ['TypeScript', 'Next.js', 'Babel', 'VS Code Extension API'],
    category: ['parser'],
    tasks: {
      ko: [
        'Next.js의 다양한 라우팅 패턴(App Router/Pages Router)을 분석하여 모든 HTTP 메서드를 자동으로 감지하는 알고리즘 설계',
        'Babel AST 파서를 활용해 모든 유형의 내보내기(export default, export const, export function, export as 등)를 인식하는 정밀한 코드 분석 시스템 구현',
        '효율적인 URL 생성을 위한 유틸리티 함수 개발',
        'VS Code의 Code Lens API를 활용한 직관적인 API 주소 표시 기능 구현',
      ],
      en: [
        'Designed and implemented a robust URI generation algorithm that automatically detects all HTTP methods across various Next.js routing patterns (App Router/Pages Router)',
        'Built a precise code analysis system using Babel AST parser to recognize all export types (default, const, function, named exports)',
        'Developed efficient utility functions for URL generation that streamline API endpoint access',
        "Implemented intuitive API address display functionality using VS Code's Code Lens API",
      ],
    },
    achievements: {
      ko: [
        'API 엔드포인트 자동 생성을 통해 개발 과정의 오류를 크게 감소시킴',
        'Babel 기반 AST 분석을 통해 99.5% 이상의 코드 패턴 인식률 달성',
        'API 엔드포인트 자동 생성을 통해 Next.js 프로젝트의 생산성 향상',
      ],
      en: [
        'Significantly reduced development errors through automatic API endpoint generation',
        'Achieved over 99.5% recognition rate of code patterns through Babel-based AST analysis',
        'Improved productivity in Next.js projects through automatic API endpoint generation',
      ],
    },
    sourceUrl: 'https://github.com/BearMett/nextjs-url-generator',
  },
  {
    id: 'bnz-latex-hwpx',
    date: '2024-07',
    company: {
      ko: '주식회사비엔제트 (BnZ)',
      en: 'BnZ Inc.',
    },
    title: {
      ko: 'LaTeX to hwpx 변환기 개발',
      en: 'LaTeX to hwpx Converter Development',
    },
    shortDesc: {
      ko: '유사 문제 제공 서비스의 사용자 편의성을 개선하기 위한 LaTeX to hwpx 변환기 개발',
      en: 'Development of a LaTeX to hwpx converter to improve user experience in a similar problem generation service',
    },
    description: {
      ko: '사내 서비스에서 제공하는 기능 중 문제를 받아서 유사한 문제를 생성하는 기능이 있습니다. 생성한 문제를 LaTeX와 마크다운 형식으로 제공했으나, 주 사용자인 학원 선생님들의 익숙하지 않은 형식으로 인해 활용도가 낮았습니다. 이를 해결하기 위해 한글 문서 형식으로 자동 변환하여 사용자가 익숙한 환경에서 문제를 수정하고 활용할 수 있도록 소프트웨어를 개발했습니다.',
      en: 'One of the features provided by our internal service is to generate similar problems based on given problems. Although we provided the generated problems in LaTeX and Markdown formats, the usage was low due to the unfamiliar format for academy teachers, who are our main users. To solve this issue, I developed software that automatically converts the problems into Korean document format (hwpx), allowing users to modify and utilize the problems in a familiar environment.',
    },
    techStack: ['Python'],
    category: ['backend', 'parser'],
    tasks: {
      ko: [
        '마크다운 테이블을 한글과컴퓨터의 XML 데이터 구조에 맞춰 변환하는 파서 모듈을 개발했습니다.',
        'LaTeX 수식을 한글 문서의 자체 수식 형식으로 변환하는 엔진을 구현했습니다.',
        '지속적으로 발견되는 새로운 수식 패턴에 대응하기 위해 변환 알고리즘을 모듈화하고, 단위 테스트를 통해 안정성과 유지보수성을 확보했습니다.',
      ],
      en: [
        'Developed a parser module that converts Markdown tables to match the XML data structure of Hangul and Computer.',
        'Implemented an engine that converts LaTeX equations to the native equation format of Korean documents.',
        'Modularized the conversion algorithm to respond to newly discovered formula patterns continuously and secured stability and maintainability through unit tests.',
      ],
    },
    achievements: {
      ko: [
        "주 고객층인 선생님의 문제 제작 워크플로우가 '캡처 후 붙여넣기'에서 '문서 내에서 직접 수정'으로 개선하여 사용자 편의성을 크게 향상했습니다.",
        '사용자 교육 필요성을 제거하고 즉시 활용 가능한 hwpx 파일 형식을 제공함으로써 서비스 진입 장벽을 낮췄습니다.',
      ],
      en: [
        "Greatly improved user convenience by improving the problem creation workflow of teachers, the main customer base, from 'capture and paste' to 'directly edit within the document'.",
        'Lowered the service entry barrier by eliminating the need for user training and providing immediately usable hwpx file formats.',
      ],
    },
    images: [
      {
        src: '/portfolio/problem-to-hwpx.png',
        alt: {
          ko: 'hwpx 파일로 변환한 화면',
          en: 'Screen showing conversion to hwpx file',
        },
      },
      {
        src: '/portfolio/markdown-preview.png',
        alt: {
          ko: 'LaTex와 수식을 렌더링 한 화면',
          en: 'Screen rendering LaTeX and equations',
        },
      },
    ],
  },
  {
    id: 'bnz-mdtex-parser',
    date: '2024-06',
    company: {
      ko: '주식회사비엔제트 (BnZ)',
      en: 'BnZ Inc.',
    },
    title: {
      ko: '수학 문제 풀이 솔루션의 텍스트/수식 오류 복구 도구',
      en: 'Text/Equation Error Recovery Tool for Math Problem Solving Solutions',
    },
    shortDesc: {
      ko: 'LLM이 생성한 수학 풀이에서 수식 구분자 오류를 자동으로 수정하는 파서 개발',
      en: 'Development of a parser that automatically fixes equation delimiter errors in math solutions generated by LLM',
    },
    description: {
      ko: '수학 문제 풀이를 제공하는 LLM 기반 서비스에서 LaTeX 수식과 마크다운 구문 분석기를 개발했습니다. LLM이 생성한 답변에서 수식 구분자($)가 누락되거나 짝이 맞지 않는 문제가 발생했고, 이는 사용자 화면에 잘못된 내용이 렌더링 되는 심각한 UI 문제를 야기했습니다.',
      en: 'I developed a LaTeX equation and Markdown parser for an LLM-based service that provides math problem solutions. The answers generated by LLM had issues where equation delimiters ($) were missing or mismatched, which caused serious UI problems with incorrect content being rendered on the user screen.',
    },
    techStack: ['TypeScript', 'npm'],
    category: ['backend', 'parser'],
    tasks: {
      ko: [
        '문서 요소를 인라인 수식, 블록 수식, 마크다운으로 분류하고 각 요소의 문맥과 속성을 분석하는 파서를 구현했습니다.',
        '블록의 시작과 종료, 수식 포함 여부 등 요소별 속성을 정의하고 잠재적 오류 패턴을 식별하는 로직을 개발했습니다.',
        '각 오류 패턴별 변환 로직을 모듈화하고, 변환 과정의 추적이 가능하도록 설계했습니다.',
        '개별 변환 모듈의 단위 테스트와 전체 파이프라인의 통합 테스트를 구축하여 품질을 보장했습니다.',
      ],
      en: [
        'Implemented a parser that classifies document elements into inline equations, block equations, and markdown, and analyzes the context and properties of each element.',
        'Developed logic to define properties for each element, such as block start and end, and equation inclusion, and to identify potential error patterns.',
        'Modularized the conversion logic for each error pattern and designed it to allow tracking of the conversion process.',
        'Built unit tests for individual conversion modules and integration tests for the entire pipeline to ensure quality.',
      ],
    },
    achievements: {
      ko: [
        '내부 테스트 케이스 500건에 대해 100% 성공률을 달성하여 서비스의 안정성을 크게 향상했습니다.',
        '모듈화된 설계로 새로운 오류 패턴 발견 시 기존 기능에 영향을 주지 않고 확장이 가능해졌습니다.',
        '수식 표현 오류로 인한 UI 깨짐 현상이 완전히 해결되어 사용자 경험이 개선되었습니다.',
      ],
      en: [
        'Achieved a 100% success rate for 500 internal test cases, greatly improving service stability.',
        'With a modularized design, it became possible to extend without affecting existing functionality when new error patterns were discovered.',
        'Completely resolved UI breakage issues caused by equation expression errors, improving the user experience.',
      ],
    },
    sourceUrl: 'https://github.com/BNZinc/mdtex-parser',
    images: [
      {
        src: '/portfolio/correctness-latex.png',
        alt: {
          ko: '올바르게 수정된 LaTeX 구문',
          en: 'Correctly modified LaTeX syntax',
        },
      },
      {
        src: '/portfolio/borken-latex.png',
        alt: {
          ko: '사용자에게 잘못 표시되는 LaTeX 구문',
          en: 'LaTeX syntax incorrectly displayed to users',
        },
      },
    ],
  },
  {
    id: 'bnz-vector-search',
    date: '2024-05',
    company: {
      ko: '주식회사비엔제트 (BnZ)',
      en: 'BnZ Inc.',
    },
    title: {
      ko: '학생 질문 유사 문제 검색 벡터 파이프라인 구축',
      en: 'Building Vector Pipeline for Similar Problem Search from Student Questions',
    },
    shortDesc: {
      ko: '임베딩 기반 유사 문제 검색 시스템 개발로 질문-문제 연결성 강화',
      en: 'Development of embedding-based similar problem search system to strengthen question-problem connectivity',
    },
    description: {
      ko: '선생님들의 유사 문제 검색 니즈를 해결하기 위해 임베딩 기반 검색 시스템을 구축했습니다. 기존 키워드 분류와 출처 검색 방식은 인력 부족으로 실현이 어려웠으나, 팀 내 개념 증명을 통해 임베딩과 벡터 검색 기반의 새로운 접근 방식을 도입했습니다.',
      en: "I built an embedding-based search system to address teachers' needs for similar problem searches. The existing keyword classification and source search methods were difficult to implement due to lack of manpower, but through a proof of concept within the team, I introduced a new approach based on embeddings and vector search.",
    },
    techStack: ['TypeScript', 'Azure OpenAI', 'Elastic Search'],
    category: ['backend', 'search', 'ai', 'database'],
    tasks: {
      ko: [
        'Elastic Search를 활용하여 하이브리드 검색 시스템을 구축했습니다. 키워드 검색과 벡터 검색을 결합하여 검색 정확도를 향상했습니다.',
        'OCR로 추출한 텍스트를 토큰화하여 효율적인 키워드 검색 기능을 구현했습니다.',
        'Azure OpenAI의 임베딩 모델을 활용하여 512차원 벡터 검색을 구현했으며, 적절한 정확도의 유사도 매칭을 달성했습니다.',
        '개발 환경의 접근성을 높이기 위해 Elastic Search 환경을 컨테이너화하여 로컬 개발 설정을 간소화했습니다.',
      ],
      en: [
        'Built a hybrid search system using Elastic Search. Combined keyword search and vector search to improve search accuracy.',
        'Implemented efficient keyword search functionality by tokenizing text extracted with OCR.',
        "Utilized Azure OpenAI's embedding model to implement 512-dimensional vector search and achieved similarity matching with appropriate accuracy.",
        'Containerized the Elastic Search environment to simplify local development settings and improve development environment accessibility.',
      ],
    },
    achievements: {
      ko: [
        '임베딩 기반 검색으로 별도의 데이터 가공 없이 효율적인 유사 문제 검색 시스템을 구축했습니다.',
        '검색 서비스와 임베딩 로직을 모듈화하여 Azure OpenAI 외 다른 임베딩 서비스로의 전환이 용이한 아키텍처를 설계했습니다.',
      ],
      en: [
        'Built an efficient similar problem search system with embedding-based search without separate data processing.',
        'Designed an architecture that facilitates transition to other embedding services besides Azure OpenAI by modularizing search services and embedding logic.',
      ],
    },
  },
  {
    id: 'bnz-boilerplate',
    date: '2024-05',
    company: {
      ko: '주식회사비엔제트 (BnZ)',
      en: 'BnZ Inc.',
    },
    title: {
      ko: '교육 서비스 보일러플레이트 프로젝트 작성',
      en: 'Educational Service Boilerplate Project Development',
    },
    shortDesc: {
      ko: '교육 도메인을 위한 표준화된 기술 스택과 아키텍처 구성',
      en: 'Standardized tech stack and architecture configuration for educational domain',
    },
    description: {
      ko: '교육 서비스의 핵심 도메인(학원, 질문, 답변, 교재)을 모듈화한 보일러플레이트 프로젝트를 개발했습니다. 이를 통해 신규 교육 관련 프로젝트 시작 시 참조할 수 있는 표준 아키텍처와 도메인 구현체를 제공했습니다.',
      en: 'I developed a boilerplate project that modularizes the core domains of educational services (academies, questions, answers, textbooks). This provided a standard architecture and domain implementation that could be referenced when starting new education-related projects.',
    },
    techStack: ['NextJS', 'NestJS', 'Expo', 'GitHub Actions', 'PostgreSQL'],
    category: ['backend', 'frontend', 'database', 'devops'],
    tasks: {
      ko: [
        'NestJS를 활용하여 DDD 기반의 도메인 중심 아키텍처를 설계했으며, 각 도메인의 비즈니스 규칙을 명확히 분리했습니다.',
        '개발자 경험 향상을 위해 OpenAPI 문서 자동화, 구조화된 로깅 시스템, 테스트 자동화 파이프라인을 구축했습니다.',
        'GitHub Actions를 활용하여 프론트엔드, 백엔드, 모바일 앱의 CI/CD 파이프라인을 구축하고, GCP 기반 인프라 자동화를 구현했습니다.',
      ],
      en: [
        'Designed a domain-centric architecture based on DDD using NestJS, and clearly separated business rules for each domain.',
        'Built OpenAPI documentation automation, structured logging system, and test automation pipeline to enhance developer experience.',
        'Constructed CI/CD pipelines for frontend, backend, and mobile apps using GitHub Actions, and implemented GCP-based infrastructure automation.',
      ],
    },
    achievements: {
      ko: [
        '교육 도메인의 표준 구현체를 제공하여 신규 프로젝트의 초기 개발 시간을 단축하고 일관된 아키텍처 적용이 가능해졌습니다.',
        '자동화된 배포 파이프라인 구축으로 개발팀의 운영 부담을 크게 감소시켰으며, 배포 프로세스의 안정성을 향상했습니다.',
      ],
      en: [
        'Provided standard implementations for educational domains, reducing initial development time for new projects and enabling consistent architecture application.',
        'Significantly reduced the operational burden of the development team and improved the stability of the deployment process by building automated deployment pipelines.',
      ],
    },
  },
  {
    id: 'bnz-domain-refactoring',
    date: '2024-04',
    company: {
      ko: '주식회사비엔제트 (BnZ)',
      en: 'BnZ Inc.',
    },
    title: {
      ko: '교육 서비스 도메인 정리 및 운영 기능 구축',
      en: 'Educational Service Domain Organization and Operational Function Construction',
    },
    shortDesc: {
      ko: '서비스 안정성과 유지보수성 향상을 위한 아키텍처 재설계',
      en: 'Architecture redesign to improve service stability and maintainability',
    },
    description: {
      ko: "교육 질의응답 플랫폼 '하이큐썸'의 시스템 구조를 개선하는 프로젝트를 수행했습니다. 서비스 확장으로 인한 시스템 복잡도 증가와 연쇄적 오류 발생 문제를 해결하기 위해 아키텍처를 재설계했습니다.",
      en: "I carried out a project to improve the system structure of the educational Q&A platform 'HiQ-Sum'. I redesigned the architecture to solve the problem of increased system complexity and cascading errors due to service expansion.",
    },
    techStack: ['NodeJS', 'React', 'GCP AppEngine', 'GCP Function', 'GCP CloudBuild'],
    category: ['backend', 'devops', 'database', 'refactoring'],
    tasks: {
      ko: [
        '기능들을 회원, 문제, 푸시 알림 등 도메인 단위로 분리하여 모듈화했습니다.',
        '핵심 기능 간의 의존성을 분석하고 서비스 레이어를 재구성하여 유지보수성을 향상했습니다.',
        '중복 코드를 제거하고 공통 기능을 추출하여 코드베이스를 최적화했습니다.',
        '자동화된 테스트 환경을 구축하고 테스트 커버리지를 0%에서 50%까지 증가시켰습니다.',
        'GCP, Sentry, Slack 기반의 실시간 오류 모니터링 시스템을 구축하여 장애 대응 체계를 강화했습니다.',
      ],
      en: [
        'Modularized features by separating them into domain units such as members, problems, push notifications, etc.',
        'Analyzed dependencies between core features and restructured the service layer to improve maintainability.',
        'Optimized the codebase by removing duplicate code and extracting common functionality.',
        'Built an automated testing environment and increased test coverage from 0% to 50%.',
        'Strengthened the failure response system by building a real-time error monitoring system based on GCP, Sentry, and Slack.',
      ],
    },
    achievements: {
      ko: [
        '테스트 커버리지를 0%에서 50%까지 개선했습니다.',
        '버그 수정 소요 시간을 2주에서 2일로 대폭 단축하여 서비스 안정성을 크게 향상했습니다.',
        '사전 모니터링 체계 구축으로 잠재적 문제를 조기에 발견하고 대응할 수 있게 되었습니다.',
      ],
      en: [
        'Improved test coverage from 0% to 50%.',
        'Greatly improved service stability by reducing bug fix time from 2 weeks to 2 days.',
        'Enabled early detection and response to potential problems by establishing a pre-monitoring system.',
      ],
    },
  },
  {
    id: 'buttersoft-carbon-credit-exchange',
    date: '2024-03',
    company: {
      ko: '버터소프트',
      en: 'Buttersoft',
    },
    title: {
      ko: '카본몬스터 백엔드 시스템 (거래소 엔진) 개발',
      en: 'Development of Carbon Monster Backend System (Exchange Engine)',
    },
    shortDesc: {
      ko: 'NFT 거래 플랫폼의 고성능 주문 매칭 엔진 개발',
      en: 'Development of high-performance order matching engine for NFT trading platform',
    },
    description: {
      ko: '카본몬스터는 탄소 배출권을 NFT로 토큰화하여 거래할 수 있는 플랫폼입니다. 이 프로젝트에서는 NestJS를 기반으로 확장 가능한 백엔드 아키텍처를 설계 및 구현했으며, 특히 Red-Black Tree 자료구조를 활용한 고성능 주문 매칭 엔진을 개발했습니다. 도메인 주도 설계(DDD) 원칙을 적용하여 복잡한 비즈니스 로직을 명확하게 구조화하고, 마이크로서비스 아키텍처를 통해 각 기능의 독립적인 확장이 가능하도록 구현했습니다.',
      en: 'Carbon Monster is a platform where carbon credits are tokenized as NFTs and traded. In this project, I designed and implemented a scalable backend architecture based on NestJS, and developed a high-performance order matching engine using the Red-Black Tree data structure. I applied Domain-Driven Design (DDD) principles to clearly structure complex business logic and implemented a microservice architecture to allow independent scaling of each function.',
    },
    techStack: ['NestJS', 'TypeScript', 'MySQL', 'Redis', 'Docker', 'WebSocket', 'TypeORM', 'AWS S3'],
    category: ['backend', 'database'],
    tasks: {
      ko: [
        '확장 가능한 거래 시스템을 위한 전체 프로젝트 구조 설계',
        'Red-Black Tree 자료구조를 활용한 효율적인 주문 매칭 엔진 개발',
        '각 종목별로 독립적으로 확장 가능한 수직 확장 아키텍처 설계',
        '도메인 주도 설계(DDD) 원칙을 적용한 비즈니스 로직 구현',
        'RESTful API 및 WebSocket을 통한 실시간 주문 처리 시스템 개발',
        '마이크로서비스 아키텍처의 효율적인 통신을 위한 이벤트 기반 메시징 시스템 구현',
      ],
      en: [
        'Designed overall project structure for a scalable trading system',
        'Developed an efficient order matching engine using Red-Black Tree data structure',
        'Designed a vertically scalable architecture allowing independent scaling for each trading item',
        'Implemented business logic applying Domain-Driven Design (DDD) principles',
        'Developed real-time order processing system through RESTful API and WebSocket',
        'Implemented event-based messaging system for efficient communication in microservice architecture',
      ],
    },
    achievements: {
      ko: [
        'Red-Black Tree 알고리즘을 활용하여 주문 매칭 시 O(log n)의 시간 복잡도를 달성하여 거래 처리 성능 향상',
        '종목별 독립적 실행이 가능한 아키텍처로 시스템 확장성 및 안정성 확보',
        '도메인 주도 설계를 통해 복잡한 비즈니스 로직을 명확하게 구조화하여 유지보수성 향상',
        '이벤트 기반 아키텍처를 통한 마이크로서비스 간 효율적인 통신 구현',
      ],
      en: [
        'Improved trading processing performance by achieving O(log n) time complexity in order matching using Red-Black Tree algorithms',
        'Ensured system scalability and stability with architecture allowing independent execution for each trading item',
        'Enhanced maintainability by clearly structuring complex business logic through domain-driven design',
        'Implemented efficient communication between microservices through event-based architecture',
      ],
    },
  },
  {
    id: 'maxst-tlona',
    date: '2023-08',
    company: {
      ko: '주식회사맥스트 (Maxst)',
      en: 'Maxst Inc.',
    },
    title: {
      ko: "메타버스 플랫폼 '틀로나' 웹서버 개발",
      en: "Development of 'TLONA' Metaverse Platform Web Server",
    },
    shortDesc: {
      ko: '현실 기반 월드와 소셜 기능을 제공하는 메타버스 백엔드 구현',
      en: 'Implementation of metaverse backend providing reality-based world and social features',
    },
    description: {
      ko: '"틀로나"는 현실 세계를 기반으로 한 메타버스 플랫폼으로, 사용자가 가상 공간과 토지를 소유하고 다른 사용자들과 소통 할 수 있습니다. 플랫폼 내에서 NFT 토지 거래와 공간 개발을 통해 콘텐츠 제공자로 활동할 수 있습니다. 저는 메타버스 경험의 핵심 요소인 회원 관리, 가상 아이템 상점, 토지 소유권 관리 등의 기반 시스템을 개발하고 이를 API로 제공했습니다.',
      en: '"TLONA" is a metaverse platform based on the real world, where users can own virtual spaces and land, and communicate with other users. Users can act as content providers through NFT land transactions and space development within the platform. I developed the foundation systems that are core elements of the metaverse experience, such as member management, virtual item shop, and land ownership management, and provided them as APIs.',
    },
    techStack: ['NestJS', 'Bitbucket', 'Bitbucket Pipeline', 'AWS S3', 'AWS ECS'],
    category: ['backend', 'cloud', 'database'],
    tasks: {
      ko: [
        '파트장으로서 기획팀과 긴밀히 소통하며 개발 방향을 정립하고, 이를 팀원들에게 명확하게 전달했습니다.',
        '상점, 우편함, 인벤토리, 지갑, 토지 관리 등 핵심 기능을 도메인 중심으로 설계하고 구현했습니다.',
        '핵심 기능의 안정성 확보를 위해 단위 테스트를 구축했습니다.',
        '실시간 모니터링 시스템을 도입하여 팀원들이 이슈를 신속하게 감지하고 대응할 수 있도록 했습니다.',
      ],
      en: [
        'As a team lead, I closely communicated with the planning team to establish development direction and clearly conveyed it to team members.',
        'Designed and implemented core features such as shop, mailbox, inventory, wallet, and land management in a domain-centric manner.',
        'Built unit tests to ensure the stability of core features.',
        'Introduced a real-time monitoring system to allow team members to quickly detect and respond to issues.',
      ],
    },
    achievements: {
      ko: [
        '도메인 설계 도입 후, 팀원들의 작업 브랜치 병합 주기가 7일 이상에서 1-2일로 단축되었습니다.',
        '2주간의 클로즈 베타 테스트 동안 웹 서버 로직 관련 버그 리포트가 0건으로 유지되었습니다.',
      ],
      en: [
        "After introducing domain design, the merge cycle of team members' work branches was reduced from over 7 days to 1-2 days.",
        'During the 2-week closed beta test, bug reports related to web server logic were maintained at 0 cases.',
      ],
    },
  },
  {
    id: 'maxst-local-server',
    date: '2023-05',
    company: {
      ko: '주식회사맥스트 (Maxst)',
      en: 'Maxst Inc.',
    },
    title: {
      ko: '틀로나 독립 서버 환경 실행 자동화',
      en: 'TLONA Independent Server Environment Execution Automation',
    },
    shortDesc: {
      ko: '컨테이너 기반 로컬 개발 및 테스트 환경 구축',
      en: 'Building container-based local development and testing environment',
    },
    description: {
      ko: '개발 과정에서 기획자들의 잦은 데이터 수정 요청으로 인해 개발 서버가 불안정해지는 문제가 발생했습니다. 이를 해결하기 위해 다른 팀 개발자가 CSV 파일을 통한 데이터 수정 기능을 구현했고, 저는 각 팀원이 독립적으로 개발 서버를 운영할 수 있도록 컨테이너화를 진행했습니다.',
      en: 'During the development process, there was an issue where the development server became unstable due to frequent data modification requests from planners. To solve this, another team developer implemented a data modification function through CSV files, and I containerized so that each team member could operate the development server independently.',
    },
    techStack: ['Docker', 'Bash', 'NodeJS'],
    category: ['devops', 'backend'],
    tasks: {
      ko: [
        '실시간 멀티플레이어 동기화 서버, 비동기 웹서버, 데이터베이스, 캐시 시스템을 컨테이너화했습니다.',
        '컨테이너 실행 시 로컬 CSV 파일을 읽어 독립적인 서버 환경을 구성하는 자동화 스크립트를 개발했습니다.',
        "팀 내 '로컬 서버' 기능의 도입 목적을 공유하고, 상세한 사용 매뉴얼을 작성했습니다.",
      ],
      en: [
        'Containerized real-time multiplayer synchronization server, asynchronous web server, database, and cache system.',
        'Developed automation scripts that read local CSV files when running containers to configure independent server environments.',
        "Shared the purpose of introducing the 'local server' function within the team and wrote detailed usage manuals.",
      ],
    },
    achievements: {
      ko: [
        '기획자들이 독립된 환경에서 자유롭게 데이터를 수정하고 테스트할 수 있게 되었습니다.',
        '개발팀이 기획팀의 데이터 수정 요청 처리에 투입되는 시간을 절감했습니다.',
      ],
      en: [
        'Enabled planners to freely modify and test data in an independent environment.',
        'Reduced the time spent by the development team in processing data modification requests from the planning team.',
      ],
    },
  },
  {
    id: 'wv-migration',
    date: '2022-09',
    company: {
      ko: '(주) 웨어밸리',
      en: 'Wearvalley Co., Ltd.',
    },
    title: {
      ko: '경쟁사 제품의 DB 접근제어 정책 이관',
      en: 'Migration of DB Access Control Policies from Competitor Products',
    },
    shortDesc: {
      ko: '대규모 보안 정책의 자동화된 분석 및 이관 시스템 구축',
      en: 'Building an automated analysis and migration system for large-scale security policies',
    },
    description: {
      ko: '대기업 고객사가 경쟁사 제품에서 자사 제품으로 전환하면서, 약 2천대의 데이터베이스에 적용된 5천여 개의 보안 정책을 이관해야 하는 상황이 발생했습니다. 정책의 규모가 수동 이관이 불가능한 수준이었기 때문에, 데이터 분석을 통한 자동화된 정책 생성 솔루션이 필요했습니다.',
      en: "When a large corporate client switched from a competitor's product to our company's product, there was a situation where about 5,000 security policies applied to about 2,000 databases had to be migrated. As the scale of policies was too large for manual migration, an automated policy creation solution through data analysis was needed.",
    },
    techStack: ['CentOS', 'SQL', 'Lua'],
    category: ['backend', 'database', 'security'],
    tasks: {
      ko: [
        '망분리 환경의 고객사 시스템에서 샘플 데이터를 추출하여 이관 프로그램의 프로토타입을 개발했고, 이후 현장에서 실제 이관 프로그램을 구현했습니다.',
        '경쟁사 제품의 데이터 구조를 분석하고 자사 제품의 정책 체계에 맞게 재해석했으며, 도출된 매핑 로직을 고객사와 지속적으로 검증했습니다.',
        '개발된 이관 프로그램과 상세 운영 매뉴얼을 현장 엔지니어에게 인계하고, 이후 발생하는 패치 요청과 모니터링을 지원했습니다.',
      ],
      en: [
        "Extracted sample data from the client's system in a network-separated environment to develop a prototype of the migration program, and then implemented the actual migration program on site.",
        "Analyzed the data structure of the competitor's product and reinterpreted it according to our product's policy system, and continuously verified the derived mapping logic with the client.",
        'Handed over the developed migration program and detailed operation manual to field engineers, and supported subsequent patch requests and monitoring.',
      ],
    },
    achievements: {
      ko: [
        '약 2,000대의 데이터베이스에 적용된 5,000여 개의 접근 제어 정책을 성공적으로 이관했습니다.',
        '기존 정책과 새로운 정책 간의 매핑 검증 쿼리를 개발하여 100% 이관 완료를 입증했습니다.',
      ],
      en: [
        'Successfully migrated about 5,000 access control policies applied to about 2,000 databases.',
        'Developed mapping verification queries between existing policies and new policies to prove 100% migration completion.',
      ],
    },
  },
  {
    id: 'wv-cc',
    date: '2022-03',
    company: {
      ko: '(주) 웨어밸리',
      en: 'Wearvalley Co., Ltd.',
    },
    title: {
      ko: '샤크라맥스 V4의 보안적합성검증(CC) 인증',
      en: 'Common Criteria (CC) Certification for ChakraMax V4',
    },
    shortDesc: {
      ko: '국가 보안 인증을 위한 시스템 개발 및 검증',
      en: 'System development and verification for national security certification',
    },
    description: {
      ko: '보안 제품을 공공기관에 납품하려면 CC 인증이 필요합니다. 이에 따라 새로운 제품의 개발 마지막 단계에서 CC 인증을 진행했습니다. 인증 평가 항목에는 프로그램 덤프 생성 시 비밀 정보가 평문으로 남아있는지, 검증된 암호화 알고리즘을 사용하는지, OS 의존성을 최소화한 상태에서 동작할 수 있는지, 키 관리를 안전하게 수행하는지 등이 포함되며, 다양한 측면에서 평가가 이루어졌습니다.',
      en: 'Common Criteria (CC) certification is required to supply security products to public institutions. Accordingly, we proceeded with CC certification in the final stage of developing a new product. The certification evaluation items include whether secret information remains in plaintext when generating program dumps, whether verified encryption algorithms are used, whether it can operate with minimized OS dependencies, whether key management is performed safely, etc., and evaluation was conducted from various aspects.',
    },
    techStack: ['CentOS', 'C', 'C++', 'Makefile', 'Bash', 'Jenkins'],
    category: ['backend', 'security', 'devops'],
    tasks: {
      ko: [
        'OS 독립적인 데몬 관리를 위해 자체 데몬 컨트롤러를 C/C++로 개발하여 systemctl 의존성을 제거했습니다.',
        'Jenkins를 활용해 빌드 완료 시 폐쇄망의 공통 테스트 서버에 자동으로 설치되는 CI/CD 파이프라인을 구축했습니다.',
        '시큐어 코딩 기준을 충족하기 위해 비밀 정보 메모리의 안전한 할당과 해제를 보장하는 메모리 관리 루틴을 구현했습니다.',
      ],
      en: [
        'Developed a custom daemon controller in C/C++ for OS-independent daemon management, removing systemctl dependency.',
        'Built a CI/CD pipeline using Jenkins that automatically installs to a common test server on a closed network when the build is completed.',
        'Implemented memory management routines that ensure safe allocation and deallocation of memory for secret information to meet secure coding standards.',
      ],
    },
    achievements: {
      ko: [
        '자동화된 배포 파이프라인 구축으로 QA 팀의 빌드 설치 시간을 기존 대비 크게 단축했습니다.',
        'OS 의존성이 없는 데몬 관리 시스템 개발로 제품의 호환성과 보안성을 향상했습니다.',
        '모든 보안 요구사항을 충족하여 최종적으로 CC 인증을 획득했습니다.',
      ],
      en: [
        "Significantly reduced the QA team's build installation time compared to the existing one by building an automated deployment pipeline.",
        'Improved product compatibility and security by developing a daemon management system with no OS dependencies.',
        'Met all security requirements and ultimately obtained CC certification.',
      ],
    },
  },
  {
    id: 'wv-personnel-integration',
    date: '2021-06',
    company: {
      ko: '(주) 웨어밸리',
      en: 'Wearvalley Co., Ltd.',
    },
    title: {
      ko: '고객사 인사정보-사용자 정보 연동 솔루션',
      en: 'Client HR Information-User Information Integration Solution',
    },
    shortDesc: {
      ko: '대기업 맞춤형 인사 데이터 통합 및 자동화 시스템',
      en: 'Customized HR data integration and automation system for large corporations',
    },
    description: {
      ko: '고객사의 인사 정보를 자사 제품의 사용자 계정과 연동하는 커스터마이징 프로그램을 개발했습니다. 각 고객사별로 특정 부서 사용자 동기화, 휴직자 계정 비활성화 등 다양한 요구사항이 있었으며, 이를 위해 요건 분석부터 개발, 배포, 운영까지 전체 프로세스를 담당했습니다.',
      en: "I developed a customization program that links the client's HR information with user accounts of our product. Each client had various requirements such as specific department user synchronization, deactivation of leave of absence accounts, etc., and for this, I was responsible for the entire process from requirements analysis to development, deployment, and operation.",
    },
    techStack: ['CentOS', 'Lua', 'SQL'],
    category: ['backend', 'database', 'integration'],
    tasks: {
      ko: [
        '고객사별 맞춤형 인사 연동 요구사항을 분석하고 최적화된 연동 프로그램을 개발했습니다.',
        '기존 운영 중인 연동 프로그램의 유지보수와 기술 지원을 수행했습니다.',
        '망분리 환경에서 발생하는 연동 이슈를 분석하고, 현장 엔지니어를 위한 기술 지원을 제공했습니다.',
        '고객사별 인사 연동 요건과 구현 방식을 문서화했습니다.',
      ],
      en: [
        'Analyzed client-specific HR integration requirements and developed optimized integration programs.',
        'Performed maintenance and technical support for existing integration programs in operation.',
        'Analyzed integration issues occurring in network-separated environments and provided technical support for field engineers.',
        'Documented HR integration requirements and implementation methods for each client.',
      ],
    },
    achievements: {
      ko: [
        '인사 연동 솔루션 제공을 통해 고객사별 커스터마이징 및 유지보수 계약으로 추가 수익을 창출했습니다.',
        '연동 프로그램 개발 경험과 기술 지원 내용을 체계적으로 문서화하여 사내 지식 베이스를 구축했으며, 이를 통해 유사 프로젝트의 효율적인 수행이 가능해졌습니다.',
      ],
      en: [
        'Generated additional revenue through customization and maintenance contracts for each client by providing HR integration solutions.',
        'Built an in-house knowledge base by systematically documenting integration program development experience and technical support content, which enabled efficient execution of similar projects.',
      ],
    },
  },
];

// 카테고리 데이터의 다국어 지원 버전
export const portfolioCategoriesTranslated = [
  { id: 'all', label: { ko: '전체 보기', en: 'View All' }, icon: 'Filter' },
  { id: 'backend', label: { ko: '백엔드 개발', en: 'Backend Development' }, icon: 'Server' },
  { id: 'database', label: { ko: '데이터베이스', en: 'Database' }, icon: 'Database' },
  { id: 'devops', label: { ko: 'DevOps/인프라', en: 'DevOps/Infrastructure' }, icon: 'Cloud' },
  { id: 'security', label: { ko: '보안', en: 'Security' }, icon: 'Shield' },
  { id: 'parser', label: { ko: '파서/분석', en: 'Parser/Analysis' }, icon: 'Code' },
  { id: 'ai', label: { ko: 'AI/머신러닝', en: 'AI/Machine Learning' }, icon: 'Brain' },
  { id: 'refactoring', label: { ko: '리팩토링', en: 'Refactoring' }, icon: 'RefreshCw' },
  { id: 'integration', label: { ko: '시스템 연동', en: 'System Integration' }, icon: 'Link' },
  { id: 'frontend', label: { ko: '프론트엔드', en: 'Frontend' }, icon: 'Layout' },
  { id: 'search', label: { ko: '검색 엔진', en: 'Search Engine' }, icon: 'Search' },
];

// This function converts the translated portfolio data to the current language
export function getLocalizedPortfolioData(language: Language): PortfolioItem[] {
  return portfolioDataTranslated.map((item) => ({
    id: item.id,
    date: item.date,
    title: item.title[language],
    company: item.company[language],
    shortDesc: item.shortDesc[language],
    description: item.description[language],
    techStack: item.techStack,
    category: item.category,
    tasks: item.tasks[language],
    achievements: item.achievements[language],
    sourceUrl: item.sourceUrl,
    images: item.images
      ? item.images.map((img) => ({
          src: img.src,
          alt: img.alt[language],
        }))
      : undefined,
  }));
}

// For backward compatibility with old code
export const portfolioData = portfolioDataTranslated.map((item) => ({
  id: item.id,
  date: item.date,
  title: item.title.ko,
  company: item.company.ko,
  shortDesc: item.shortDesc.ko,
  description: item.description.ko,
  techStack: item.techStack,
  category: item.category,
  tasks: item.tasks.ko,
  achievements: item.achievements.ko,
  sourceUrl: item.sourceUrl,
  images: item.images
    ? item.images.map((img) => ({
        src: img.src,
        alt: img.alt.ko,
      }))
    : undefined,
}));

// For backward compatibility
export const portfolioCategories = portfolioCategoriesTranslated.map((category) => ({
  id: category.id,
  label: category.label.ko,
  icon: category.icon,
}));

// Get localized categories
export function getLocalizedCategories(language: Language) {
  return portfolioCategoriesTranslated.map((category) => ({
    id: category.id,
    label: category.label[language],
    icon: category.icon,
  }));
}
