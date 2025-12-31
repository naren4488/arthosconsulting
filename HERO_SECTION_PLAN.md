# Hero Section Implementation Plan

## Design Overview

A professional, dark-themed hero section with:
- Top navigation bar with contact information
- Main navigation with logo and menu
- Two-column hero layout (content left, visuals/stats right)
- Dark green background with grid pattern
- Orange accent color for CTAs and highlights
- Responsive design (mobile-first approach)

## Component Structure

### 1. Top Contact Bar Component
**File:** `src/components/layout/TopContactBar.tsx`

**Elements:**
- Phone icon + phone number: `+1 (234) 567-890`
- Email icon + email: `hello@arthos.consulting`
- Location icon + location: `Business District, Your City`

**Layout:** Horizontal flex layout, space-between
**Responsive:** Stack vertically on mobile, hide on very small screens (optional)

---

### 2. Main Navigation Component
**File:** `src/components/layout/MainNavigation.tsx`

**Elements:**
- **Left:** Logo badge - "Arthos" (bold, white text) in white background pill
- **Center:** Navigation menu links (white text)
  - Home, Services, Clients, A³ Model, Testimonials, About
- **Right:** "Get Started" button (orange, rounded)

**Layout:** Horizontal flex layout with three sections
**Responsive:** 
- Desktop: Full horizontal layout
- Tablet: Logo + hamburger menu
- Mobile: Hamburger menu only

---

### 3. Hero Section Component
**File:** `src/pages/Home.tsx` (or `src/components/sections/HeroSection.tsx`)

#### Left Column - Content Area
**File:** `src/components/sections/HeroContent.tsx`

**Elements:**
1. **Tagline Badge** (Orange pill with white text)
   - Text: `#1 Consulting Partner for SMBs`
   - Orange background, rounded-full
   
2. **Main Heading** (Two-line heading)
   - Line 1: "From Strategy" (white, large, bold)
   - Line 2: "to Scalable Growth" (orange, large, bold)
   
3. **Description Text** (White paragraph)
   - Text: "We help businesses start right, scale smart, and grow profitably. Your partner in building businesses that last."
   
4. **CTA Buttons** (Two buttons side by side)
   - Primary: "Start Your Journey →" (orange background, white text, arrow icon)
   - Secondary: "Our Services" (white background, gray text)

#### Right Column - Visuals & Stats
**File:** `src/components/sections/HeroVisuals.tsx`

**Elements:**
1. **Background Graphics**
   - Abstract overlapping circular shapes (dark greens, browns)
   - Grid pattern overlay
   - Positioned absolutely

2. **Central A³ Framework Element**
   - Large "A³" text (white, bold)
   - "Framework" text below (smaller, white)
   - Centered in the circular graphics

3. **Three Stat Cards** (White cards with borders, orange icons)
   - **Top Card:** 
     - Icon: Person with gear (lucide-react: UserCog or similar)
     - Number: "500+"
     - Label: "Projects Delivered"
   
   - **Middle Right Card:**
     - Icon: Star (lucide-react: Star)
     - Number: "98%"
     - Label: "Client Satisfaction"
   
   - **Bottom Card:**
     - Icon: Trending Up/Line Chart (lucide-react: TrendingUp)
     - Number: "12+"
     - Label: "Years Experience"

**Layout:** Two-column grid on desktop, stacked on mobile

---

## Color Palette

Based on the design:

```css
/* Primary Colors */
--background-dark-green: #0f2e1f or similar (dark green base)
--nav-green: #1a3d2a (slightly lighter green for nav)
--accent-orange: #ff6b35 or #ff7f50 (orange for CTAs, highlights)
--white: #ffffff
--gray-light: #f5f5f5 or #e5e5e5 (for secondary button text)

/* Text Colors */
--text-primary: #ffffff (white)
--text-secondary: #9ca3af or #6b7280 (gray for secondary text)
--text-dark: #1f2937 or #111827 (black/dark for cards)

/* Card Colors */
--card-bg: #ffffff
--card-border: #e5e7eb or #d1d5db (light gray)
```

**Tailwind Custom Colors to Add:**
- Custom dark green shades
- Orange accent color
- Ensure these work with the existing CSS variables

---

## Typography

**Font Family:** Sans-serif (Inter, Poppins, or system font stack)

**Sizes:**
- Hero Heading Line 1 & 2: `text-5xl md:text-6xl lg:text-7xl` (very large, bold)
- Description: `text-lg md:text-xl` (readable paragraph)
- Tagline Badge: `text-sm md:text-base`
- Stat Numbers: `text-3xl md:text-4xl` (bold)
- Stat Labels: `text-sm md:text-base`
- Navigation Links: `text-base`
- Contact Bar: `text-sm`

**Weights:**
- Headings: `font-bold` (700)
- Body: `font-normal` (400)
- Stats: `font-bold` (700)
- Navigation: `font-medium` (500)

