# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `yarn dev` - Start development server on http://localhost:3000
- `yarn build` - Build for production (runs `yarn generate:resume` as prebuild)
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn generate:resume` - Generate resume PDF to `public/resume.pdf`

## Tech Stack

- **Next.js 16** (App Router) - React framework
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript (strict mode)
- **Tailwind CSS 3.4** - Utility-first CSS with custom design system
- **Radix UI** - Headless UI components (shadcn/ui pattern)
- **@react-pdf/renderer** - Resume PDF generation (build-time)
- **MDX** - Markdown with JSX for blog content
- **Vitest** - Testing framework
- **Vercel Analytics & Speed Insights** - Performance monitoring
- **Node.js >= 20.9.0** required

## Architecture Overview

### Server/Client Data Flow

Pages are **server components** that fetch bilingual data, then pass it to client components for localization:

```
app/page.tsx (server)
  -> lib/server/about-me-data.ts -> getAboutMeDataBothLanguages()
  -> components/client/home-content.tsx (client, localizes with useLanguage)

app/portfolio/page.tsx (server)
  -> lib/server/portfolio-data.ts -> getPortfolioDataBothLanguages()
  -> components/client/portfolio-page-content.tsx (client)
  -> lib/portfolio-utils.ts -> localizePortfolioItems(), localizePortfolioCategories()
  -> components/interactive-portfolio.tsx
```

### Data Model

Bilingual data uses `Translated` suffix types with `{ ko: string, en: string }` fields. Client components convert these to single-language types via localization utils.

Key types in `lib/data/types.ts`:
- `PortfolioItemTranslated` / `PortfolioItem` - Portfolio project entries
- `CompanyTranslated` / `Company` - Company metadata
- `PortfolioCategoryTranslated` / `PortfolioCategory` - Filter categories
- `AboutMeTranslated` / `AboutMe` - About me section
- `PortfolioServerData` - Server-to-client data bundle (items + categories + companies)

### Data Sources

- `lib/data/portfolio/*.json` - 21 portfolio items (JSON, bilingual)
- `lib/data/portfolio/index.ts` - Barrel export with display order
- `lib/data/companies/*.json` - 6 company entries (JSON, bilingual)
- `lib/data/portfolio-categories.json` - 13 filter categories
- `lib/data/about-me.ts` - About me section data
- `lib/resource.const.ts` - All UI translatable strings

### Internationalization (i18n)

- Bilingual: Korean (default) + English
- Language context: `components/language-provider.tsx`
- Language switcher: `components/language-switcher.tsx`
- UI strings: `lib/resource.const.ts`
- Data localization: `lib/portfolio-utils.ts`

### Component Architecture

- **shadcn/ui pattern**: Components in `components/ui/` (Radix UI + Tailwind)
- **Server components**: `app/` pages fetch data
- **Client wrappers**: `components/client/` handle localization
- **Theme system**: Light/dark mode via `components/theme-provider.tsx`
- **Path aliases**: `@/*` maps to project root

### Key Directories

- `app/` - Next.js App Router pages (server components)
- `components/` - React components
- `components/client/` - Client wrapper components for pages
- `components/ui/` - shadcn/ui components
- `lib/data/` - Static data (JSON + TypeScript)
- `lib/server/` - Server-only data fetching functions
- `lib/` - Utilities, constants, types
- `scripts/` - Build helper scripts (PDF generation)
- `public/portfolio/` - Portfolio images
- `public/profile/` - Profile image

### Build Configuration

- `next.config.mjs`: Separates build output (`.next-dev` for dev, `.next` for prod)
- `prebuild` script auto-generates `public/resume.pdf` before `yarn build`

## Development Practices

### Code Style
- ESLint 9 + Prettier configured
- TypeScript strict mode
- 120 character line length
- Single quotes, trailing commas

### Important Notes
- Korean is the default language, English is secondary
- All user-facing text must be translatable via the resource system
- Portfolio JSON must have both `ko` and `en` keys for all translated fields
- New categories require sync across: `portfolio-categories.json`, `resource.const.ts`, icon mapping in `interactive-portfolio.tsx`, and item JSON `category` arrays
- Environment variables for contact info in `lib/consts.ts`
