# Rayen Abed - Software Engineer Portfolio

A premium, story-driven portfolio website built with React, TypeScript, and Framer Motion. Showcasing expertise in AI, Machine Learning, NLP, and Full-Stack Development.

## 🎨 Design Philosophy

### Core Principles

1. **Unique Visual Identity**: Dark mode by default with gradient accents, avoiding generic template layouts
2. **Story-Driven Narrative**: Each section tells a story, not just lists information
3. **Interactive & Alive**: Smooth animations, hover effects, and scroll-based reveals
4. **Performance-First**: Optimized animations, lazy loading, and clean architecture
5. **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support

### Design System

- **Color Palette**: Dark theme with indigo/purple gradients (`#6366f1`, `#8b5cf6`, `#ec4899`)
- **Typography**: Inter for UI, JetBrains Mono for code
- **Spacing**: Consistent scale using CSS custom properties
- **Animations**: Framer Motion for smooth, performant transitions

## 🚀 Features

### Hero Section
- Parallax background with floating gradient orbs
- Animated code window showcasing technical skills
- Scroll-based fade effects
- Interactive call-to-action buttons

### About Section
- Narrative-driven storytelling (Philosophy, Process, Impact)
- Interactive timeline with journey milestones
- Smooth scroll reveals

### Projects Section
- Case study approach (Challenge → Solution → Impact)
- Expandable project cards with detailed information
- Technology tags and live demo links
- Hover animations and depth effects

### Skills Section
- Skills shown through real project usage
- Animated progress bars
- Statistics with actual numbers
- Categorized by expertise area

### Contact Section
- Multiple contact methods with hover effects
- Functional contact form
- Smooth form interactions

### Interactive Elements
- Custom cursor follower (desktop only)
- Smooth scroll navigation
- Active section highlighting
- Scroll-based animations
- Micro-interactions throughout

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Styling**: CSS Modules with custom properties
- **Intersection Observer**: react-intersection-observer
- **Fonts**: Inter, JetBrains Mono (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Component Structure

```
src/
├── components/
│   ├── Navigation.tsx       # Fixed nav with active section tracking
│   ├── Hero.tsx              # Hero section with parallax effects
│   ├── About.tsx             # Story-driven about with timeline
│   ├── Projects.tsx           # Interactive project case studies
│   ├── Skills.tsx             # Skills with real usage examples
│   ├── Contact.tsx            # Contact form and methods
│   └── CursorFollower.tsx     # Custom cursor effect
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── index.css                  # Global styles and design tokens
```

## 🎨 Customization

### Colors
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  --accent-tertiary: #ec4899;
  /* ... */
}
```

### Content
- Update project data in `src/components/Projects.tsx`
- Modify timeline items in `src/components/About.tsx`
- Adjust skills in `src/components/Skills.tsx`
- Update contact information in `src/components/Contact.tsx`

### Animations
Adjust animation timing and easing in component files using Framer Motion variants.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 968px, 1280px
- Touch-optimized interactions
- Cursor effects disabled on mobile

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly

## 🚀 Performance

- Code splitting with Vite
- Optimized animations (GPU-accelerated)
- Lazy loading with Intersection Observer
- Minimal bundle size
- Fast initial load

## 📄 License

This project is open source and available for personal use.

## 🎓 Design Rationale

### Why This Approach?

1. **Dark Mode First**: Reduces eye strain, feels modern, and makes colors pop
2. **Story Over Lists**: People remember stories, not bullet points
3. **Case Studies**: Shows thinking process, not just final results
4. **Real Usage**: Skills demonstrated through actual projects, not just icons
5. **Micro-interactions**: Small details that make the experience feel premium
6. **Scroll-Based Reveals**: Creates a narrative flow as users scroll

### What Makes It Stand Out?

- **No Generic Templates**: Custom design from scratch
- **Interactive Timeline**: Visual journey through career
- **Expandable Case Studies**: Deep dive into projects
- **Custom Cursor**: Subtle but memorable detail
- **Gradient Orbs**: Dynamic background that responds to scroll
- **Code Window**: Shows technical skills visually

---

Built with ❤️ using React, TypeScript, and Framer Motion
