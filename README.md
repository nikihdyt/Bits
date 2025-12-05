# Bits Landing Page

Landing page website for Bits iOS app built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

This creates a static export in the `out/` directory that can be deployed to any static hosting service.

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy
│   └── support/
│       └── page.tsx        # Support/FAQ
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Hero.tsx           # Hero section
│   ├── Stats.tsx          # Stats section
│   ├── Features.tsx       # Features grid
│   ├── EnergyStates.tsx   # 4 energy states
│   ├── HowItWorks.tsx     # 5-step guide
│   ├── Testimonials.tsx   # User testimonials
│   ├── CTA.tsx            # Call to action
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design System

The design matches the iOS app exactly:

### Colors

- **Peak** (Teal): `#73ADA6` - High energy state
- **Steady** (Blue-Grey): `#6B7D97` - Normal energy state
- **Attention** (Tan): `#C2A678` - Low energy state
- **Recovery** (Rose): `#B3858A` - Overload state

### Components

- Cards: `rounded-3xl` with subtle shadows
- Buttons: `rounded-xl` with semibold text
- Gradients: 135deg linear gradients matching app
- Typography: SF Pro Display / System UI fonts

## 📄 Pages

### Home (`/`)
- Hero section with CTA
- Stats overview
- Features grid
- 4 Energy states showcase
- How it works (5 steps)
- Testimonials
- Download CTA
- Footer

### Privacy (`/privacy`)
- Complete privacy policy
- Required for App Store submission
- Details on HRV data usage

### Support (`/support`)
- FAQ section (10 questions)
- Contact information
- Help resources

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm run build
```

Deploy the `out/` directory to Vercel, Netlify, or any static hosting.

### Custom Domain

Update `next.config.js` if you need a custom domain configuration.

## 📱 Required for App Store

This website provides the required URLs for App Store submission:

- **Support URL**: `https://yourdomain.com/support`
- **Privacy Policy URL**: `https://yourdomain.com/privacy`
- **Marketing URL**: `https://yourdomain.com`

## ✅ SEO

The site includes:
- Meta tags (title, description, keywords)
- Open Graph tags
- Semantic HTML
- Mobile responsive
- Fast loading (static export)

## 🔧 Customization

To customize:

1. **Update brand colors**: Edit `tailwind.config.ts`
2. **Change content**: Edit component files in `components/`
3. **Update metadata**: Edit `app/layout.tsx`
4. **Add pages**: Create new folders in `app/`

## 📝 License

All rights reserved © 2025 Bits
