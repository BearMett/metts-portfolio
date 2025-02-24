import { ContactForm } from '@/components/contact-form';
import { SocialLinks } from '@/components/social-links';
import { Card, CardContent } from '@/components/ui/card';
import { MY_EMAIL, MY_NAME } from '@/lib/consts';
import { Mail, User } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 py-8 md:py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-lg text-muted-foreground">환영합니다!</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">연락처 정보</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <span className="text-muted-foreground">{MY_NAME} </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <a href={`mailto:${MY_EMAIL}`} className="text-muted-foreground hover:text-foreground">
                      {MY_EMAIL}
                    </a>
                  </div>
                  {/* <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span className="text-muted-foreground">{MY_PHONE} </span>
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Connect</h2>
                <SocialLinks />
              </div>
            </CardContent>
          </Card>
        </div>
        {/* 
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">메시지 보내기</h2>
              <ContactForm />
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
}
