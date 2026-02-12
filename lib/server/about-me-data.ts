import { aboutMeData } from '@/lib/data/about-me';
import type { AboutMeTranslated } from '@/lib/data/types';

export function getAboutMeDataBothLanguages(): AboutMeTranslated {
  return aboutMeData;
}
