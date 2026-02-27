'use client';

import { SocialLinks } from '@/components/social-links';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, User } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

interface ContactPageContentProps {
  name?: string;
  email?: string;
}

export function ContactPageContent({ name, email }: ContactPageContentProps) {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl space-y-8 py-8 md:py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{t('contact.title')}</h1>
        <p className="text-lg text-muted-foreground">{t('contact.subtitle')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="text-muted-foreground">{name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    {email && (
                      <a href={`mailto:${email}`} className="text-muted-foreground hover:text-foreground">
                        {email}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{t('contact.connect')}</h2>
                <SocialLinks />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
