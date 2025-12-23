# NeuroNova Website

A production-ready, modern website for NeuroNova - a 3D therapeutic gaming platform that supports calm, focus, and skill-building through structured, gentle interactive modules.

## Tech Stack

- **React** + **Vite** - Fast development and build tooling
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **lucide-react** - Beautiful icons
- **framer-motion** - Smooth animations
- **React Router** - Client-side routing

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation bar
│   │   ├── Footer.tsx          # Site footer
│   │   ├── ScrollToTop.tsx     # Scroll to top button
│   │   └── ScrollProgress.tsx  # Scroll progress indicator
│   ├── team/
│   │   ├── TeamCard.tsx        # Team member card component
│   │   ├── TeamFilters.tsx     # Search, filter, and sort controls
│   │   └── TeamDialog.tsx      # Team member detail dialog
│   └── ui/                     # shadcn/ui components
├── data/
│   ├── team.ts                 # Team members data (EDIT THIS)
│   └── modules.ts                # Modules data
├── lib/
│   └── utils.ts               # Utility functions
├── pages/
│   ├── Home.tsx               # Home page
│   ├── About.tsx              # About page
│   ├── Modules.tsx            # Modules page
│   ├── Team.tsx               # Team directory page
│   └── Contact.tsx            # Contact page
├── App.tsx                    # Main app component with routing
└── main.tsx                   # Entry point
```

## Editing Content

### Team Members

**Location:** `src/data/team.ts`

To edit team members:

1. Open `src/data/team.ts`
2. Replace placeholder data with real information:
   - `name`: Full name
   - `role`: Exact position (e.g., "Lead Developer", "Therapy Advisor")
   - `team`: One of: "Engineering" | "Design" | "Therapy" | "Research" | "Operations" | "Partnerships"
   - `bio`: 2-3 line biography
   - `skills`: Array of 5-8 skills (strings)
   - `links`: Array of link objects with `label` and `url`
   - `image`: Path to image (e.g., "/team/name.jpg") or leave undefined for initials avatar

3. **Adding Photos:**
   - Place team member photos in `public/team/`
   - Name files consistently (e.g., `jane-doe.jpg`)
   - Set `image` property to `/team/FILENAME.jpg`
   - If no image is provided, a gradient initials avatar will appear automatically

### Contact Information

**Locations:**
- Footer: `src/components/layout/Footer.tsx`
- Contact page: `src/pages/Contact.tsx`

Update:
- Email addresses
- Social media links (LinkedIn, Instagram, GitHub, YouTube)

### Modules

**Location:** `src/data/modules.ts`

Edit module information:
- Goal
- How it works
- What it trains

## Features

- ✅ Fully responsive (mobile-first design)
- ✅ Accessible (keyboard navigation, ARIA labels, semantic HTML)
- ✅ Fast and clean (no console errors)
- ✅ Premium design with consistent styling
- ✅ Team directory with search, filter, and sort
- ✅ Smooth animations with framer-motion
- ✅ Scroll progress indicator
- ✅ Scroll to top button

## Design System

- **Background:** Deep navy / near-black (`slate-950`)
- **Primary Accent:** Teal/cyan (`cyan-400/500`)
- **Secondary Accent:** Violet/lavender (`violet-400/500`)
- **Highlight:** Amber/yellow (`amber-400/500`) - used sparingly
- **Cards:** Glassy effect with backdrop blur
- **Borders:** Rounded-2xl with subtle shadows

## Browser Support

Modern browsers that support:
- ES6+
- CSS Grid and Flexbox
- CSS Custom Properties

## License

All rights reserved © 2024 NeuroNova

