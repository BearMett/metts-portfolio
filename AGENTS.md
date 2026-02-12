# Codex Working Guide

이 문서는 이 저장소에서 작업하는 Codex(또는 유사 코딩 에이전트)를 위한 실행 가이드입니다.

## 1) 프로젝트 요약
- 목적: 개인 포트폴리오 사이트 (국문/영문 지원)
- 프레임워크: Next.js App Router (`next@16`)
- 언어/스타일: TypeScript + Tailwind CSS + shadcn/ui(Radix)
- 콘텐츠: 이력서 Markdown + 포트폴리오 JSON + 블로그 Markdown
- PDF: 이력서 PDF는 빌드 전 스크립트로 생성

## 2) 필수 실행 환경
- Node.js `>=20.9.0` (중요)
- 패키지 매니저: Yarn (v1 계열 사용 중)

Node 18 이하에서는 `next build`가 실패합니다.

## 3) 주요 명령어
- 개발 서버: `yarn dev`
- 린트: `yarn lint`
- 타입체크: `./node_modules/.bin/tsc --noEmit`
- 빌드: `yarn build`
- 이력서 PDF 생성: `yarn generate:resume`

주의:
- `yarn build`는 `prebuild`로 `yarn generate:resume`를 먼저 실행합니다.
- 빌드 전에 `public/resume.pdf`가 갱신됩니다.

## 4) 디렉터리/책임 맵
- `app/`: 라우트 엔트리
  - `app/layout.tsx`: 전역 Provider/네비게이션
  - `app/page.tsx`: 홈
  - `app/portfolio/page.tsx`: 포트폴리오
  - `app/resume/page.tsx`: 이력서 markdown 렌더
- `components/`: UI 컴포넌트
  - `components/client/`: 페이지 클라이언트 조합 컴포넌트
  - `components/interactive-portfolio.tsx`: 포트폴리오 상호작용 핵심
- `lib/data/`: 정적 데이터(JSON/TS)
  - `lib/data/portfolio/*.json`: 포트폴리오 항목 원천
  - `lib/data/companies/*.json`: 회사 메타데이터
- `lib/server/`: 서버 컴포넌트용 데이터 조합
- `lib/resource.const.ts`: 다국어 리소스
- `lib/portfolio-utils.ts`: 다국어 데이터 로컬라이징 유틸
- `scripts/`: PDF 생성 등 빌드 보조 스크립트

## 5) 데이터/다국어 규칙
- 사용자 노출 텍스트는 원칙적으로 번역 가능해야 함.
- 포트폴리오 데이터는 `Translated` 타입(ko/en)을 원천으로 유지.
- 화면에는 `localizePortfolioItems`, `localizePortfolioCategories`로 변환해 사용.
- 새 카테고리 추가 시 반드시 동기화:
  1. `lib/data/portfolio-categories.json`
  2. `lib/resource.const.ts`의 `portfolio.categories.*`
  3. `components/interactive-portfolio.tsx` 아이콘/색상 매핑
  4. 관련 포트폴리오 JSON의 `category`

## 6) 자주 발생하는 이슈
- 빌드 실패(노드 버전): Node가 20.9 미만인지 먼저 확인.
- 클라이언트 env 접근 문제:
  - 클라이언트 컴포넌트에서 사용하는 env는 `NEXT_PUBLIC_*` 사용 권장.
  - 현재 `lib/consts.ts`의 값은 클라이언트 사용 시 undefined 가능성 점검 필요.
- 느린 lint:
  - 기본 `eslint .` 대신 소스 대상 lint를 병행 권장:
  - `./node_modules/.bin/eslint app components lib hooks scripts --ext .ts,.tsx`

## 7) 작업 절차(권장)
1. 변경 전: `git status --short`로 워킹트리 확인
2. 분석: 관련 페이지 + `lib/server` + `lib/data` + `resource.const.ts` 동시 확인
3. 구현: 타입 우선, 번역/카테고리 누락 방지
4. 검증: 최소 `tsc --noEmit` + 대상 lint
5. 변경 설명: 영향 파일/사용자 영향/테스트 결과를 함께 기록

## 8) 현재 기술 부채(우선순위)
- P1: Node 버전 불일치 시 빌드 불가
- P1: 클라이언트에서 env 상수(`lib/consts.ts`) 사용 안정성 점검 필요
- P2: `components/social-links.tsx`의 mount effect 패턴 lint 에러 대응 필요
- P3: `components/interactive-portfolio.tsx` 단일 파일 복잡도 높음(분리 리팩터링 권장)
- P3: 자동화 테스트 부족(핵심 유틸/렌더 흐름 테스트 보강 필요)

## 9) 변경 시 주의
- 기존 사용자/작업자가 만든 변경사항을 되돌리지 말 것.
- 포트폴리오 JSON 수정 시 언어 키 누락(ko/en) 여부 확인.
- PDF 생성 관련 변경은 `generate:resume` 실행으로 산출물 검증.

## 10) 빠른 점검 체크리스트
- [ ] Node 버전이 20.9 이상인가?
- [ ] 번역 키(`resource.const.ts`) 누락이 없는가?
- [ ] 포트폴리오 카테고리 매핑(아이콘/색상/리소스)이 모두 맞는가?
- [ ] `tsc --noEmit` 통과했는가?
- [ ] lint 에러가 없는가?
