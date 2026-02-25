import { aboutMeData } from '@/lib/data/about-me';
import { skillCategoriesData } from '@/lib/data/skills';
import { achievementsData } from '@/lib/data/achievements';
import { attitudesData } from '@/lib/data/attitudes';
import type {
  AboutMeTranslated,
  SkillCategoryTranslated,
  AchievementTranslated,
  AttitudeTranslated,
} from '@/lib/data/types';

export function getAboutMeDataBothLanguages(): AboutMeTranslated {
  return aboutMeData;
}

export function getSkillCategoriesBothLanguages(): SkillCategoryTranslated[] {
  return skillCategoriesData;
}

export function getAchievementsBothLanguages(): AchievementTranslated[] {
  return achievementsData;
}

export function getAttitudesBothLanguages(): AttitudeTranslated[] {
  return attitudesData;
}
