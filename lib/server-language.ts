import { cookies } from 'next/headers';
import { resolveLanguage, type Language } from '@/lib/resource.const';

export async function getRequestLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  return resolveLanguage(cookieStore.get('language')?.value);
}
