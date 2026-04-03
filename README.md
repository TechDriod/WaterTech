# 💧 WaterTech

> **Pioneering the future of water technology** — a futuristic, modern homepage built with React + Tailwind CSS.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

---

## ✨ Features

- **Hero section** — bold headline, stats, and animated water-orb visual
- **Features / Services** — six glassmorphism cards covering purification, sustainability, AI monitoring, and more
- **Technology highlights** — concentric-ring animation, proprietary tech descriptions, and a metrics bar
- **Testimonials** — six customer stories with star ratings and reviewer info
- **Newsletter** — accessible email-subscription form with success state
- **Footer** — logo, navigation columns, social links, and legal copy
- **Responsive** — fully adapted for mobile, tablet, and desktop viewports
- **Dark-mode first** — deep ocean colour palette with blue / teal gradients and glassmorphism effects
- **Smooth animations** — float, pulse, spin, slide-up, and glow effects via Tailwind custom keyframes
- **Accessible** — semantic HTML, ARIA labels, focus rings, and `sr-only` elements throughout

---

## 🗂️ Project Structure

```
WaterTech/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Fixed nav with scroll-aware background
│   │   ├── Hero.jsx        # Hero section with CTA and animated orb
│   │   ├── Features.jsx    # Services showcase (uses FeatureCard)
│   │   ├── FeatureCard.jsx # Reusable feature / service card
│   │   ├── Technology.jsx  # Tech highlights with ring animation
│   │   ├── Testimonials.jsx# Customer stories (uses TestimonialCard)
│   │   ├── TestimonialCard.jsx # Reusable testimonial card
│   │   ├── Newsletter.jsx  # Email subscription form
│   │   └── Footer.jsx      # Site footer
│   ├── App.jsx             # Root component — composes all sections
│   ├── main.jsx            # React DOM entry point
│   └── index.css           # Global styles + Tailwind directives
├── index.html              # HTML shell
├── package.json
├── vite.config.js
├── tailwind.config.js      # Custom colours, animations, shadows
├── postcss.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/TechDriod/WaterTech.git
cd WaterTech

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command           | Description                              |
|-------------------|------------------------------------------|
| `npm run dev`     | Start the Vite development server        |
| `npm run build`   | Production build → `dist/`              |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint across all source files       |

---

## 🎨 Design System

| Token              | Value                                         |
|--------------------|-----------------------------------------------|
| Primary palette    | `water-*` — rich blues (50 → 950)             |
| Accent palette     | `teal-*` — blue-greens (50 → 950)             |
| Background         | `ocean-dark` `#0a192f` / `ocean-mid` `#112240` |
| Glass card         | `bg-white/5 backdrop-blur-md border-white/10` |
| Gradient text      | `from-water-400 to-teal-400`                  |
| Primary button     | `from-water-600 to-teal-500` pill shape       |
| Custom animations  | `float`, `glow`, `slide-up`, `spin-slow`      |

---

## 🏗️ Tech Stack

| Library         | Version | Purpose                              |
|-----------------|---------|--------------------------------------|
| React           | 18      | UI component framework               |
| Vite            | 4       | Build tool & dev server              |
| Tailwind CSS    | 3       | Utility-first styling                |
| PostCSS         | 8       | CSS transform pipeline               |
| Autoprefixer    | 10      | Cross-browser CSS prefixes           |
| ESLint          | 8       | Linting                              |

---

## 📄 License

MIT © WaterTech Inc.