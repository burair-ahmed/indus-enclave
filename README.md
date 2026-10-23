# Indus Enclave — Real Estate Web Application

A modern, high-performance web application built for the **Indus Enclave Housing Project**. This platform serves as the digital portal for prospective buyers and investors to explore residential plots, villa floor plans, payment schedules, location connectivity, site video updates, and direct inquiry booking.

---

## 📌 Project Overview

This project is a full-featured real estate web platform developed with modern web standards. It is engineered to provide a seamless, responsive, and visually rich browsing experience across all device form factors.

### Key Capabilities & Modules
- **Interactive Plots Explorer:** Interactive view for plot layouts, dimensions (80 sq. yds & 120 sq. yds), and a real-time surcharge calculator for premium categories (Corner, West-Open, Road-Facing, Park-Facing).
- **Villa Floor Plans & Visualizer:** Interactive architectural floor plans, specification tabs, room dimension breakdowns, and milestone schedules.
- **Media & Video Progress Portal:** YouTube-integrated video directory with categorical filtering, real-time search, and custom modal video playback.
- **Location & Landmarks Guide:** Motorway drive-time metrics, surrounding industrial landmarks, and interactive route mapping.
- **Inquiry & Lead Capture:** Fully responsive booking and contact forms with field validation.
- **Buyer FAQ System:** Categorized, expandable accordion questions covering approvals, pricing, amenities, and possession.

---

## 🛠 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) 16 (Turbopack) | React framework with App Router, server/client components, and static pre-rendering |
| **UI Library** | [React](https://react.dev/) 19 | Core library for component-based UI rendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) | Type safety, strict interfaces, and maintainable data contracts |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS styling system with custom configurations |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Declarative animations, layout transitions, spring physics, and scroll triggers |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector icon set |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) | Hardware-accelerated smooth scrolling experience |
| **Tooling & Bundler** | Turbopack / PostCSS / ESLint | Fast build cycles and automated linting |

---

## 📂 Folder Structure

```
estate-nextjs/
├── README.md                      # Developer documentation & project guide
└── nextjs/
    ├── app/                       # Next.js App Router (Pages & Layouts)
    │   ├── layout.tsx             # Root layout (fonts, providers, metadata, smooth scroll)
    │   ├── page.tsx               # Homepage (Hero, Stats, Highlights, Testimonials, CTA)
    │   ├── about/page.tsx         # About page (Mission, Core Values, Team, Background)
    │   ├── plots/page.tsx         # Plots page (Sunflower Block, Dimensions, Calculator)
    │   ├── villas/page.tsx        # Villas page (Floor plans, 3D layouts, Specifications)
    │   ├── location/page.tsx      # Location page (Exit 8 M-9, Drive times, Landmarks)
    │   ├── gallery/page.tsx       # Photo gallery with category filters & lightbox
    │   ├── media/page.tsx         # Media page (YouTube video directory & modal player)
    │   ├── inquiry/page.tsx       # Dedicated property inquiry and booking form
    │   ├── contact/page.tsx       # Contact page (Office locations, direct numbers, form)
    │   ├── faq/page.tsx           # Categorized FAQ search and accordion view
    │   └── globals.css            # Global CSS, Tailwind utilities, and root variables
    │
    ├── components/                # Reusable UI components
    │   ├── navbar.tsx             # Global sticky navigation with mobile drawer
    │   ├── footer.tsx             # Global footer with site links, contacts & social links
    │   ├── scroll-provider.tsx    # Smooth scroll (Lenis) context wrapper
    │   └── ui/                    # Base UI building blocks (inputs, buttons, badges)
    │
    ├── sections/                  # Page-specific modular section components
    │   ├── hero-sections.tsx      # Homepage primary hero banner
    │   ├── stats.tsx              # Numerical milestone counter section
    │   ├── why-choose-us.tsx      # Features & competitive advantages section
    │   ├── testimonials.tsx       # Client reviews marquee & cards
    │   ├── call-to-action.tsx     # Final conversion CTA sections
    │   ├── contact.tsx            # Interactive contact form section
    │   ├── plots/                 # Plot-specific sections (Calculator, Plans, Dimensions)
    │   ├── villas/                # Villa-specific sections (Floor plans, Features, FAQs)
    │   ├── location/              # Location-specific sections (Drive times, Map, Landmarks)
    │   ├── media/                 # Media sections (Hero, Spotlight, Video Grid, Tour Modal)
    │   ├── gallery/               # Gallery sections & visual showcases
    │   └── about/                 # About sections (Hero, Mission, Stats, Values)
    │
    ├── data/                      # Structured TypeScript data models & content sources
    │   ├── data.tsx               # Homepage items, testimonials, and feature highlights
    │   ├── plots-data.ts          # Plot dimensions, milestone payments, and extra charges
    │   ├── villas-data.ts         # Villa specifications, room sizes, and payment schedules
    │   ├── location-data.ts       # Driving durations, motorway exit info, and landmark lists
    │   ├── media-data.ts          # Video library, YouTube parser helper, and categories
    │   └── faq-data.ts            # FAQ items, question categories, and highlight tags
    │
    ├── public/                    # Static public assets (Images, SVGs, Layout schematics)
    │   ├── 80_yards_plot.jpg      # Official 80 sq. yds plot dimension layout map
    │   ├── 120_yards_plot...jpeg  # Official 120 sq. yds plot dimension layout map
    │   ├── logo-1.webp            # Primary brand mark
    │   └── assets/                # Architectural renders, icons, and hero photography
    │
    ├── next.config.ts             # Next.js configuration (Remote image domains, etc.)
    ├── tsconfig.json              # TypeScript compiler configuration & path aliases (`@/*`)
    ├── postcss.config.mjs         # PostCSS plugins configuration
    ├── eslint.config.mjs          # ESLint code style and quality rules
    └── package.json               # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js:** v18.18.0 or later (Node 20+ recommended)
- **Package Manager:** `npm` (or `pnpm` / `yarn`)

### 2. Installation
Navigate into the application folder and install project dependencies:
```bash
cd nextjs
npm install
```

### 3. Running Development Server
Start the local development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Production Build
To create a production-optimized build:
```bash
npm run build
```
To test and preview the production build locally:
```bash
npm run start
```

### 5. Code Linting
Run the linter to verify code formatting and type safety:
```bash
npm run lint
```

---

## ⚙️ Engineering & Architecture Patterns

- **Path Aliasing:** Imports use the `@/*` alias mapped directly to `nextjs/*` (e.g. `@/components/*`, `@/data/*`, `@/sections/*`).
- **Data-Driven Architecture:** All dynamic information (pricing, plot dimensions, FAQs, media items, landmark listings) is decoupled from UI presentation and maintained in dedicated type-safe modules under `nextjs/data/`.
- **Client vs Server Components:** Server-rendered shell layouts combined with selective `"use client"` directives for interactive modules (interactive calculator, modals, Framer Motion animations, tab switchers).
- **Image Optimization:** Utilizes `next/image` with responsive `sizes`, WebP/AVIF compression, and prioritized loading for hero visual assets.
