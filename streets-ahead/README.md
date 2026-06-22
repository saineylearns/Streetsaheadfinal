# Streets Ahead Festival Archive

A vibrant, modern archive website for the Streets Ahead Festival celebrating street culture, music, art, and community.

## 🎨 Design Features

- **Vibrant & Bold Aesthetic** - Festival energy with neon color palette
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Interactive Components** - Smooth animations and engaging hover effects
- **Modern Stack** - Built with Next.js 15, React 19, and Tailwind CSS 4
- **Accessible** - Semantic HTML and WCAG-compliant design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

### Production Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
streets-ahead/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Favicon
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Portfolio.tsx       # Festival gallery grid
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Key Sections

1. **Navigation** - Fixed header with responsive mobile menu
2. **Hero** - Eye-catching landing section with animated background
3. **Portfolio** - Masonry grid showcasing festival moments across years
4. **About** - Festival story, stats, and core values
5. **Contact** - Contact form and social links
6. **Footer** - Navigation links and copyright info

## 🎨 Color Palette

- `festival-pink`: #FF006E
- `festival-purple`: #8338EC
- `festival-blue`: #3A86FF
- `festival-cyan`: #06FFA5
- `festival-yellow`: #FFBE0B
- `festival-orange`: #FB5607

## 📝 Customization

### Update Content

Edit the component files in `/components` to customize:
- Festival information in `Hero.tsx` and `About.tsx`
- Portfolio items in `Portfolio.tsx`
- Contact information in `Contact.tsx`

### Modify Colors

Update the color palette in `tailwind.config.ts` under the `theme.extend.colors` section.

### Add Images

Replace gradient backgrounds in `Portfolio.tsx` with actual images by:
1. Adding images to `/public`
2. Using Next.js Image component for optimization

## 🔧 Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **React 19** - UI library
- **PostCSS** - CSS processing

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

© 2026 Streets Ahead Festival. All rights reserved.

## 🤝 Contributing

Have ideas to improve the archive? Open an issue or submit a pull request.

## 📧 Support

For questions or issues, contact: hello@streetsahead.com
