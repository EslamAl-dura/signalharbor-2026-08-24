# SignalHarbor

SignalHarbor is a release-readiness cockpit for teams who want an explainable decision before pressing deploy.

## Features

- Readiness score based on change risk, test confidence, rollback time, and service health
- Validated release-signal editor using Zod
- Dashboard and settings routes powered by TanStack Router
- Light and dark themes
- English and Arabic localization with dynamic RTL support
- TailwindCSS and reusable shadcn-style UI primitives

## Run locally

```bash
npm install
npm run dev
```

The production build is created with `npm run build`.