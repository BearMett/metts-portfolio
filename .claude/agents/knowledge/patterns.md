# Portfolio Content Patterns

## Required Pattern: Problem → Context → Solution → Impact

Every portfolio item MUST follow this flow:

1. **Problem**: What inconvenience, inefficiency, or failure existed?
2. **Context**: Why didn't existing approaches work? What constraints existed?
3. **Solution**: Why was this specific technology/method chosen?
4. **Impact**: What changed for users/team/business?

---

## Description Pattern

### Structure
```
[Problem situation] + Concrete example (REQUIRED!)
→ [Constraints/Why existing approach failed]
→ [Specific solution (not generic)]
```

### Checklist
- [ ] Contains concrete example using "예를 들어" (for example)?
- [ ] Explains why existing approach failed with specific constraints?
- [ ] Solution is specific to this project (not generic)?
- [ ] Avoids mere technology stack listing?

### ❌ Bad Example - No concrete example
```
"시스템 불안정으로 인한 장애가 지속적으로 발생했습니다."
"Next.js, TypeScript, PostgreSQL을 기반으로 개발되었으며..."
```
→ Vague, abstract, just lists tech stack

### ✅ Good Example - With concrete example
```
"간단한 서비스 로직 변경만으로도 연쇄적으로 다른 기능이 고장나는 문제가 발생했습니다.
예를 들어, 질문 형식을 수정하면 리터럴 값을 읽는 기능이 깨지고,
그것이 트리거를 호출하지 않아 또 다른 기능까지 동작하지 않는 등..."
```
→ Reader vividly understands the problem

---

## Tasks Pattern

### Structure
```
[WHY: Business need/problem situation] + [Constraints/requirements]
→ [HOW: Technology choice/implementation method] + [Result/effect]
```

### Checklist
- [ ] Contains WHY phrase: "~해야 했으므로" (had to... therefore) or "~가 필요했으므로" (needed... therefore)?
- [ ] WHY specifies concrete business situation/user inconvenience?
- [ ] HOW connects to "why this technology was chosen" rather than just listing tech?
- [ ] Each task is independently understandable with context?

### ❌ Bad Example - No WHY
```
"Babel AST 파서를 구현했습니다."
"Prisma ORM을 활용한 데이터베이스 설계"
```
→ Missing WHY, unclear purpose

### ✅ Good Example 1 (bnz-odapp)
```
"교사가 실시간으로 학생들의 문제 풀이 상황을 확인하고 피드백을 주고받아야 했으므로,
SSE(Server-Sent Events)를 활용한 실시간 통신 기능을 구현하고
이벤트 핸들러를 독립적인 모듈로 추출하여 관심사를 분리했습니다."
```

**Breakdown:**
- WHY: "교사가 실시간으로... 피드백을 주고받아야 했으므로"
- HOW (tech choice): "SSE를 활용한 실시간 통신 기능을 구현"
- HOW (architecture): "이벤트 핸들러를 독립적인 모듈로 추출하여 관심사를 분리"

### ✅ Good Example 2 (personal-nextjs-uri-generator)
```
"개발자마다 Next.js API를 작성하는 방식(export default, export const, export function 등)이 달라
일부 패턴만 지원하면 도구가 제대로 동작하지 않으므로,
Babel AST 파서로 모든 내보내기 패턴을 지원하여
작성 방식에 관계없이 정확한 API 주소를 표시할 수 있도록 했습니다."
```

**Breakdown:**
- WHY: "개발자마다 작성 방식이 달라... 동작하지 않으므로"
- HOW (tech choice): "Babel AST 파서로 모든 내보내기 패턴을 지원"
- Result: "작성 방식에 관계없이 정확한 API 주소 표시"

---

## Achievements Pattern

### Structure
```
[Before state] → [After state] + [Business impact or user experience change]
```

### Checklist
- [ ] Before → After structure is clear?
- [ ] Business impact or user experience change is evident?
- [ ] If numbers are used, was context provided in Tasks?

### Number Usage Principles
- ❌ Numbers without context: "99.5% recognition rate", "50% coverage achieved"
- ✅ Numbers with context:
  - "Test coverage 0% → 50% (core domain priority strategy)"
  - "Even under blockchain's 20 TPS constraint, exchange engine performed fast"
- ✅ Business impact focus (without numbers):
  - "Emergency response mode → Stable deployment"
  - "Manual management → System management, reducing TA burden"

### ❌ Bad Example
```
"99.5% 인식률 달성"
"테스트 커버리지 50% 달성"
"512차원 벡터 검색 구현"
```

### ✅ Good Example 1 (bnz-domain-refactoring)
```
"도메인 분리로 변경 범위가 명확해져 연쇄 버그 없이 안전하게 개발할 수 있게 되었고,
이슈 대응에만 매달리던 팀이 신규 기능 개발에 집중할 수 있게 되었습니다."
```

**Breakdown:**
- Before: "이슈 대응에만 매달리던 팀"
- After: "신규 기능 개발에 집중"
- Impact: "변경 범위 명확, 연쇄 버그 없이 안전한 개발"

### ✅ Good Example 2 (personal-nextjs-uri-generator)
```
"수동 역추적 과정을 제거하여 API 엔드포인트 확인 실수를 완전히 방지했습니다."
```

**Breakdown:**
- Before (implicit): "수동 역추적 + 실수 발생"
- After: "자동화 + 실수 방지"
- Impact: "완전히 방지" (strong expression)

---

## Content Guidelines

### Tasks Count
- Simple projects: 3 tasks
- Complex projects: 4-5 tasks
- If too many (6+), consider merging to keep only essentials

### Achievements Count
- Generally 2-3 achievements
- Strong 2 > Weak 3
