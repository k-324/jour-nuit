# JOUR&NUIT — Restaurant Website

A production-ready static website built with Next.js 15 (App Router), Tailwind CSS, and Google Fonts.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Styling**: Tailwind CSS 3
- **Fonts**: Cormorant Garamond (display), Jost (body), DM Mono (labels)
- **Deployment**: Vercel (zero-config)

---

## Local Development

### Prerequisites

- Node.js 18.17 or higher
- npm 9+

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Preview

```bash
# Build static output
npm run build

# Preview the build locally
npx serve out
```

The static export is generated in the `/out` directory.

---

## Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (first time: follow the prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**

No environment variables needed. Zero configuration required.

---

## Project Structure

```
jour-nuit/
├── app/
│   ├── layout.tsx          # Root layout (fonts, Navbar, Footer)
│   ├── globals.css         # Global styles + CSS utilities
│   ├── page.tsx            # Home page
│   ├── menu/
│   │   └── page.tsx        # Menu page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── visit/
│       └── page.tsx        # Visit page
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Site footer
│   ├── SectionLabel.tsx    # Reusable section label
│   ├── Hero.tsx            # Home hero section
│   ├── AboutPreview.tsx    # Home about preview
│   ├── DiningSection.tsx   # Home hours/lifestyle section
│   ├── MenuHighlights.tsx  # Home menu categories preview
│   ├── SpaceLifestyle.tsx  # Home space section
│   ├── LocationPreview.tsx # Home map/location preview
│   └── ContactSection.tsx  # Home contact section
├── public/                 # Static assets (add images here)
├── next.config.ts          # Static export config
├── tailwind.config.ts      # Tailwind theme config
├── tsconfig.json
└── package.json
```

---

## Customization

### Colors
Edit `tailwind.config.ts` and `globals.css` (`:root` variables):
- `--cream: #FFFBF2` — Background
- `--noir: #000000` — Text
- `--rouge: #6F0000` — Accent

### Fonts
Change Google Fonts in `app/layout.tsx`. Update `tailwind.config.ts` font families to match.

### Real Address & Map
1. Replace address placeholders in `app/visit/page.tsx` and `components/LocationPreview.tsx`
2. For real map: add a Google Maps embed iframe or use a library like `react-leaflet`

### Real Images
Add images to `/public/` and replace `img-placeholder` divs with Next.js `<Image />` components.

### Real Menu Data
Edit the `menuData` array in `app/menu/page.tsx` and `components/MenuHighlights.tsx`.

---

## Brand Colors Reference

| Token | Value | Usage |
|-------|-------|-------|
| Cream | `#FFFBF2` | Background |
| Noir | `#000000` | Text |
| Rouge | `#6F0000` | Buttons, links, highlights |