---

## Layout & Spacing

### Desktop (1024px+)
- Hero section: 2-column grid (50/50 split)
- Padding: `py-16 md:py-20 lg:py-24`
- Container: max-width with horizontal padding
- Stat cards: Absolute positioning within right column
- A³ Framework: Centered in circular graphics

### Tablet (768px - 1023px)
- Hero section: 2-column grid (slightly adjusted proportions)
- Navigation: Hamburger menu
- Stat cards: Repositioned, still visible
- Slightly reduced font sizes

### Mobile (< 768px)
- Hero section: Single column, stacked
- Left content first, then visuals below
- Stat cards: Grid layout (3 columns or stacked)
- Navigation: Hamburger menu
- Contact bar: Stacked or hidden
- Reduced padding and font sizes

---

## Icons Needed (from lucide-react)

- Phone: `Phone`
- Email: `Mail`
- Location: `MapPin`
- Arrow (CTA): `ArrowRight`
- Person with gear: `UserCog` or `Users` + `Settings`
- Star: `Star`
- Trending/Chart: `TrendingUp` or `BarChart3`

---

## Technical Implementation Steps

### Step 1: Update Tailwind Config
- Add custom dark green colors
- Add custom orange accent color
- Configure grid pattern (if using CSS, or SVG background)

### Step 2: Create Layout Components
1. `TopContactBar.tsx` - Top contact information bar
2. `MainNavigation.tsx` - Main navigation with logo and menu
3. Add mobile hamburger menu functionality (future enhancement)

### Step 3: Create Hero Section Components
1. `HeroContent.tsx` - Left column content (tagline, heading, description, buttons)
2. `HeroVisuals.tsx` - Right column (graphics, stats, A³ element)
3. `StatCard.tsx` - Reusable stat card component

### Step 4: Background Graphics
- Create SVG pattern for grid overlay (or use CSS)
- Create circular shape graphics (SVG or CSS gradients)
- Position absolutely within right column

### Step 5: Integrate Components
- Update `Home.tsx` to include all components
- Ensure proper layout and spacing
- Test responsive breakpoints

### Step 6: Styling & Polish
- Fine-tune colors to match design exactly
- Adjust spacing and typography
- Add hover states for buttons
- Ensure proper contrast ratios

### Step 7: Responsive Testing
- Test on mobile (375px, 414px)
- Test on tablet (768px, 1024px)
- Test on desktop (1280px, 1920px)
- Adjust breakpoints as needed

---

## Responsive Breakpoints

```javascript
// Tailwind default breakpoints (we'll use these)
sm: '640px',   // Small devices
md: '768px',   // Tablets
lg: '1024px',  // Small laptops
xl: '1280px',  // Desktops
2xl: '1536px'  // Large desktops
```

**Specific Breakpoints for This Design:**
- Mobile: < 768px (stacked layout)
- Tablet: 768px - 1023px (adjusted 2-column)
- Desktop: 1024px+ (full 2-column layout)

---

## Component Dependencies

**shadcn/ui Components to Add:**
- `Button` - For CTAs and navigation button
- `Badge` - For tagline badge (or custom implementation)
- Navigation menu component (if needed)

**Install shadcn/ui button:**
```bash
npx shadcn-ui@latest add button
```

---

## Animation Considerations (Optional - Future)

- Fade-in animations on scroll
- Hover effects on buttons
- Subtle background animations
- Stat counter animations

---

## File Structure After Implementation

```
src/
├── components/
│   ├── layout/
│   │   ├── TopContactBar.tsx
│   │   ├── MainNavigation.tsx
│   │   └── MobileMenu.tsx (future)
│   ├── sections/
│   │   ├── HeroSection.tsx (main container)
│   │   ├── HeroContent.tsx
│   │   ├── HeroVisuals.tsx
│   │   └── StatCard.tsx
│   └── ui/
│       └── button.tsx (from shadcn/ui)
├── pages/
│   └── Home.tsx (updated to use HeroSection)
└── assets/
    └── (any SVG graphics if needed)
```

---

## Next Steps Order

1. ✅ Update Tailwind config with custom colors
2. ✅ Add shadcn/ui Button component
3. ✅ Create TopContactBar component
4. ✅ Create MainNavigation component
5. ✅ Create StatCard component
6. ✅ Create HeroContent component
7. ✅ Create HeroVisuals component (with background graphics)
8. ✅ Create HeroSection container component
9. ✅ Update Home.tsx to use new components
10. ✅ Test and refine responsive behavior
11. ✅ Polish styling and spacing

---

## Notes

- Start with mobile-first approach
- Use CSS Grid and Flexbox for layouts
- Consider using CSS variables for easy theme changes
- Keep components modular and reusable
- Use TypeScript for type safety
- Ensure accessibility (ARIA labels, semantic HTML)
- Test with screen readers

