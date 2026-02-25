import { HomeContent } from '@/components/client/home-content';
import { getAboutMeDataBothLanguages } from '@/lib/server/about-me-data';
import { skillCategoriesData } from '@/lib/data/skills';
import { achievementsData } from '@/lib/data/achievements';
import { attitudesData } from '@/lib/data/attitudes';

export default function Home() {
  const aboutMeData = getAboutMeDataBothLanguages();

  return (
    <HomeContent
      aboutMeData={aboutMeData}
      skillCategories={skillCategoriesData}
      achievements={achievementsData}
      attitudes={attitudesData}
    />
  );
}
