'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';

export default function Home() {
  const { t } = useLanguage();

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
          <h1 className="text-4xl font-bold">{t('home.title')}</h1>
          <p className="max-w-prose text-lg text-muted-foreground">{t('home.introduction')}</p>
          <h2 className="text-2xl text-muted-foreground">{t('home.values.title')}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {t('home.values.items').map((item: string) => (
              <li key={`value-${item}`}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl text-muted-foreground">{t('home.workApproach.title')}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {t('home.workApproach.items').map((item: string) => (
              <li key={`approach-${item}`}>{item}</li>
            ))}
          </ul>
          <h2 className="text-2xl text-muted-foreground">{t('home.strengths.title')}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {t('home.strengths.items').map((item: string) => (
              <li key={`strength-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">{t('home.skillStack')}</h2>
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
        <h2 className="text-2xl font-bold">{t('home.interests')}</h2>
        <div className="prose dark:prose-invert">
          <p>{t('home.interestsContent')}</p>
        </div>
      </section>
    </div>
  );
}
