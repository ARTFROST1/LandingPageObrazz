# OBRAZZ Landing Page

## Project Overview
A minimalist one-page landing page for the OBRAZZ iOS mobile app - an AI-powered personal wardrobe assistant. The design follows iOS-like aesthetics with a black and white color scheme, large spacing, and iPhone mockups.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom iOS-style design tokens
- **Animations**: Framer Motion for smooth transitions
- **UI Components**: Shadcn/ui components
- **Router**: Wouter
- **Backend**: Express.js (minimal, serves static files)

## Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── landing/           # Landing page components
│   │   │   ├── IPhoneMockup.tsx    # Reusable iPhone mockup with auto-scroll
│   │   │   ├── HeroSection.tsx     # Hero with logo and main CTA
│   │   │   ├── ProblemSolutionSection.tsx  # Problem/Solution block
│   │   │   ├── AppDemoSection.tsx  # App demo gallery
│   │   │   ├── BenefitsSection.tsx # Benefits cards
│   │   │   ├── HowItWorksSection.tsx # How it works steps
│   │   │   ├── SocialFeedSection.tsx # Social feed showcase
│   │   │   ├── PricingSection.tsx  # Pricing plans
│   │   │   ├── CTASection.tsx      # Call to action
│   │   │   └── Footer.tsx          # Footer with links
│   │   └── ui/                # Shadcn UI components
│   ├── pages/
│   │   ├── home.tsx           # Main landing page
│   │   └── not-found.tsx      # 404 page
│   ├── App.tsx                # Main app component
│   └── index.css              # Global styles
```

## Design System
### Colors (iOS-inspired black & white)
- Primary Background: #FFFFFF (white)
- Primary Text: #000000 (black)
- Secondary Text: #7A7A7A (gray)
- Borders: #E5E5E5
- Section Backgrounds: #F7F7F7, #FAFAFA, #F5F5F5

### Typography
- Font: Inter (SF Pro-like)
- Large bold headings, spacious body text
- Line height: 1.6-1.8

### Spacing
- Section padding: 128px (8rem) to 160px (10rem)
- Border radius: 20-26px (iOS-style)

## Page Sections (9 total)
1. **Hero** - Brand name, tagline, iPhone mockup with auto-scroll
2. **Problem/Solution** - Three problems + solution description
3. **App Demo** - Three iPhone mockups showing app screens
4. **Benefits** - Four feature cards
5. **How It Works** - Three steps with alternating layout
6. **Social Feed** - Feed showcase with large mockup
7. **Pricing** - Free vs Premium comparison
8. **CTA** - Final call to action with download buttons
9. **Footer** - Logo, links, contact email

## Running the Project
The application runs with `npm run dev` which starts both the Express backend and Vite dev server.

## Recent Changes
- Created full landing page with all 9 sections
- Implemented reusable iPhone mockup component with auto-scroll
- Added Framer Motion animations for scroll effects
- Configured iOS-style design tokens in Tailwind
- Added smooth scroll behavior
