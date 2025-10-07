# Success Case Studies

## Case 1: bnz-domain-refactoring

### Before (Technology-centered)
```
"버그 수정 소요 시간을 2주에서 2일로 단축"
```

### After (Context-driven)

**Description:**
```
"간단한 서비스 로직 변경만으로도 연쇄적으로 다른 기능이 고장나는 문제가 발생했습니다.
예를 들어, 질문 형식을 수정하면 리터럴 값을 읽는 기능이 깨지고,
그것이 트리거를 호출하지 않아 또 다른 기능까지 동작하지 않는 등
이슈 해결에만 매달려야 하는 절망적인 상황이었습니다."
```

**Tasks:**
```
"핵심 도메인(회원, 문제, 알림)에 대한 테스트를 우선 구축하고,
추가 테스트는 필요에 따라 점진적으로 추가하는 실용주의 전략을 선택했습니다.
완벽한 커버리지보다 팀이 감당 가능한 범위에서 핵심 기능의 안정성을 먼저 확보하여
테스트 커버리지를 0%에서 50%까지 증가시켰습니다."
```

**Achievements:**
```
"도메인 분리로 변경 범위가 명확해져 연쇄 버그 없이 안전하게 개발할 수 있게 되었고,
이슈 대응에만 매달리던 팀이 신규 기능 개발에 집중할 수 있게 되었습니다."
```

**Key Lessons:**
- Added concrete example ("예를 들어") in Description
- Emphasized pragmatic choice ("완벽한 커버리지보다 팀이 감당 가능한")
- Before → After structure in Achievements ("이슈 대응 → 신규 기능 개발")

---

## Case 2: buttersoft-carbon-credit-exchange

### Before (Technology-centered)
```
"Red-Black Tree로 O(log n) 복잡도 달성"
```

### After (Context-driven)

**Description:**
```
"블록체인 원장은 초당 약 20건의 트랜잭션 처리 제약이 있었으므로,
거래소 엔진 자체를 최적화하여 블록체인이 병목이 되더라도
거래소 측 처리는 빠르게 동작하도록 시스템을 설계했습니다."
```

**Tasks:**
```
"실시간 거래량 증가에 대응해야 했으므로,
Red-Black Tree 기반 매칭 엔진으로 주문 처리 성능을 최적화했습니다."
```

**Achievements:**
```
"블록체인의 초당 20건 제약 하에서도 거래소 엔진은 빠르게 동작하여
사용자가 거래 지연을 체감하지 않도록 했습니다."
```

**Key Lessons:**
- Removed meaningless metric (O(log n)) → Added business constraint (20 TPS)
- WHY first ("실시간 거래량 증가에 대응해야 했으므로")
- Business impact ("사용자가 거래 지연을 체감하지 않도록")

---

## Case 3: personal-nextjs-uri-generator

### Before (Technology-centered)
```
"Babel AST로 99.5% 인식률 달성"
```

### After (Context-driven)

**Description:**
```
"개발 중 현재 파일의 정확한 API 엔드포인트를 파악하려면
파일 경로를 확인하고 route나 디렉터리 표시를 수동으로 지워가며 역추적해야 했습니다.
이 과정에서 잘못된 API를 호출하거나 엔드포인트를 틀리게 입력하는 실수가 자주 발생했습니다."
```

**Tasks:**
```
"개발자마다 Next.js API를 작성하는 방식(export default, export const, export function 등)이 달라
일부 패턴만 지원하면 도구가 제대로 동작하지 않으므로,
Babel AST 파서로 모든 내보내기 패턴을 지원하여
작성 방식에 관계없이 정확한 API 주소를 표시할 수 있도록 했습니다."
```

**Achievements:**
```
"수동 역추적 과정을 제거하여 API 엔드포인트 확인 실수를 완전히 방지했습니다."
```

**Key Lessons:**
- Removed meaningless metric (99.5%) → Added problem context (manual backtracking errors)
- WHY explains developer diversity ("개발자마다 작성하는 방식이 달라")
- Strong impact expression ("완전히 방지")

---

## Case 4: bnz-vector-search

### Before (Technology-centered)
```
"Azure OpenAI의 512차원 임베딩 모델을 활용한 벡터 검색 시스템"
```

### After (Context-driven)

**Description:**
```
"기존 키워드 기반 검색은 키워드가 비슷해도 전혀 다른 문제가 검색되는 한계가 있었고,
키워드 분류 방식은 수동 라벨링 작업이 필요해 인력 부족으로 실현이 어려웠습니다.
데이터 가공 없이 LLM 리소스만으로 문제의 의미를 이해하는 임베딩 기반 검색 시스템을 구축했습니다."
```

**Achievements:**
```
"수동 라벨링 없이 임베딩으로 문제의 의미를 자동 분석하여,
인력 부족 상황에서도 유사 문제 검색 시스템을 구축할 수 있었습니다."
```

**Key Lessons:**
- Removed tech spec (512-dimensional) → Added business constraint (인력 부족, 수동 라벨링 불가)
- Explained why existing approach failed (키워드 기반의 한계)
- Business outcome (인력 부족 상황에서도 시스템 구축)

---

## Case 5: bnz-odapp

### Before (Generic)
```
"학생들의 오답을 관리하는 시스템"
```

### After (Context-driven)

**Description:**
```
"학원에서 시험 후 틀린 문제를 조교가 수기로 관리하면서
학생별 진행 상황을 파악하기 어렵고,
오답노트를 하지 않는 학생을 조기에 발견하기 어려운 문제가 있었습니다.
학생들이 마치 일감 관리하듯 오답 문제를 체계적으로 정리하고,
교사가 SSE를 통해 실시간으로 학생들의 문제 풀이 상황을 확인하며
피드백을 주고받을 수 있는 시스템을 개발했습니다."
```

**Tasks:**
```
"교사가 실시간으로 학생들의 문제 풀이 상황을 확인하고 피드백을 주고받아야 했으므로,
SSE(Server-Sent Events)를 활용한 실시간 통신 기능을 구현하고
이벤트 핸들러를 독립적인 모듈로 추출하여 관심사를 분리했습니다."
```

**Achievements:**
```
"수기 관리에서 시스템 관리로 전환하여 조교의 관리 부담을 줄이고,
학생별 진행 상황을 한눈에 파악할 수 있게 되었습니다."
```

**Key Lessons:**
- Added problem context (수기 관리, 진행 상황 파악 어려움)
- Specific tech choice with WHY (SSE for real-time feedback)
- Before → After (수기 관리 → 시스템 관리, 부담 감소)
