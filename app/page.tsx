import { HomeContent } from '@/components/client/home-content';
import {
  getAboutMeDataBothLanguages,
  getSkillCategoriesBothLanguages,
  getAchievementsBothLanguages,
  getAttitudesBothLanguages,
} from '@/lib/server/about-me-data';

export default function Home() {
  const aboutMeData = getAboutMeDataBothLanguages();
  const skillCategories = getSkillCategoriesBothLanguages();
  const achievements = getAchievementsBothLanguages();
  const attitudes = getAttitudesBothLanguages();

  return (
    <HomeContent
      aboutMeData={aboutMeData}
      skillCategories={skillCategories}
      achievements={achievements}
      attitudes={attitudes}
    />
  );
}
