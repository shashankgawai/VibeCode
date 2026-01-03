# Advik Embroidery Studio

A modern luxury handcrafted Aari embroidery business website built with Next.js 16, React 19, and Tailwind CSS 4.

## 🎨 Design & Branding

- **Color Palette**: Modern Blue & Gold theme
  - Royal Blue: `oklch(0.45 0.18 255)`
  - Luxury Blue: `oklch(0.35 0.15 250)`
  - Accent Gold: `oklch(0.72 0.16 75)`
  - Light Blue: `oklch(0.88 0.05 250)`
- **Typography**: 
  - Playfair Display (serif) for headings
  - Geist (sans-serif) for body text
- **Aesthetic**: Modern luxury, high-end bridal couture with sophisticated blue and gold accents

## 🚀 Features

- ✨ **Smooth Scrolling** with Lenis (optimized performance)
- 🎭 **Rich Animations**: fade-in-up, float, item-reveal, slide-in-left, scale-in, shimmer effects
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- ♿ **Accessible** (WCAG 2.1 AA compliant)
- 🔍 **SEO Optimized** with proper metadata
- 💬 **WhatsApp Integration** - floating contact button + form submission
- 🖼️ **Bento-style Gallery** with lightbox
- 📊 **Stats Section** with animated counters
- 🔄 **Process Timeline** showing the creation journey
- 📝 **Contact Form** with WhatsApp integration
- 🎯 **Sticky Navigation** with scroll effects and gradient underlines
- 💎 **Gradient Effects** throughout for premium feel

## 📁 Project Structure

```
app/
├── components/
│   ├── SmoothScrollProvider.tsx  # Lenis smooth scrolling (optimized)
│   ├── Navigation.tsx            # Sticky nav with modern effects
│   ├── Hero.tsx                  # Premium hero with stats
│   ├── Stats.tsx                 # Animated statistics showcase
│   ├── FeaturedCollections.tsx   # Collections with hover effects
│   ├── Services.tsx              # Services breakdown
│   ├── Process.tsx               # Timeline-based process section
│   ├── Gallery.tsx               # Bento-style gallery
│   ├── Testimonials.tsx          # Client testimonials
│   ├── CTA.tsx                   # Contact form with WhatsApp
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

1. **Hero** - High-impact hero with premium stats (500+ clients, 15+ years, 100% handcrafted)
2. **Stats** - Animated stats section with blue gradient background
3. **Featured Collections** - Bridal Elegance, Royal Zardozi, Contemporary Fusion
4. **Services** - Custom Couture, Bridal Embroidery, Festive Wear, Bespoke Services
5. **Process** - 5-step timeline showing the creation process
6. **Gallery** - Responsive bento-style gallery with 8+ items
7. **Testimonials** - Social proof from luxury clients
8. **CTA** - Contact form with WhatsApp integration
9. **Footer** - Contact info, social links, quick navigation
10. **WhatsApp Button** - Fixed floating contact button

## 🎨 Custom Animations

The project includes advanced keyframe animations:
- `animate-fade-in-up` - Elements fade in while sliding up
- `animate-float` - Subtle floating motion for images
- `animate-item-reveal` - Staggered reveal animations
- `animate-slide-in-left` - Slide in from left
- `animate-scale-in` - Scale and fade in
- `gold-shimmer` - Shimmer effect for premium elements
- Animation delays: 100ms to 800ms for staggered effects

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile navigation
- Optimized touch targets for mobile
- Responsive grid layouts

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy
- Focus states on all interactive elements

## 🔧 Configuration

### Colors (globals.css)
```css
--royal-blue: oklch(0.45 0.18 255)
--luxury-blue: oklch(0.35 0.15 250)
--light-blue: oklch(0.88 0.05 250)
--accent-gold: oklch(0.72 0.16 75)
--gold-light: oklch(0.82 0.12 75)
```

### Lenis Settings (Optimized)
```typescript
duration: 1.5
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
orientation: 'vertical'
smoothWheel: true
wheelMultiplier: 1
```

## 📞 Contact Configuration

Update WhatsApp number in these files:
- `app/components/WhatsAppButton.tsx`
- `app/components/CTA.tsx`

```typescript
const phoneNumber = '919876543210'; // Replace with actual number
```

## 🎁 New Features Added

### 1. Enhanced Color Scheme
- Modern blue and gold palette for luxury feel
- Gradient backgrounds and text effects
- Smooth color transitions

### 2. Stats Section
- Animated counter-style stats
- Blue gradient background
- Icon-based visual hierarchy

### 3. Process Timeline
- 5-step creation process
- Alternating layout for visual interest
- Timeline connector line
- Hover effects on cards

### 4. Contact Form
- Integrated with WhatsApp
- Form validation
- Beautiful glassmorphism design
- Sends message directly to WhatsApp

### 5. Improved Animations
- More animation types
- Better performance
- Staggered reveals
- Smooth transitions throughout

### 6. Enhanced Navigation
- Gradient underlines on hover
- "Get Quote" CTA button
- Improved mobile menu
- Better scroll effects

## 🚀 Performance

- Optimized Lenis configuration for smooth scrolling
- Lazy-loaded animations with Intersection Observer
- Efficient React hooks usage
- Optimized build output
- No layout shifts

## 📄 License

Private and confidential - All rights reserved © 2025 Advik Embroidery Studio
