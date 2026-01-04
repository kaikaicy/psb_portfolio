# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Smooth scrolling navigation
- 🎭 Framer Motion animations
- 🎯 All sections from the reference portfolio:
  - Hero section with introduction
  - About Me
  - Education & Achievements
  - Featured Projects
  - Work Experience
  - Skills & Technologies
  - Contact form

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To customize the portfolio with your own information:

1. **Add Your Profile Image**: 
   - Place your profile image in the `public/` folder
   - Name it `profile.jpg` (or update the image path in `components/Hero.tsx` and `components/About.tsx`)
   - Recommended size: 400x400px or larger, square format
   - Supported formats: JPG, PNG, WebP

2. Update the content in each component file in the `components/` directory
3. Replace placeholder text, images, and links with your own
4. Update the metadata in `app/layout.tsx`
5. Modify colors and styling in `tailwind.config.ts` if needed

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

