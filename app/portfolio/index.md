# 포트폴리오

## 주식회사비엔제트 (BnZ)

소프트웨어 엔지니어

2024.03 ~ 현재 재직중

학생이 선생님에게 질문하는 문턱을 낮추고, 선생님이 학생에게 답변하는 새로운 방법을 제시하는 교육 서비스를 개발합니다.

교육과 질문에 대한 서비스를 개발하고 운영하고 있습니다.

- 학원의 학생과 선생님의 질문 답변을 관리하는 하이큐썸
- 사내 문제 생성과 풀이 엔진인 세모해
- 고등교육 학습 도우미 퀘스티

---

### 비엔제트에서의 주요 작업

#### 유사 문제 제공 서비스의 사용자 편의성을 개선하기 위한 LaTeX to hwpx 변환기 개발

[기술 스택]

python

[프로젝트 소개]

사내 서비스에서 제공하는 기능 중 문제를 받아서 유사한 문제를 생성하는 기능이 있습니다. 생성한 문제를 LaTeX와 마크다운 형식으로 제공했으나, 주 사용자인 학원 선생님들의 익숙하지 않은 형식으로 인해 활용도가 낮았습니다. 이를 해결하기 위해 한글 문서 형식으로 자동 변환하여 사용자가 익숙한 환경에서 문제를 수정하고 활용할 수 있도록 소프트웨어를 개발했습니다.

[진행 업무]

LLM이 생성한 LaTeX와 마크다운으로 구성된 문제를 한글 문서 파일로 제공 할 수 있도록 도구를 개발했습니다.
(기여도 100%)

- 마크다운 테이블을 한글과컴퓨터의 XML 데이터 구조에 맞춰 변환하는 파서 모듈을 개발했습니다.
- LaTeX 수식을 한글 문서의 자체 수식 형식으로 변환하는 엔진을 구현했습니다.
- 지속적으로 발견되는 새로운 수식 패턴에 대응하기 위해 변환 알고리즘을 모듈화하고, 단위 테스트를 통해 안정성과 유지보수성을 확보했습니다.

[주요 성과]

| ||
|:---:|:---:|
| ![borken-latex](/portfolio/markdown-preview.png) |![correctness-latex](/portfolio/problem-to-hwpx.png) |
| *LaTex와 수식을 렌더링 한 화면* |*hwpx 파일로 변환한 화면* |

- 주 고객층인 선생님의 문제 제작 워크플로우가 '캡처 후 붙여넣기'에서 '문서 내에서 직접 수정'으로 개선하여 사용자 편의성을 크게 향상했습니다.
- 사용자 교육 필요성을 제거하고 즉시 활용 가능한 hwpx 파일 형식을 제공함으로써 서비스 진입 장벽을 낮췄습니다.

---

#### 수학 문제 풀이 솔루션의 텍스트와 수식표현 오류 복구 도구 작성

[기술 스택]

typescript, npm

