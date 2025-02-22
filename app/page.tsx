import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const specialties = [
    'Cloud Architecture',
    'DevOps',
    'Backend Development',
    'System Design',
    'API Development',
    'CI/CD',
    'JavaScript',
    'Git',
    'MySQL',
    'Java',
    'AWS',
    'GitHub',
    'TypeScript',
    'React',
    'Docker',
    'Linux',
    'SQL',
    'Node.js',
  ];

  return (
    <div className="flex flex-col gap-8 py-8 md:py-12">
      <section className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/profile/hereiam.jpg?height=300&width=300"
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-full"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">김영민</h1>
          <h2 className="text-2xl text-muted-foreground">시스템 및 서비스 개발자</h2>
          <p className="max-w-prose text-lg text-muted-foreground">
            안녕하세요. 함께 일하는 문화를 즐기는 소프트웨어 엔지니어 김영민입니다.
          </p>
          <h3 className="max-w-prose text-lg text-muted-foreground">제가 일에 임하는 가치관은</h3>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            <li>사용자와 동료의 문제를 해결하고 만족시키는 데서 보람을 느낍니다.</li>
            <li>문제의 근본 원인을 파악하고 해결하고자 노력합니다.</li>
            <li>팀원들과 작업 경험을 공유하며 인사이트를 확장하는 것을 즐깁니다.</li>
            <li>새로운 기술에 도전하되, 문제 해결의 수단으로 활용하는 것을 원칙으로 삼습니다.</li>
            <li>신중하게 설계하고 계획하되 과감하게 실행합니다.</li>
          </ul>
          <h3 className="max-w-prose text-lg text-muted-foreground">이런 가치관을 토대로 업무에 임할 때</h3>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            <li>제가 작성한 코드나 API를 사용할 동료 역시 제 고객이라는 인식으로 사용법과 오류 상황을 문서화합니다.</li>
            <li>버그나 이슈 발생 시 단순 코드 수정에 그치지 않고 근본 원인을 분석하여 재발 방지책을 강구합니다.</li>
            <li>새로운 기술 도입 시 학습 비용과 예상치 못한 리스크를 고려하여 팀원들과 충분한 논의를 거칩니다.</li>
            <li>
              구현 목적에 따라 객체 설계, 사이드이펙트 고려, PoC, 프로토타입 등 적합한 접근 방식을 선택하여 실행합니다.
            </li>
            <li>
              서버 개발이 주 업무지만 프론트엔드 개발자, 영업, 기획 등 다양한 직군의 동료들과 소통하며 인사이트를 얻는
              것을 즐깁니다.
            </li>
          </ul>
          <h3 className="max-w-prose text-lg text-muted-foreground">저의 강점은</h3>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            <li>
              모듈화와 단위 테스트를 적극 활용하여 코드를 작성합니다. 책임을 명확히 분리하고 재사용 가능한 코드를
              구현함으로써 가독성과 유지보수성을 높이고자 합니다.
            </li>
            <li>
              적극적인 피드백 문화를 지향합니다. 작업을 마치면 팀원들과 피드백을 주고받으며 장점은 강화하고 개선점은
              보완해 나갑니다.
            </li>
            <li>
              폐쇄망과 온프레미스 환경에서의 네트워크 구축 경험을 보유하고 있습니다. 이를 바탕으로 데이터와 네트워크의
              흐름을 도식화하여 관련 이슈를 명확히 파악하고 해결할 수 있습니다.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">기술 스택</h2>
        <Card>
          <CardContent className="flex flex-wrap gap-2 p-4">
            {specialties.map((specialty) => (
              <Badge className="text-xl" key={specialty} variant="secondary">
                {specialty}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">최근 관심사</h2>
        <div className="prose dark:prose-invert">
          <p>이력 블로그 개발</p>
        </div>
      </section>
    </div>
  );
}
