'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';
import { getAboutMeData } from '@/lib/data/about-me';

export default function Home() {
  const { language } = useLanguage();
  const aboutMe = getAboutMeData(language);

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
          <h1 className="text-4xl font-bold">{aboutMe.title}</h1>
          <p className="max-w-prose text-lg text-muted-foreground">{aboutMe.introduction}</p>
          <h2 className="text-2xl text-muted-foreground">{aboutMe.values.title}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {aboutMe.values.items.map((item: string, index: number) => (
              <li key={`value-${index}`}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl text-muted-foreground">{aboutMe.workApproach.title}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {aboutMe.workApproach.items.map((item: string, index: number) => (
              <li key={`approach-${index}`}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl text-muted-foreground">{aboutMe.strengths.title}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {aboutMe.strengths.items.map((item: string, index: number) => (
              <li key={`strength-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">{aboutMe.skillStack}</h2>
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
        <h2 className="text-2xl font-bold">{aboutMe.interests}</h2>
        <div className="prose dark:prose-invert">
          <p>{aboutMe.interestsContent}</p>
        </div>
      </section>
    </div>
  );
}
