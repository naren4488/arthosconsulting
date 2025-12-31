# Arthos Consulting - Project Setup Plan

## Project Overview
Frontend-only project for a consulting business. Starting with a "Coming Soon" page featuring a hero section on the home page. Backend integration will be added later.

## Technology Stack

### Core Technologies
- **Vite** - Build tool and dev server (fast, modern)
- **React 18+** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible component library built on Radix UI and Tailwind

### Additional Tools
- **React Router** - For future routing needs (prepared for multi-page)
- **ESLint** - Code linting
- **Prettier** - Code formatting (optional but recommended)

## Project Structure

```
arthosconsulting/
├── public/
│   └── vite.svg (or custom favicon)
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   └── layout/          # Layout components
│   ├── pages/
│   │   └── Home.tsx         # Coming soon page with hero section
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper for shadcn)
│   ├── assets/              # Images, icons, etc.
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles + Tailwind directives
├── .eslintrc.cjs            # ESLint configuration
├── index.html               # HTML template
├── package.json
├── postcss.config.js        # PostCSS config for Tailwind
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript config for Vite
└── vite.config.ts           # Vite configuration
```

## Setup Steps

### Phase 1: Initialize Vite + React + TypeScript Project

1. **Create Vite project with React + TypeScript template**
   ```bash
   npm create vite@latest . -- --template react-ts
   ```
   OR if directory is not empty, initialize in a temp folder and move files

2. **Install dependencies**
   ```bash
   npm install
   ```

### Phase 2: Configure Tailwind CSS

1. **Install Tailwind CSS and dependencies**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Initialize Tailwind config**
   ```bash
   npx tailwindcss init -p
   ```

3. **Configure `tailwind.config.js`**
   - Add content paths for all relevant files
   - Configure theme customizations (colors, fonts for brand)

4. **Add Tailwind directives to `src/index.css`**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Phase 3: Setup shadcn/ui

1. **Install shadcn/ui dependencies**
   ```bash
   npm install class-variance-authority clsx tailwind-merge lucide-react
   ```

2. **Configure `components.json`** (shadcn/ui config file)
   - Set up paths, style, tailwind config path
   - Configure component directory structure

3. **Create utility function** (`src/lib/utils.ts`)
   - Add `cn()` helper function for conditional class names

4. **Install Radix UI primitives** (as needed when adding components)
   ```bash
   npx shadcn-ui@latest init
   ```
   This will set up the configuration interactively.

### Phase 4: Project Configuration

1. **Update `vite.config.ts`**
   - Configure path aliases (optional but recommended)
   - Add any necessary plugins

2. **Update `tsconfig.json`**
   - Add path aliases if configured in Vite
   - Ensure proper module resolution

3. **Setup ESLint** (if not already configured)
   - Configure React and TypeScript rules
   - Add Tailwind CSS plugin (optional)

### Phase 5: Create Coming Soon Page

1. **Create `src/pages/Home.tsx`**
   - Hero section component
   - Minimal, elegant design
   - Responsive layout

2. **Update `src/App.tsx`**
   - Import and render Home page
   - Basic routing setup (prepare for future pages)

3. **Add global styles** in `src/index.css`
   - Custom fonts (if any)
   - Base styles for the brand

### Phase 6: Brand Customization

1. **Define color palette** in `tailwind.config.js`
   - Primary colors for consulting business
   - Secondary colors
   - Neutral/gray scale

2. **Typography**
   - Select and configure fonts (Google Fonts or local)
   - Define font families in Tailwind config

3. **Logo/Branding assets**
   - Place in `src/assets/` or `public/`
   - Update favicon

## Dependencies

### Production Dependencies
- `react` & `react-dom`
- `react-router-dom` (for future routing)
- `lucide-react` (icons for shadcn/ui)
- `class-variance-authority` (shadcn/ui utility)
- `clsx` (conditional classnames)
- `tailwind-merge` (merge Tailwind classes)

### Development Dependencies
- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `@types/react` & `@types/react-dom`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `eslint`
- `@typescript-eslint/eslint-plugin` & `@typescript-eslint/parser`
- `eslint-plugin-react-hooks` & `eslint-plugin-react-refresh`

## Configuration Files Details

### `tailwind.config.js`
- Content paths: `["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]`
- Custom theme colors for brand
- Custom fonts
- Container settings

### `components.json` (shadcn/ui)
- Style: "default" (can customize later)
- Base color: Choose brand primary color
- CSS variables: Configured automatically
- Component directory: `src/components/ui`
- Utils directory: `src/lib/utils`

### `vite.config.ts`
- React plugin
- Path aliases (e.g., `@/` → `src/`)
- Port configuration (default: 5173)

### `tsconfig.json`
- Path aliases matching Vite config
- Strict mode enabled
- JSX: react-jsx

## Coming Soon Page Requirements

### Hero Section Features
- **Headline**: Compelling message for consulting business
- **Subheadline**: Brief description or tagline
- **CTA Button**: Optional (e.g., "Notify Me", "Get Updates")
- **Email Input**: Optional (for newsletter signup)
- **Design**: Clean, professional, modern
- **Responsive**: Mobile-first approach
- **Animations**: Subtle entrance animations (optional)

### Design Considerations
- Professional color scheme (blues, grays, or brand colors)
- Plenty of whitespace
- Clear typography hierarchy
- Center-aligned content (typical for coming soon pages)
- Optional: Background pattern or subtle gradient

## Next Steps After Setup

1. ✅ Complete project initialization
2. ✅ Configure all tools (Tailwind, shadcn/ui)
3. ✅ Create coming soon page with hero section
4. 🔄 Add additional pages (About, Services, Contact, etc.)
5. 🔄 Implement routing with React Router
6. 🔄 Add animations/transitions
7. 🔄 Optimize for production build
8. 🔄 Add backend integration (future)

## Commands Reference

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Add shadcn/ui component
npx shadcn-ui@latest add [component-name]
```

## Notes

- Start with minimal setup, add complexity as needed
- shadcn/ui components are copied into the project (not installed as npm packages)
- All components are customizable by editing the copied files
- TypeScript strict mode recommended for better code quality
- Consider adding Prettier for consistent code formatting
- Environment variables can be used for configuration (create `.env` files)

