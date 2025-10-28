# Alex Chen - Videographer Portfolio (Vite Version)

A modern, responsive portfolio website for Alex Chen, a creative videographer and editor, built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: Vite 7.x
- **Language**: TypeScript 5
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.x
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Fonts**: Outfit (Google Fonts)

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components
│   │   ├── Layout.tsx
│   │   └── Navigation.tsx
│   ├── sections/        # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutHero.tsx
│   │   ├── PortfolioGrid.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ContactForm.tsx
│   │   └── ...
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/               # Custom React hooks
├── App.tsx              # Main App component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## 🎨 Design Features

- **Squid Game Inspired Aesthetics**: Soft black background with pink and red accents
- **Geometric Elements**: Circle, triangle, and square shapes as decorative elements
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Dark Theme**: Optimized for dark viewing experience

## 📱 Pages

1. **Home** (`/`) - Hero section with call-to-action
2. **About** (`/about`) - Personal story, skills, and experience
3. **Portfolio** (`/portfolio`) - Video gallery with filtering
4. **Services** (`/services`) - Service offerings and pricing
5. **Contact** (`/contact`) - Contact form and information

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features

- **Client-Side Routing**: React Router for smooth navigation
- **Component-Based Architecture**: Reusable React components
- **TypeScript Support**: Full type safety
- **Responsive Design**: Works on all device sizes
- **Interactive Elements**: Hover effects, animations, and transitions
- **Contact Form**: Functional contact form with validation
- **Video Gallery**: Filterable portfolio showcase

## 🎯 Contact Button Fix

The "Contact Me" button in the hero section now properly navigates to the contact page using React Router's `useNavigate` hook, resolving the previous scrolling issue.

## 📦 Build Output

The production build creates optimized static files in the `dist/` directory:
- `index.html` - Main HTML file
- `assets/` - CSS and JavaScript bundles
- Source maps for debugging

## 🚀 Deployment

This Vite-based application can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

Simply run `npm run build` and deploy the `dist/` folder to your hosting provider.