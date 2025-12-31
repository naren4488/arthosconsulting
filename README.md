# Arthos Consulting

A modern frontend application for Arthos Consulting built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Status

Currently in development - Coming Soon page with hero section.

## Tech Stack

- **Vite** - Fast build tool and development server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library
- **React Router** - Client-side routing (prepared for multi-page)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

### Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components (will be added as needed)
│   └── layout/          # Layout components
├── pages/
│   └── Home.tsx         # Coming soon page with hero section
├── lib/
│   └── utils.ts         # Utility functions (cn helper for shadcn)
├── assets/              # Images, icons, etc.
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles + Tailwind directives
```

## Adding shadcn/ui Components

To add shadcn/ui components:
```bash
npx shadcn-ui@latest add [component-name]
```

For example:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
```

Components will be added to `src/components/ui/` and can be customized directly.

## Path Aliases

The project uses path aliases for cleaner imports:
- `@/` → `src/`

Example:
```typescript
import { cn } from '@/lib/utils'
import Home from '@/pages/Home'
```

## Styling

- Tailwind CSS for utility-first styling
- CSS variables for theming (defined in `src/index.css`)
- shadcn/ui components use CSS variables for easy theming
- Dark mode support via CSS variables

## Next Steps

- [ ] Add more pages (About, Services, Contact, etc.)
- [ ] Implement routing for multiple pages
- [ ] Add animations and transitions
- [ ] Backend integration (future)

## License

Private project - All rights reserved

