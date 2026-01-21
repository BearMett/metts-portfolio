# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server on http://localhost:3000
- `yarn build` - Build for production 
- `yarn start` - Start production server
- `yarn lint` - Run ESLint to check code quality

## Tech Stack

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Radix UI** - Headless UI components (extensive shadcn/ui setup)
- **MDX** - Markdown with JSX for blog content
- **Vitest** - Testing framework
- **Vercel Analytics & Speed Insights** - Performance monitoring

## Architecture Overview

### Internationalization (i18n)
- Bilingual site supporting Korean (default) and English
- Language resources centralized in `lib/resource.const.ts`
- Language context provider in `components/language-provider.tsx`
- Language switching via `components/language-switcher.tsx`

### Portfolio Data Management
- Portfolio items with translations defined in `lib/portfolio-data.ts`
- Each portfolio item includes Korean/English versions of title, description, tasks, achievements
- Category-based filtering system with translated labels
- Portfolio displayed via `components/interactive-portfolio.tsx`

### Component Architecture
- **shadcn/ui pattern**: Components in `components/ui/` following Radix UI + Tailwind
- **Theme system**: Light/dark mode via `components/theme-provider.tsx`
- **Navigation**: Responsive navigation with language switching
- **Path aliases**: `@/*` maps to project root

### Key Files
- `app/layout.tsx` - Root layout with providers (Theme, Language, Navigation)
- `app/page.tsx` - Home page with personal introduction
- `lib/resource.const.ts` - All translatable strings
- `lib/portfolio-data.ts` - Portfolio project data with translations
- `lib/markdown.ts` - MDX processing utilities
- `components/language-provider.tsx` - i18n context and translation function

### Content Structure
- **Portfolio**: Interactive portfolio showcase with filtering
- **Resume**: Static resume page with download functionality
- **Blog**: MDX-based blog system (basic setup)
- **Contact**: Contact form with social links

## Development Practices

### Code Style
- ESLint + Prettier configured with custom rules
- TypeScript strict mode enabled
- 120 character line length
- Single quotes, trailing commas

### File Organization
- `app/` - Next.js App Router pages
- `components/` - Reusable React components
- `components/ui/` - shadcn/ui components
- `lib/` - Utility functions and data
- `public/` - Static assets including portfolio images

### Important Notes
- Portfolio images stored in `public/portfolio/`
- Profile image in `public/profile/`
- Environment variables for contact info in `lib/consts.ts`
- Korean is the default language, English is secondary
- All user-facing text should be translatable via the resource system