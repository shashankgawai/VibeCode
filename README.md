# Advik Embroidery Studio

A luxury handcrafted Aari embroidery business website built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎨 Design & Branding

- **Color Palette**: Sage & Cream theme
  - Primary Green: `oklch(0.55 0.14 165)`
  - Background Cream: `oklch(0.96 0.02 80)`
- **Typography**: 
  - Playfair Display (serif) for headings
  - Geist (sans-serif) for body text
- **Aesthetic**: Luxury, modern, high-end bridal couture focus

## 🚀 Features

- ✨ Smooth scrolling with Lenis
- 🎭 Custom animations (fade-in-up, float, item-reveal)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible (WCAG 2.1 AA compliant)
- 🔍 SEO optimized with proper metadata
- 💬 WhatsApp floating contact button
- 🖼️ Bento-style gallery with lightbox
- 📊 Client testimonials section
- 🎯 Sticky navigation with scroll effects

## 📁 Project Structure

```
app/
├── components/
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scrolling
│   ├── Navigation.tsx            # Sticky nav with scroll effects
│   ├── Hero.tsx                  # Hero section
│   ├── FeaturedCollections.tsx   # Collections showcase
│   ├── Services.tsx              # Services breakdown
│   ├── Gallery.tsx               # Bento-style gallery
│   ├── Testimonials.tsx          # Client testimonials
│   ├── Footer.tsx                # Footer with contact info
│   └── WhatsAppButton.tsx        # Floating WhatsApp CTA
├── layout.tsx                    # Root layout
├── page.tsx                      # Home page
└── globals.css                   # Design tokens & animations
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Typography**: Next Font (Playfair Display, Geist)
- **Smooth Scrolling**: Lenis 1.1.17
- **Language**: TypeScript

## 🏃‍♂️ Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🎯 Key Sections

1. **Hero** - High-impact hero with luxury embroidery showcase
2. **Featured Collections** - Spotlight on bridal collections and Aari techniques
3. **Services** - Custom Couture, Bridal Embroidery, Festive Wear, Bespoke Services
4. **Gallery** - Responsive bento-style gallery with 8+ items
5. **Testimonials** - Social proof from luxury clients
6. **Footer** - Contact info, social links, quick navigation
7. **WhatsApp Button** - Fixed floating contact button

## 🎨 Custom Animations

The project includes custom keyframe animations:
- `animate-fade-in-up` - Elements fade in while sliding up
- `animate-float` - Subtle floating motion for images
- `animate-item-reveal` - Staggered reveal animations
- Animation delays: 100ms to 600ms for staggered effects

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg (Tailwind defaults)
- Hamburger menu for mobile navigation
- Optimized touch targets for mobile

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy

## 🔧 Configuration

### Colors (globals.css)
```css
--sage-green: oklch(0.55 0.14 165)
--cream-bg: oklch(0.96 0.02 80)
--sage-dark: oklch(0.45 0.14 165)
--sage-light: oklch(0.65 0.14 165)
--accent-gold: oklch(0.7 0.12 75)
```

### Lenis Settings
```typescript
duration: 1.2
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
smoothWheel: true
```

## 📞 Contact Configuration

Update WhatsApp number in `app/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = '919876543210'; // Replace with actual number
```

## 📄 License

Private and confidential - All rights reserved © 2025 Advik Embroidery Studio
