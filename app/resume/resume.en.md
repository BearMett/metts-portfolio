# Youngmin Kim
A Developer Who Builds Better Workflows, Together with the People Who Use Them

**GitHub**: [github.com/BearMett](https://github.com/BearMett)

**Email**: developer@metts.today

---

## **About Me**

I am Youngmin Kim, a software engineer with 7 years of experience. I identify transition boundaries in live legacy systems, maintain service continuity, and modernize systems incrementally. I have integrated 15 distributed codebases into a single configuration-driven structure and transitioned a vulnerable system after a security breach within two weeks.

My core stack is TypeScript/NestJS, but I am pragmatic about language and tooling, including Java, Bash, Python, PHP, C/C++, and Lua depending on the problem. Across domains such as security-certified products, metaverse platforms, education services, and contactless payments, I have focused on solving structural issues. I redesigned regex-limited approaches with parser-based architecture and chose full rebuilds over partial legacy fixes when cost and risk analysis required it.

Before implementation, I first define the business-necessary level of solution. I identify improvement opportunities from operational friction that non-developers had accepted as normal, reducing content registration from one week to same-day and eliminating operational dependency on the development team. I prioritize APIs that collaborating engineers can understand intuitively.

---

## **Portfolio**

[Go to portfolio](/portfolio)

---

## **Strengths**

- **I analyze problem structure first and redesign the approach** - I choose technical directions that match root causes, such as redesigning architectures that become more fragile with patch-based fixes and reducing tight coupling between services through domain separation.
- **I eliminate recurring cost structurally** - I integrated a codebase that required the same fix in 15 places into a unified structure and consolidated four apps into one to remove repetitive work at the root.
- **I make fast decisions and execute in crisis situations** - I fully rebuilt a breached system in two weeks and switched without service interruption.
- **I remove operational dependence on engineering for non-developer teams** - I replaced workflows that always required engineering intervention with tools and structures teams can operate directly.
- **I design systems that are easy to integrate** - External partners completed integration within one day after receiving documentation, and additional vendors could be onboarded without extra development.

---

**Core Skills**:

Languages: TypeScript, Node.js, Python, C/C++, PHP, Lua, SQL
Frameworks: Next.js, React, NestJS, FastAPI, Prisma, Expo/EAS
Infrastructure: AWS, GCP, Docker, Nginx, Jenkins, GitHub Actions, Linux
Design: DDD, TDD, REST API Design, Architecture Design

---

## **Experience (7 years total)**

### **Smart Learning Korea Co., Ltd. | Team Lead / Development Planning Division (2025.03 ~ Present)**

**Integrated Subscription Cancellation Management Page**

[Background]
I identified the issue through repeated license-recovery requests from the operations team. Interviews showed that payment cancellations at the PG provider were not connected to internal systems, and no operations-side license management tool existed, so engineering intervention was repeatedly required.

[Role & Approach]
- Requested meetings directly after observing repeated request patterns and confirmed the workflow where operations cancelled payments on the PG site and then requested license recovery from engineering.
- Identified that the root issue was missing inter-system integration, not simply a request for "cancellation automation."
- Migrated payment/license systems first and verified with unit tests.
- Monitored subscription updates manually for several days before automation.

[Outcome & Impact]
- Cancellation/refund/license requests to engineering were eliminated.
- Operations can now handle cancellation, refund, and subscription management without engineering intervention.
- Closed the security risk where users could retain service access after payment cancellation.

[Technical Decisions]
- Why not automate everything at once: payment/license flows were unit-testable, but the daily subscription batch required monitoring with real production data.
- Expanded automation incrementally after validating each subsystem's stability.

[Stack]
Next.js, TypeScript, PostgreSQL

**Built an English Education Content Management System (CMS)**

[Background]
Audio content in English learning services repeatedly failed to play or rendered incorrectly. The operations team was using a workflow of SFTP upload -> URL check -> JSON input via DBeaver. After reviewing the full upload manual, I identified that forcing non-developers to follow this workflow was the real issue; the team had normalized the inconvenience.

[Role & Approach]
- Identified structural pain points the content team had not explicitly recognized and proposed improvements.
- Preserved familiar spreadsheet-based workflows and considered high-volume processing patterns (100+ items).
- Built a Next.js CMS flow: CSV template download -> media upload -> data input -> real-time validation -> database write.
- Localized error messaging and applied schema validation at input time to reduce onboarding friction.

[Outcome & Impact]
- Content registration time reduced from one week to same-day.
- Removed development-team validation bottlenecks and reduced operational workload by 80%.
- Enabled independent content operations without development intervention.

[Technical Decisions]
- Why CSV: operators were already using Excel for textbook-to-data conversion and it scales well for batch operations.
- Why real-time validation: immediate pre-upload feedback prevented errors early and fully removed SFTP/DBeaver dependency.

[Stack]
Next.js, Tailwind CSS, TanStack Query, Prisma, NCP Object Storage

**Multi-Vendor Coupon API**

[Background]
The legacy coupon system generated files and emailed them to external vendors. While issuance and redemption were trackable, the middle lifecycle (sales/refunds) was not, making settlement validation impossible. I proactively asked the business owner whether settlement was feasible in the current model when the KB Star Banking opportunity arose, which led to a new API design.

[Role & Approach]
- Predicted settlement reliability risk in advance and validated the concern through business-side discussion.
- Designed REST APIs that read naturally from the integrating KB developer perspective.
- Defined endpoint structure with clear entity/action semantics: POST /coupon (create), GET /coupon/:id (status), PUT /coupon/:id/deactivate (deactivate), etc.
- Added store-level API key generation and segmentation for multi-vendor operation.

[Outcome & Impact]
- Completed KB integration testing in one day (documentation handoff -> immediate integration).
- Secured settlement reliability via real-time sales tracking and refund-policy support.
- Enabled immediate onboarding of additional vendors without extra development.

[Technical Decisions]
- REST principle: separated entity (`coupon`) and actions (`deactivate`, `activate`, `cancel`) for intuitive API understanding.
- API key model: per-store key separation improved vendor-level revenue tracking and permission control.

[Stack]
TypeScript, REST API

**20-Year Legacy: Faster Development by Integrating 15 Repositories**

[Background]
The same bug fix had to be applied independently across 15 repositories. A 20-year-old PHP 5.3 education platform was split into 3 variants (paid/test/free) x 5 modules, managed in 15 SVN repositories. Manual FTP deployment made urgent patches take over a day, with no disaster recovery structure.

[Role & Approach]
- Reviewed real deployment processes repository-by-repository with the team and audited duplicated code and branching logic.
- Integrated 15 repositories into a single Git repository and abstracted domain branch logic via environment variables.
- Started integration from shared modules and expanded sequentially after per-variant behavior validation.
- Migrated runtime stack from PHP 5.3/Apache2 to PHP 5.6/Nginx+PHP-FPM.

[Outcome & Impact]
- Repetitive fix operations reduced from 15 times to 1 (single codebase).
- Removed 70% code duplication and reduced new feature lead time by 66%.
- Reduced urgent patch lead time from over a day to full-variant deployment within one hour.
- Established disaster recovery capability.

[Technical Decisions]
- Git transition: no internal SVN infrastructure and Git enabled branch strategy + code review adoption.
- Nginx adoption: improved performance by 30% over Apache and increased concurrent handling.

[Stack]
PHP 5.6, Git, Nginx, Docker

**Eliminated Security Threats in 2 Weeks - Full Rebuild of an EOL Stack**

[Background]
A real SQL injection attack succeeded on an EOL stack (CI 2.x, PHP 5.6). Through emergency discussions with security and operations, we identified impact scope and further attack exposure. Partial legacy remediation (estimated 3 months) was too risky during active exposure.

[Role & Approach]
- Performed cost/risk analysis of legacy patching vs full rebuild and proposed a two-week rebuild plan to leadership; plan approved.
- Interviewed service owners integrating the auth system and mapped current integration flows.
- Designed an independent API service on Next.js 15 + Prisma with type safety.
- Implemented layered security architecture: JWT auth, prepared statements, XSS prevention, HTTPS enforcement.
- Planned blue-green deployment, automated data consistency validation, and rollback procedures.

[Outcome & Impact]
- Blocked further attacks with two-week delivery and removed legal risk.
- Completed migration with zero downtime.
- Established an up-to-date LTS environment for security patching over the next five years.

[Technical Decisions]
- Why Next.js: needed to deliver both auth APIs and admin UI within two weeks; full-stack framework reduced integration overhead.
- Why Prisma: prepared statements by default reduced SQL injection risk at the source, while improving type safety and migration automation.

[Stack]
Next.js 15, Tailwind CSS, TanStack Query, Prisma

**Integrated Multiple Brand Apps into a Single Project**

[Background]
Applying the same bug fix across four apps repeatedly caused human errors where patches landed in only some apps. Review with the team confirmed the root issue was separate management of four React Native projects. Even identifying where a bug occurred consumed unnecessary time.

[Role & Approach]
- Audited tenant differences (OAuth keys, branding, resources), identified common logic and branching points.
- Started integration with common modules, then expanded tenant-by-tenant with validation.
- Used Expo Config to abstract tenant-specific elements through environment variables.
- Unified one-touch build scripts and EAS pipelines.

[Outcome & Impact]
- Repetitive fix operations reduced from 4 times to 1 (single codebase).
- Deployment time reduced from 4 hours to 40 minutes (70% reduction).
- Eliminated app-version inconsistency caused by human error.
- Enabled immediate emergency patch rollout via EAS Update (no app-store review wait).

[Technical Decisions]
- Why Expo: simplified native module abstraction for multi-tenant maintenance and unified build/deploy through EAS.
- Env strategy: separated build-time settings (OAuth keys) and runtime flags for security and flexibility.

[Stack]
React Native, Expo, EAS, Firebase

### **BnZ Co., Ltd. | Software Engineer (2024.03 ~ 2025.03)**

**Ensuring Editability of LLM-Generated Content - UX Improvement for AI Education Services**

[Background]
In an LLM-based similar-problem generation service, teachers could not use generated math content in real classes. Outputs were provided only as images, so equations were not editable in HWPX, reducing practical conversion of AI output into classroom usage.

[Role & Approach]
- Analyzed the gap between LLM outputs and actual user workflow after receiving usability feedback.
- Initial request was "convert to HWPX," but I reframed with "Does it need to be editable?" and confirmed direct teacher editing was the real requirement.
- Tried reverse use of existing open source (HWP -> LaTeX), confirmed structural incompatibility, then designed a new LaTeX -> HWPX conversion algorithm using grammar cases as reference.
- Designed and implemented FastAPI conversion endpoints with modular logic and unit tests.

[Outcome & Impact]
- Achieved 100% conversion validation within the defined supported formula scope.
- Improved practical adoption of AI-generated content by enabling editing.
- Established a UX pattern for naturally integrating LLM outputs into end-user workflows.

[Technical Decisions]
- Why scope equations first: LaTeX and HWP equation grammars differ fundamentally; prioritized reliable conversion for key equation classes before expanding coverage.
- Why not reuse open source directly: HWP -> LaTeX projects were structurally unsuitable for reverse conversion, so I extracted only grammar cases and redesigned the approach.

[Stack]
Python, FastAPI

**Stabilizing AI Math Solving Service by Improving LLM Output Reliability**

[Background]
In an AI math-solving service, LaTeX equations generated by the LLM failed to render, preventing users from reading AI responses and reducing service trust. Manual correction was not feasible.

[Role & Approach]
- Collected concrete failure cases through discussions with requesters and jointly analyzed existing regex-based attempts.
- Although the initial request was "adjust regex patterns," I identified a structural limit where regex fixes caused cascading failures in other patterns.
- Analyzed ordering in previous regex attempts and extracted dominant error patterns.
- Designed and implemented a modular parser-based solution instead of regex.

[Outcome & Impact]
- Achieved 100% normal rendering across 500 LLM output test cases.
- Reduced user churn risk by restoring output reliability.
- Established a reusable post-processing pipeline pattern for LLM outputs.

[Technical Decisions]
- Why parser over regex: nested LaTeX structures cannot be fully handled by regex. Parser-based parsing solved structural issues fundamentally and prevented cascading regressions.

[Stack]
TypeScript

**Education Domain Boilerplate Platform**

[Background]
Each new education service required rebuilding infrastructure configuration, authentication, and deployment pipelines from scratch. Domain requirements (role separation, content management) were similar across projects, but no standardized starting point existed.

[Role & Approach]
- Defined common education-domain requirements and designed a reusable boilerplate.
- Built the full backend server (NestJS + PostgreSQL), 100% contribution.
- Built GCP infrastructure and deployment automation, 100% contribution.
- Designed integration structure with frontend (Next.js).

[Outcome & Impact]
- Established standardized education domain capabilities and reduced startup time for later projects.
- Improved developer productivity through deployment automation.
- Adopted as a team-level standard architecture pattern.

[Technical Decisions]
- Why NestJS: module-oriented structure fit domain separation and TypeScript support improved type safety.
- Why GCP setup: AppEngine autoscaling and managed services reduced operational burden.

[Stack]
Next.js, NestJS, PostgreSQL, GCP

**Improved Code Structure of Live Services**

[Background]
Live service code was not separated by feature and was heavily mixed within files/modules, so even simple changes took 1-3 weeks. With no tests in place, side effects could not be verified in advance.

[Role & Approach]
- Analyzed dependency relationships across the existing codebase.
- Refactored and modularized feature boundaries (70% contribution).
- Added unit tests for separated modules and established automated testing.
- Separated services using GCP AppEngine and Cloud Functions.

[Outcome & Impact]
- Feature modification lead time reduced from 1-3 weeks to 1-3 days.
- Test coverage increased from 0% to 50%.
- Enabled pre-change validation of side effects.

[Technical Decisions]
- Incremental separation strategy: prioritized frequently changed modules first for immediate impact instead of all-at-once refactoring.
- Why Cloud Functions: separated independent features into serverless deployment units to reduce blast radius.

[Stack]
Node.js, React, GCP AppEngine, GCP Function

### **MAXST Co., Ltd. | Web Server Team Lead (2023.04 ~ 2024.03)**

**Developed and Operated CBT for Metaverse Service "TLONA"**

[Background]
During development of "TLONA," a real-world metaverse/social service, the web server part became the slowest bottleneck in the entire team. Other parts repeatedly waited for web API completion. Code analysis showed tightly coupled service architecture where changing one service caused cascading side effects.

[Role & Approach]
- Recognized the web server bottleneck and identified tight inter-service coupling as the root cause via direct code analysis.
- Framed the issue as an architectural constraint rather than coding speed.
- Separated domain boundaries clearly and redesigned the service layer into an expression layer representing domain actions.
- Lowered adoption barriers by implementing core logic first and enabling team members to focus on usage.

[Outcome & Impact]
- Reduced merge cycle from 7 days to 1-2 days.
- Turned the slowest part into the fastest part in the overall team.
- Achieved zero CBT bugs with test-friendly architecture.
- Built a team culture of shielding members from structural issues so they could focus on delivery.

[Technical Decisions]
- Why domain boundary separation: under previous tight coupling, feature changes required full cross-service validation. Boundary separation enabled independent development/testing.
- Why leader-first core implementation: reduced onboarding burden for the new structure and accelerated practical team adoption.

[Stack]
NestJS, AWS ECS

### **Wearvalley Co., Ltd. | Software Engineer (2020.01 ~ 2023.04)**

**Competitor Product Policy Migration**

[Background]
After winning a major telecom contract, engineers attempted manual policy migration, but the scale (2,000 DBs / 5,000 policies) made manual work impractical. A formal support request came to the R&D center, and I joined as the integration owner.

[Role & Approach]
- Analyzed competitor policies and implemented mapping logic to our solution policy model.
- Wrote verification queries for policy integrity reporting (100% validation).

[Outcome & Impact]
- Completed 100% migration and integrity verification for 5,000 policies.
- Established a precedent for competitor-product migration.

[Technical Decisions]
- Why Lua scripting: runtime policy mapping was possible through the built-in script engine in our solution, without external tools.

[Stack]
Lua, SQL, CentOS

**Security Hardening for CC Certification and Development Process Automation**

[Background]
For CC certification, repeated build-test cycles were mandatory, but QA and development teams manually performed installation for every build (1-4 times/day, 5 min each). I identified this repetitive work through team conversation and clarified the issue via follow-up questions. Certification also required daemon management that worked without OS-specific dependency (e.g., systemd).

[Role & Approach]
- Built Jenkins-based build/install automation scripts and shared them across teams.
- Communicated continuously with certification auditors to align implementation with CC requirements.
- Collaborated with server/engine developers and QA to establish automation.
- Designed and implemented an OS-independent daemon controller.
- Improved CI/CD pipelines to increase delivery speed.

[Outcome & Impact]
- Eliminated 5-20 minutes/day of repetitive post-build installation work.
- Expanded automation scripts into technical-support tooling used in customer support.
- Contributed to CC certification through memory-security routines and OS-independent daemon control.
- Improved development process by automatically distributing latest builds in internal network.

[Technical Decisions]
- Why OS-independent daemon control: depending on OS service managers (like systemd) would expand certification scope to the OS layer; custom daemon controller minimized certification surface.

[Stack]
C/C++, Jenkins, CentOS, Bash

**Customer HR Data Integration**

[Background]
Each customer had different HR data structures and account lifecycle policies. When sales/engineering proposed HR integration and customers accepted, I worked directly with customer stakeholders to define concrete requirements and deliver tailored integration programs.

[Role & Approach]
- Interviewed customer DB administrators directly to gather lifecycle-management requirements.
- Identified hidden security-audit requirements and internal policy constraints behind initial feature requests.
- Implemented customer-specific differentiated policies (e.g., Customer A: immediate delete for leavers, Customer B: temporary-group transfer then manual handling).
- Delivered tailored solutions through per-customer codebases and version management.

[Outcome & Impact]
- Built stable HR integration systems meeting each customer's security policies and compliance requirements.
- Earned customer trust through reliable operations.
- Contributed to additional revenue through tailored solution delivery.

[Technical Decisions]
- Why per-customer codebase separation: HR policies varied fundamentally per customer; independent codebases were more maintainable than deep branching on shared code.

[Stack]
Lua, SQL, CentOS

---

## **Education**

B.S. in Computer Engineering, Hankyong National University (2013.03 ~ 2020.02)

- Completed coursework including system programming and network security.

## **Certifications**

- Engineer Information Processing
- Network Manager Level 2
- Information Equipment Operation Technician

## **Awards**

- Grand Prize, Anseong University Student Startup Competition (2019)
- Grand Prize, Hankyong National University Startup Competition (2018)

## **Languages**

- English: Can read technical documentation and write/understand IT-related documents
- Korean: Native
