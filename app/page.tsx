import { HomeContent } from '@/components/client/home-content';
import { getAboutMeDataBothLanguages } from '@/lib/server/about-me-data';

export default function Home() {
  const aboutMeData = getAboutMeDataBothLanguages();

  return <HomeContent aboutMeData={aboutMeData} />;
}
