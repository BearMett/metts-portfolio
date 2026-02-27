import { ContactPageContent } from '@/components/client/contact-page-content';
import { MY_EMAIL, MY_NAME } from '@/lib/consts';

export default function ContactPage() {
  return <ContactPageContent name={MY_NAME} email={MY_EMAIL} />;
}
