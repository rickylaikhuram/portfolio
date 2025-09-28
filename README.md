# Ricky Laikhuram - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations, dynamic theming, and an elegant mobile navigation experience.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dynamic Logo**: Logo transitions from terminal icon to profile image on scroll
- **Smooth Animations**: Custom slide animations and scroll-triggered effects
- **Dark/Light Theme**: Theme toggle with system preference detection
- **Mobile Navigation**: Smooth sliding menu with native background styling
- **Interactive Components**: Hover effects, modal image viewer, and animated sections

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript


## Key Components

### Navbar
- **Dynamic Logo**: Terminal icon → Profile image transition on scroll
- **Mobile Menu**: Smooth slide-in animation from right
- **Active Section**: Highlights current section in navigation

### Hero Section
- **Profile Image**: Clickable with modal overlay
- **Fallback Support**: Graceful handling of missing images
- **Responsive Layout**: Stacked on mobile, side-by-side on desktop

### Experience Section
- **Mobile Optimized**: Responsive date badges and layout
- **Smooth Animations**: Subtle slide-up effects on scroll

### Contact Section
- **Social Links**: Direct links to all platforms
- **Email Integration**: mailto links for easy contact
- **Hover Effects**: Interactive card animations

## Installation

1. Clone the repository
```bash
git clone https://github.com/rickylaikhuram/portfolio
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Add your profile image to `/public/profile.jpg`

4. Update personal information in components:
   - Social media links in `Navbar.tsx` and `Contact.tsx`
   - Experience details in `Experience.tsx`
   - Contact email in `Contact.tsx`

5. Run development server
```bash
npm run dev
```

## Customization

### Personal Information
- Update social media URLs in the social icon components
- Change email address in the contact section
- Modify experience details and dates

### Styling
- Colors are defined in `globals.css` with CSS custom properties
- Supports automatic dark/light theme switching

## Browser Support

- Modern browsers with CSS custom properties support
- Smooth animations require browsers with CSS transitions support
- Responsive design works on all screen sizes

## Performance

- Next.js Image component for optimized image loading
- CSS animations use GPU acceleration
- Minimal JavaScript for smooth performance
- Efficient re-renders with React hooks

## Deployment

The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages (with static export)
- Cloudflare Pages (I’m personally hosting it here)

Build the project:
```bash
npm run build
```

## License

Personal portfolio website - feel free to use as inspiration for your own portfolio.

---

Built with care by Ricky Laikhuram