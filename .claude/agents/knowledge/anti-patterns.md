# Anti-Patterns to Eliminate

## ❌ Technology-Centered Patterns

### 1. Context-less technology listing
```
"Achieved 99.5% recognition with Babel AST parser"
"Implemented 512-dimensional vector search"
"Efficient DB design with Prisma ORM"
```
→ Unclear why that technology or why those numbers matter

### 2. Only technical metrics
```
"Test coverage 0% → 50% achieved"
"Processes 20 transactions per second"
```
→ Just numbers without business impact

### 3. Generic solutions (vague verbs)
```
"체계적으로 관리하고, 실시간으로 모니터링"
"효율적으로 구현"
"안정적으로 운영"
"최적화된 설계"
```
→ What every system claims, lacks specificity

---

## Comparison Examples

### ❌ vs ✅

**Order Processing:**
- ❌ "효율적으로 주문을 처리했습니다"
- ✅ "Red-Black Tree 기반 매칭 엔진으로 실시간 거래량 증가에 대응했습니다"

**Domain Management:**
- ❌ "체계적으로 도메인을 관리했습니다"
- ✅ "회원, 문제, 알림 도메인으로 분리하여 변경 범위를 명확히 했습니다"

**Real-time Monitoring:**
- ❌ "실시간으로 모니터링했습니다"
- ✅ "SSE를 통해 학생별 문제 풀이 상황을 실시간으로 교사에게 전달했습니다"

---

## Pattern Transformation

**What** (what was done) → **Why + How + Tech** (why, how, with what technology)

### Example Transformation

**Before (What):**
```
"API 엔드포인트를 자동으로 생성하는 도구를 개발했습니다."
```

**After (Why + How + Tech):**
```
"파일 경로를 수동으로 역추적하며 API 엔드포인트를 확인하는 과정에서
잘못된 API를 호출하는 실수가 자주 발생했으므로,
Babel AST 파서로 모든 내보내기 패턴을 지원하여
작성 방식에 관계없이 정확한 API 주소를 자동으로 표시하도록 했습니다."
```

---

## Common Mistakes

### Mistake 1: Technology showcase without problem context
```json
{
  "description": "Azure OpenAI의 512차원 임베딩 모델을 활용한 벡터 검색 시스템을 구축했습니다."
}
```

**Fix:** Add the problem and constraint first
```json
{
  "description": "키워드 기반 검색은 키워드가 비슷해도 전혀 다른 문제가 검색되는 한계가 있었고,
  키워드 분류 방식은 수동 라벨링 작업이 필요해 인력 부족으로 실현이 어려웠습니다.
  데이터 가공 없이 LLM 리소스만으로 문제의 의미를 이해하는 임베딩 기반 검색 시스템을 구축했습니다."
}
```

### Mistake 2: Missing WHY in tasks
```json
{
  "tasks": [
    "Babel AST 파서를 구현했습니다."
  ]
}
```

**Fix:** Add business need before technical choice
```json
{
  "tasks": [
    "개발자마다 Next.js API를 작성하는 방식이 달라 일부 패턴만 지원하면 도구가 제대로 동작하지 않으므로,
    Babel AST 파서로 모든 내보내기 패턴을 지원하여 작성 방식에 관계없이 정확한 API 주소를 표시할 수 있도록 했습니다."
  ]
}
```

### Mistake 3: Numbers without context in achievements
```json
{
  "achievements": [
    "99.5% 인식률 달성",
    "테스트 커버리지 50% 달성"
  ]
}
```

**Fix:** Focus on business impact or add context
```json
{
  "achievements": [
    "수동 역추적 과정을 제거하여 API 엔드포인트 확인 실수를 완전히 방지했습니다.",
    "핵심 도메인 우선 전략으로 테스트 커버리지를 0%에서 50%까지 증가시켜,
    연쇄 버그 없이 안전하게 개발할 수 있는 환경을 구축했습니다."
  ]
}
```
