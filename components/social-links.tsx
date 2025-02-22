'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GITHUB_URL } from '@/lib/consts';

export function SocialLinks() {
  const { theme } = useTheme();

  const socialLinks = [
    {
      name: 'GitHub',
      url: GITHUB_URL,
      icon: theme === 'dark' ? '/icons-dark/github-mark.svg' : '/icons-light/github-mark.svg',
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {socialLinks.map((link) => (
        <Button key={link.name} variant="outline" size="icon" asChild>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground/80"
          >
            <Image src={link.icon} alt={link.name} width={20} height={20} />
            <span className="sr-only">{link.name}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
