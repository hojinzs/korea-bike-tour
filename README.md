# Korea Bike Tour Guide

A multilingual guide for foreign cyclists exploring Korea — covering routes, campsites, accommodation, and practical tips for an unforgettable bike tour.

## Monorepo Structure

```
korea-bike-tour/
├── apps/
│   └── web/                  # Next.js 15 main web app
├── packages/
│   ├── ui/                   # Shared UI components (Button, Card)
│   └── typescript-config/    # Shared tsconfig
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

## Tech Stack

- **Turborepo** — monorepo build system
- **pnpm workspaces** — package management
- **Next.js 15** (App Router) — web framework
- **Tailwind CSS v4** — styling
- **TypeScript** — type safety
- **next-intl** — i18n (EN / KO, extensible to JA, ZH)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Development Commands

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `pnpm dev`        | Start all apps in dev mode   |
| `pnpm build`      | Build all apps and packages  |
| `pnpm lint`       | Lint all workspaces          |
| `pnpm type-check` | Type-check all workspaces    |

## Locales

Default locale is `en`. Switch locale by setting the `locale` cookie to `en` or `ko`.

More locales (Japanese, Chinese) can be added by creating the corresponding file in `apps/web/messages/`.
