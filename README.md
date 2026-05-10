# Olaomo Favour — Portfolio Site

A clean, multi-page personal portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, highlights, skills, CTA |
| `/about` | About — bio, meta info, interests |
| `/projects` | Projects — filterable card grid (All / Featured / Other) |
| `/research` | Research — publications + research interests |
| `/certifications` | Certifications & Trainings — grid with stats banner |
| `/contact` | Contact — 4 connect cards with modals, social links, support |

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + inline styles (design tokens via CSS variables)
- **Icons**: Lucide React
- **Fonts**: Syne (headings) · DM Sans (body) · JetBrains Mono (code/labels)

## Project Structure

```
olaomo-favour/
├── app/
│   ├── layout.tsx              # Root layout — Navbar + Footer
│   ├── globals.css             # Design tokens, fonts, animations
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── projects/page.tsx       # Client component — filter tabs
│   ├── research/page.tsx
│   ├── certifications/page.tsx
│   └── contact/page.tsx        # Client component — 4 modals
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with active link detection
│   │   └── Footer.tsx
│   └── ui/
│       ├── SectionHeader.tsx   # Reusable page section header
│       ├── Modal.tsx           # Accessible modal (ESC + click-outside)
│       └── FormFields.tsx      # FormInput, FormTextarea, FormSelect, SubmitButton
├── data/
│   ├── projects.ts             # Projects data
│   ├── certifications.ts       # Certifications data
│   └── research.ts             # Publications data
└── public/
    └── cv.pdf                  # (Add your CV here)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- **Personal info**: Update `app/page.tsx`, `app/about/page.tsx`
- **Projects**: Edit `data/projects.ts`
- **Certifications**: Edit `data/certifications.ts`
- **Publications**: Edit `data/research.ts`
- **CV**: Place your PDF at `public/cv.pdf`
- **Photo**: Replace the emoji placeholder in `app/page.tsx` and `app/about/page.tsx` with a `<Image>` component pointing to your photo in `/public`
- **Social links**: Update hrefs in `components/layout/Footer.tsx` and `app/contact/page.tsx`
- **Colors**: Adjust `--accent` in `app/globals.css`

## Deployment

This project is configured for **static export** (`output: 'export'`) and deploys to:
- **Vercel**: `vercel deploy`
- **Netlify**: drag-and-drop the `out/` folder
- **GitHub Pages**: push the `out/` folder

## License

MIT — free to use and modify.
