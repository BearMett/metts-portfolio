'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/language-provider';
import { resources } from '@/lib/resource.const';
import type {
  AboutMeTranslated,
  SkillCategoryTranslated,
  AttitudeTranslated,
} from '@/lib/data/types';

interface HomeContentProps {
  aboutMeData: AboutMeTranslated;
  skillCategories: SkillCategoryTranslated[];
  attitudes: AttitudeTranslated[];
}

export function HomeContent({ aboutMeData, skillCategories, attitudes }: HomeContentProps) {
  const { language } = useLanguage();
  const r = resources[language];

  const aboutMe = useMemo(
    () => ({
      name: aboutMeData.name[language],
      tagline: aboutMeData.tagline[language],
      introduction: aboutMeData.introduction[language],
      values: {
        title: aboutMeData.values.title[language],
        items: aboutMeData.values.items[language],
      },
      strengths: {
        title: aboutMeData.strengths.title[language],
        items: aboutMeData.strengths.items[language],
      },
      skillStack: aboutMeData.skillStack[language],
    }),
    [aboutMeData, language],
  );

  const localizedSkillCategories = useMemo(
    () =>
      skillCategories.map((cat) => ({
        id: cat.id,
        label: cat.label[language],
        skills: cat.skills[language],
      })),
    [skillCategories, language],
  );

  const localizedAttitudes = useMemo(
    () =>
      attitudes.map((item) => ({
        id: item.id,
        title: item.title[language],
        description: item.description[language],
      })),
    [attitudes, language],
  );

  return (
    <div className="flex flex-col gap-8 py-8 md:py-12">
      {/* Profile section */}
      <section className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/profile/hereiam.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-full"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">
            {aboutMe.name}
            <br />
            {aboutMe.tagline}
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">{aboutMe.introduction}</p>
          <h2 className="text-2xl text-muted-foreground">{aboutMe.strengths.title}</h2>
          <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
            {aboutMe.strengths.items.map((item: string, index: number) => (
              <li key={`strength-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">{aboutMe.skillStack}</h2>
        <div className="space-y-4">
          {localizedSkillCategories.map((category) => (
            <Card key={category.id}>
              <CardContent className="p-4">
                <h3 className="mb-2 text-lg font-semibold">{category.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge className="text-sm" key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Attitudes section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">{r.home.attitudes}</h2>
        <ul className="space-y-3">
          {localizedAttitudes.map((attitude) => (
            <li key={attitude.id}>
              <p className="font-bold">{attitude.title}</p>
              <p className="text-muted-foreground">{attitude.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
