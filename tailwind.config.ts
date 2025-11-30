import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        // xs: ['0.6rem', { lineHeight: calcLineHeight(1 / 0.75) }], // 0.75rem -> 0.6rem
        // sm: ['0.7rem', { lineHeight: calcLineHeight(1.25 / 0.875) }], // 0.875rem -> 0.7rem
        // base: ['0.8rem', { lineHeight: calcLineHeight(1.5 / 1) }], // 1rem -> 0.8rem
        // lg: ['0.9rem', { lineHeight: calcLineHeight(1.75 / 1.125) }], // 1.125rem -> 0.9rem
        // xl: ['1rem', { lineHeight: calcLineHeight(1.75 / 1.25) }], // 1.25rem -> 1rem
        // '2xl': ['1.2rem', { lineHeight: calcLineHeight(2 / 1.5) }], // 1.5rem -> 1.2rem
        // '3xl': ['1.5rem', { lineHeight: calcLineHeight(2.25 / 1.875) }], // 1.875rem -> 1.5rem
        // '4xl': ['1.8rem', { lineHeight: calcLineHeight(2.5 / 2.25) }], // 2.25rem -> 1.8rem
        // '5xl': ['2.4rem', { lineHeight: '1' }], // 3rem -> 2.4rem
        // '6xl': ['3rem', { lineHeight: '1' }], // 3.75rem -> 3rem
        // '7xl': ['3.6rem', { lineHeight: '1' }], // 4.5rem -> 3.6rem
        // '8xl': ['4.8rem', { lineHeight: '1' }], // 6rem -> 4.8rem
        // '9xl': ['6.4rem', { lineHeight: '1' }], // 8rem -> 6.4rem
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
