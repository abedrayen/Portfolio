# Design Approach & Rationale

## Visual Identity

### Color System
- **Primary**: Indigo (`#6366f1`) - Represents technology and innovation
- **Secondary**: Purple (`#8b5cf6`) - Adds depth and creativity
- **Tertiary**: Pink (`#ec4899`) - Accent for highlights
- **Background**: Deep black (`#0a0a0a`) - Modern, reduces eye strain
- **Text**: White with varying opacity - Creates hierarchy

### Typography Hierarchy
1. **Hero Title**: 5rem, weight 800 - Immediate impact
2. **Section Titles**: 3.5rem, weight 800 - Clear section breaks
3. **Body Text**: 1rem-1.25rem - Readable and comfortable
4. **Code**: JetBrains Mono - Technical credibility

## Interaction Design

### Scroll-Based Storytelling
- Sections reveal progressively as user scrolls
- Creates narrative flow and engagement
- Uses Intersection Observer for performance

### Micro-Interactions
- **Hover States**: Subtle scale and shadow changes
- **Button Clicks**: Scale feedback (0.95-1.05)
- **Card Expansions**: Smooth height animations
- **Progress Bars**: Animated on scroll into view

### Cursor Effects
- Custom cursor follower (desktop only)
- Changes size on interactive elements
- Blend mode for visual interest
- Disabled on mobile for performance

## Component Architecture

### Navigation
- Fixed position with blur backdrop
- Active section indicator (animated underline)
- Smooth scroll to sections
- Responsive hamburger menu (can be added)

### Hero
- Parallax background orbs
- Code window showcasing skills
- Animated statistics
- Clear CTAs

### About
- Three-part narrative structure
- Interactive timeline with icons
- Visual journey through career
- Philosophy → Process → Impact

### Projects
- Case study format (not just thumbnails)
- Expandable cards with details
- Challenge → Solution → Impact
- Technology tags
- Live demo and code links

### Skills
- Real project usage examples
- Animated progress bars
- Categorized by expertise
- Statistics footer

### Contact
- Multiple contact methods
- Functional form
- Hover effects on links
- Clear call-to-action

## Animation Strategy

### Entrance Animations
- Staggered children for sequential reveals
- Fade + translate for depth
- Duration: 0.5-0.6s
- Easing: Custom cubic-bezier for natural motion

### Scroll Animations
- Parallax on hero background
- Fade out hero on scroll
- Progress bars animate on view
- Timeline items reveal sequentially

### Hover Animations
- Scale: 1.02-1.05 (subtle)
- Translate: -4px to -8px (lift effect)
- Shadow: Increases for depth
- Border color: Changes to accent

## Performance Optimizations

1. **GPU Acceleration**: Transform and opacity only
2. **Intersection Observer**: Animations trigger on view
3. **Lazy Loading**: Components load as needed
4. **CSS Variables**: Efficient theming
5. **Minimal Re-renders**: React.memo where appropriate

## Accessibility Considerations

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly text
- Color contrast ratios (WCAG AA)

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 968px
- **Desktop**: 968px - 1280px
- **Large**: > 1280px

## Original Features

1. **Interactive Timeline**: Visual career journey
2. **Case Study Format**: Deep project insights
3. **Real Usage Stats**: Skills shown through projects
4. **Code Window**: Technical showcase
5. **Gradient Orbs**: Dynamic background
6. **Custom Cursor**: Memorable detail
7. **Narrative Structure**: Story over lists

## Why This Works

- **Feels Premium**: Attention to detail, smooth animations
- **Tells a Story**: Not just information, but narrative
- **Shows Thinking**: Case studies reveal process
- **Demonstrates Skills**: Real usage, not just lists
- **Memorable**: Unique elements that stand out
- **Professional**: Polished and production-ready