[소스보기](https://github.com/BNZinc/mdtex-parser)

[프로젝트 소개]

수학 문제 풀이를 제공하는 LLM 기반 서비스에서 LaTeX 수식과 마크다운 구문 분석기를 개발했습니다. LLM이 생성한 답변에서 수식 구분자(\$)가 누락되거나 짝이 맞지 않는 문제가 발생했고, 이는 사용자 화면에 잘못된 내용이 렌더링 되는 심각한 UI 문제를 야기했습니다. LLM에 직접 규칙을 강제하면 풀이 품질이 저하되는 trade-off가 발생하여, 별도의 파서 개발이 필요했습니다. 초기에는 오류 패턴을 정규식으로 찾아 수정했지만, 수식의 복잡도와 오류 패턴이 많아질수록 정규식으로 해결하기 어려워졌습니다.

[진행 업무]

LaTeX 수식과 마크다운으로 구성된 문서의 구문을 분석하고 오류를 자동 복구하는 파서를 개발했습니다. (기여도 100%)

- 문서 요소를 인라인 수식, 블록 수식, 마크다운으로 분류하고 각 요소의 문맥과 속성을 분석하는 파서를 구현했습니다.
- 블록의 시작과 종료, 수식 포함 여부 등 요소별 속성을 정의하고 잠재적 오류 패턴을 식별하는 로직을 개발했습니다.
- 각 오류 패턴별 변환 로직을 모듈화하고, 변환 과정의 추적이 가능하도록 설계했습니다.
- 개별 변환 모듈의 단위 테스트와 전체 파이프라인의 통합 테스트를 구축하여 품질을 보장했습니다.
- 사전에 식별된 오류 케이스를 전부 해결하고 서비스에 배포 할 수 있었습니다.

[주요 성과]

| ||
|:---:|:---:|
| ![borken-latex](/portfolio/borken-latex.png) |![correctness-latex](/portfolio/correctness-latex.png) |
| *사용자에게 잘못 표시되는 LaTeX 구문* |*올바르게 수정된 LaTeX 구문* |

- 내부 테스트 케이스 500건에 대해 100% 성공률을 달성하여 서비스의 안정성을 크게 향상했습니다.
- 모듈화된 설계로 새로운 오류 패턴 발견 시 기존 기능에 영향을 주지 않고 확장이 가능해졌습니다.
- 수식 표현 오류로 인한 UI 깨짐 현상이 완전히 해결되어 사용자 경험이 개선되었습니다.

---

#### 학생이 질문한 문제와 유사한 문제를 찾기 위한 벡터검색 파이프라인 구축 및 기능 구현

typescript, Azure OpenAI (임베딩), Elastic Search (키워드 검색, 벡터 검색)

[프로젝트 소개]

선생님들의 유사 문제 검색 니즈를 해결하기 위해 임베딩 기반 검색 시스템을 구축했습니다. 기존 키워드 분류와 출처 검색 방식은 인력 부족으로 실현이 어려웠으나, 팀 내 개념 증명을 통해 임베딩과 벡터 검색 기반의 새로운 접근 방식을 도입했습니다.

[진행 업무]

- Elastic Search를 활용하여 하이브리드 검색 시스템을 구축했습니다. 키워드 검색과 벡터 검색을 결합하여 검색 정확도를 향상했습니다.
- OCR로 추출한 텍스트를 토큰화하여 효율적인 키워드 검색 기능을 구현했습니다.
- Azure OpenAI의 임베딩 모델을 활용하여 512차원 벡터 검색을 구현했으며, 적절한 정확도의 유사도 매칭을 달성했습니다.
- 개발 환경의 접근성을 높이기 위해 Elastic Search 환경을 컨테이너화하여 로컬 개발 설정을 간소화했습니다.

[주요 성과]

- 임베딩 기반 검색으로 별도의 데이터 가공 없이 효율적인 유사 문제 검색 시스템을 구축했습니다.
- 검색 서비스와 임베딩 로직을 모듈화하여 Azure OpenAI 외 다른 임베딩 서비스로의 전환이 용이한 아키텍처를 설계했습니다.

---

#### 사내 질문 답변 기능을 위한 기반 보일러 플레이트 프로젝트 작성

[기술 스택]

NextJS, NestJS, expo, github, github action, postgresql

[서비스 소개]

교육 서비스의 핵심 도메인(학원, 질문, 답변, 교재)을 모듈화한 보일러플레이트 프로젝트를 개발했습니다. 이를 통해 신규 교육 관련 프로젝트 시작 시 참조할 수 있는 표준 아키텍처와 도메인 구현체를 제공했습니다.

[진행 업무]

교육 서비스의 기초 도메인을 설계하고 구현하여 재사용 가능한 보일러플레이트를 구축했습니다. (백엔드 및 인프라 기여도 100%)

- NestJS를 활용하여 DDD 기반의 도메인 중심 아키텍처를 설계했으며, 각 도메인의 비즈니스 규칙을 명확히 분리했습니다.
- 개발자 경험 향상을 위해 OpenAPI 문서 자동화, 구조화된 로깅 시스템, 테스트 자동화 파이프라인을 구축했습니다.
- GitHub Actions를 활용하여 프론트엔드, 백엔드, 모바일 앱의 CI/CD 파이프라인을 구축하고, GCP 기반 인프라 자동화를 구현했습니다.

[주요 성과]

- 교육 도메인의 표준 구현체를 제공하여 신규 프로젝트의 초기 개발 시간을 단축하고 일관된 아키텍처 적용이 가능해졌습니다.
- 자동화된 배포 파이프라인 구축으로 개발팀의 운영 부담을 크게 감소시켰으며, 배포 프로세스의 안정성을 향상했습니다.

---

#### 개발의 사이드 이펙트를 줄이기 위해 서비스의 도메인 정리 및 운영에 필요한 기능 구축

[기술 스택]

nodeJS, react, bitbucket, GCP AppEngine, GCP Function, GCP cloudbuild

[서비스 소개]

교육 질의응답 플랫폼 '하이큐썸'의 시스템 구조를 개선하는 프로젝트를 수행했습니다. 서비스 확장으로 인한 시스템 복잡도 증가와 연쇄적 오류 발생 문제를 해결하기 위해 아키텍처를 재설계했습니다.

[진행 업무]

- 기능들을 회원, 문제, 푸시 알림 등 도메인 단위로 분리하여 모듈화했습니다.
- 핵심 기능 간의 의존성을 분석하고 서비스 레이어를 재구성하여 유지보수성을 향상했습니다.
- 중복 코드를 제거하고 공통 기능을 추출하여 코드베이스를 최적화했습니다.
- 자동화된 테스트 환경을 구축하고 테스트 커버리지를 0%에서 50%까지 증가시켰습니다.
- GCP, Sentry, Slack 기반의 실시간 오류 모니터링 시스템을 구축하여 장애 대응 체계를 강화했습니다.

[주요 성과]

- 테스트 커버리지를 0%에서 50%까지 개선했습니다.
- 버그 수정 소요 시간을 2주에서 2일로 대폭 단축하여 서비스 안정성을 크게 향상했습니다.
- 사전 모니터링 체계 구축으로 잠재적 문제를 조기에 발견하고 대응할 수 있게 되었습니다.

## 주식회사맥스트 (Maxst)

2023.04 ~ 2024.03

TL사업부 개발팀/웹서버 파트장

맥스트는 증강현실(AR) SDK와 메타버스 소셜 플랫폼 "틀로나"를 개발하는 기업으로, XR(확장현실) 기술을 활용하여 산업용 메타버스 솔루션을 제공합니다

---

### 맥스트에서의 주요 작업

#### 현실 기반 월드와 소셜 기능을 제공하는 서비스 "틀로나" 웹서버 개발

[기술 스택]

nestJS, Bitbucket, Bitbucket Pipeline, AWS S3, AWS ECS

[서비스 소개]

"틀로나"는 현실 세계를 기반으로 한 메타버스 플랫폼으로, 사용자가 가상 공간과 토지를 소유하고 다른 사용자들과 소통 할 수 있습니다. 플랫폼 내에서 NFT 토지 거래와 공간 개발을 통해 콘텐츠 제공자로 활동할 수 있습니다.
저는 메타버스 경험의 핵심 요소인 회원 관리, 가상 아이템 상점, 토지 소유권 관리 등의 기반 시스템을 개발하고 이를 API로 제공했습니다.

[진행 업무]

- 파트장으로서 기획팀과 긴밀히 소통하며 개발 방향을 정립하고, 이를 팀원들에게 명확하게 전달했습니다.
- 상점, 우편함, 인벤토리, 지갑, 토지 관리 등 핵심 기능을 도메인 중심으로 설계하고 구현했습니다.
- 핵심 기능의 안정성 확보를 위해 단위 테스트를 구축했습니다.
- 실시간 모니터링 시스템을 도입하여 팀원들이 이슈를 신속하게 감지하고 대응할 수 있도록 했습니다.

[주요 성과]

- 도메인 설계 도입 후, 팀원들의 작업 브랜치 병합 주기가 7일 이상에서 1-2일로 단축되었습니다.
- 2주간의 클로즈 베타 테스트 동안 웹 서버 로직 관련 버그 리포트가 0건으로 유지되었습니다.

---

#### 틀로나의 독립 서버 환경 실행 자동화

[프로젝트 소개]

개발 과정에서 기획자들의 잦은 데이터 수정 요청으로 인해 개발 서버가 불안정해지는 문제가 발생했습니다. 이를 해결하기 위해 다른 팀 개발자가 CSV 파일을 통한 데이터 수정 기능을 구현했고, 저는 각 팀원이 독립적으로 개발 서버를 운영할 수 있도록 컨테이너화를 진행했습니다.

[진행 업무]

- 실시간 멀티플레이어 동기화 서버, 비동기 웹서버, 데이터베이스, 캐시 시스템을 컨테이너화했습니다.
- 컨테이너 실행 시 로컬 CSV 파일을 읽어 독립적인 서버 환경을 구성하는 자동화 스크립트를 개발했습니다.
- 팀 내 '로컬 서버' 기능의 도입 목적을 공유하고, 상세한 사용 매뉴얼을 작성했습니다.

[주요 성과]

- 기획자들이 독립된 환경에서 자유롭게 데이터를 수정하고 테스트할 수 있게 되었습니다.
- 개발팀이 기획팀의 데이터 수정 요청 처리에 투입되는 시간을 절감했습니다.

---

## (주) 웨어밸리

2020.01 ~ 2023.04
Chakra 팀. 리소스 관리, 백업, 설치, 데이터베이스 연동 모듈 개발자

데이터베이스 접근제어시스템인 "샤크라맥스", 쿼리 로그를 분석해서 인사이트를 제공하는 "로그캐치" , SQL 클라이언트인 "오렌지" 를 개발하는 기업입니다.

샤크라맥스 팀에서 리소스 관리 모듈, 백업 모듈, 연동 모듈을 개발했습니다

---

### 웨어밸리에서의 주요 작업

#### 경쟁사 제품의 데이터베이스 접근제어 정책을 분석해서 자사 제품의 정책으로 이관

[기술 스택]

CentOS, SQL, Lua

[프로젝트 소개]

대기업 고객사가 경쟁사 제품에서 자사 제품으로 전환하면서, 약 2천대의 데이터베이스에 적용된 5천여 개의 보안 정책을 이관해야 하는 상황이 발생했습니다. 정책의 규모가 수동 이관이 불가능한 수준이었기 때문에, 데이터 분석을 통한 자동화된 정책 생성 솔루션이 필요했습니다.

[진행 업무]

- 망분리 환경의 고객사 시스템에서 샘플 데이터를 추출하여 이관 프로그램의 프로토타입을 개발했고, 이후 현장에서 실제 이관 프로그램을 구현했습니다.
- 경쟁사 제품의 데이터 구조를 분석하고 자사 제품의 정책 체계에 맞게 재해석했으며, 도출된 매핑 로직을 고객사와 지속적으로 검증했습니다.
- 개발된 이관 프로그램과 상세 운영 매뉴얼을 현장 엔지니어에게 인계하고, 이후 발생하는 패치 요청과 모니터링을 지원했습니다.

[주요 성과]

- 약 2,000대의 데이터베이스에 적용된 5,000여 개의 접근 제어 정책을 성공적으로 이관했습니다.
- 기존 정책과 새로운 정책 간의 매핑 검증 쿼리를 개발하여 100% 이관 완료를 입증했습니다.

---

#### 샤크라맥스 V4의 보안적합성검증(CC) 인증

[기술 스택]

CentOS, C, C++, Makefile, bash, jenkins

[프로젝트 소개]
보안 제품을 공공기관에 납품하려면 CC 인증이 필요합니다. 이에 따라 새로운 제품의 개발 마지막 단계에서 CC 인증을 진행했습니다. 인증 평가 항목에는 프로그램 덤프 생성 시 비밀 정보가 평문으로 남아있는지, 검증된 암호화 알고리즘을 사용하는지, OS 의존성을 최소화한 상태에서 동작할 수 있는지, 키 관리를 안전하게 수행하는지 등이 포함되며, 다양한 측면에서 평가가 이루어졌습니다.

[진행 업무]

- OS 독립적인 데몬 관리를 위해 자체 데몬 컨트롤러를 C/C++로 개발하여 systemctl 의존성을 제거했습니다.
- Jenkins를 활용해 빌드 완료 시 폐쇄망의 공통 테스트 서버에 자동으로 설치되는 CI/CD 파이프라인을 구축했습니다.
- 시큐어 코딩 기준을 충족하기 위해 비밀 정보 메모리의 안전한 할당과 해제를 보장하는 메모리 관리 루틴을 구현했습니다.

[주요 성과]

- 자동화된 배포 파이프라인 구축으로 QA 팀의 빌드 설치 시간을 기존 대비 크게 단축했습니다.
- OS 의존성이 없는 데몬 관리 시스템 개발로 제품의 호환성과 보안성을 향상했습니다.
- 모든 보안 요구사항을 충족하여 최종적으로 CC 인증을 획득했습니다.

---

#### 고객사의 인사 정보를 요구에 따라 분석하고 자사 시스템의 사용자 정보로 연동

CentOS, Lua, SQL
[프로젝트 소개]
고객사의 인사 정보를 자사 제품의 사용자 계정과 연동하는 커스터마이징 프로그램을 개발했습니다. 각 고객사별로 특정 부서 사용자 동기화, 휴직자 계정 비활성화 등 다양한 요구사항이 있었으며, 이를 위해 요건 분석부터 개발, 배포, 운영까지 전체 프로세스를 담당했습니다.

[진행 업무]

- 고객사별 맞춤형 인사 연동 요구사항을 분석하고 최적화된 연동 프로그램을 개발했습니다.
- 기존 운영 중인 연동 프로그램의 유지보수와 기술 지원을 수행했습니다.
- 망분리 환경에서 발생하는 연동 이슈를 분석하고, 현장 엔지니어를 위한 기술 지원을 제공했습니다.
- 고객사별 인사 연동 요건과 구현 방식을 문서화했습니다.

[주요 성과]

- 인사 연동 솔루션 제공을 통해 고객사별 커스터마이징 및 유지보수 계약으로 추가 수익을 창출했습니다.
- 연동 프로그램 개발 경험과 기술 지원 내용을 체계적으로 문서화하여 사내 지식 베이스를 구축했으며, 이를 통해 유사 프로젝트의 효율적인 수행이 가능해졌습니다.
