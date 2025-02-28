'use client';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GITHUB_URL } from '@/lib/consts';
import { useEffect, useState } from 'react';

export function SocialLinks() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 컴포넌트가 마운트된 후에만 테마 관련 코드 실행
  useEffect(() => {
    setMounted(true);
  }, []);

  // 현재 테마에 기반한 아이콘 경로 결정
  const getIconPath = (darkIcon: string, lightIcon: string) => {
    if (!mounted) return lightIcon; // 기본값으로 라이트 모드 아이콘 반환

    const currentTheme = resolvedTheme ?? theme;
    return currentTheme === 'dark' ? darkIcon : lightIcon;
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: GITHUB_URL,
      icon: getIconPath('/icons-dark/github-mark.svg', '/icons-light/github-mark.svg'),
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
