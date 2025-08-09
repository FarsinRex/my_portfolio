# Portfolio Website

## Overview

This is a modern, full-stack portfolio website built with React and Express. The application features a retro-themed design with animated grain effects, smooth transitions, and a contact form system. It's designed to showcase work and provide an interactive way for visitors to get in touch.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 17, 2025)

✓ Updated name card font size from 16px to 24px (1.5x increase)
✓ Fixed card border visibility in light mode with solid borders
✓ Fixed form input text color to be visible in both themes
✓ Made navigation elements (menu button, theme toggle, name card) fixed position
✓ Improved project card responsive design for mobile devices
✓ Added proper button sizing and spacing for smaller screens
✓ Applied San Francisco font consistently throughout the application
✓ Doubled the name card size again (text-2xl to text-5xl for name, text-lg to text-4xl for title)
✓ Reduced spacing between "farsin" and "web-dev" (mb-2 to mb-1)
✓ Enhanced theme toggle button in light mode with black background for better visibility
✓ Maintained scroll animations for sections (projects, about, contact) with staggered delays
✓ Added footer with copyright and Mumbai address
✓ Removed fixed positioning from name card - now only visible on landing page

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactive effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod schemas for type-safe data validation
- **Storage**: In-memory storage for development with interface for easy database integration

## Key Components

### Frontend Components
- **Loading Screen**: Animated code preview with typewriter effect
- **Grain Overlay**: Canvas-based animated grain effect for retro aesthetic
- **Navigation**: Floating navigation with theme toggle
- **Hero Section**: Large typography with smooth scroll indicators
- **Projects Section**: Grid layout showcasing work with gradient cards
- **About Section**: Skills and experience presentation
- **Contact Section**: Form with validation and success feedback
- **Theme Provider**: Dark/light mode support with system preference detection

### Backend Components
- **Routes**: RESTful API endpoints for contact form submission
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database storage
- **Schema Validation**: Shared Zod schemas between frontend and backend
- **Error Handling**: Centralized error handling with proper HTTP status codes

## Data Flow

### Contact Form Flow
1. User fills out contact form with validation
2. Form data is validated using Zod schemas
3. Data is sent to `/api/contact` endpoint
4. Server validates and stores contact information
5. Success response triggers UI feedback
6. Admin can retrieve contacts via `/api/contacts` endpoint

### Theme Management
1. Theme preference is stored in localStorage
2. Theme provider manages system-wide theme state
3. CSS variables are updated based on theme selection
4. Theme toggle button allows real-time switching

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type inference

### Database and Storage
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store (prepared for future use)

## Deployment Strategy

### Build Process
- **Development**: Vite dev server with HMR and Express API
- **Production**: Vite builds static assets, esbuild bundles server code
- **Output**: Static files in `dist/public`, server bundle in `dist/index.js`

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Development**: In-memory storage for rapid prototyping
- **Production**: Database-backed storage with Drizzle migrations

### Key Features
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance**: Optimized assets and efficient React patterns
- **Accessibility**: Radix UI components ensure WCAG compliance
- **SEO**: Proper meta tags and semantic HTML structure
- **Error Handling**: Graceful error states and user feedback

### Development Workflow
- **Hot Reloading**: Vite provides instant updates during development
- **Type Safety**: Full TypeScript coverage with shared schemas
- **Code Quality**: ESLint and Prettier for consistent formatting
- **Database Migrations**: Drizzle Kit for schema management

The application is designed to be easily extensible, with a clear separation between frontend and backend concerns, and a flexible storage interface that can be easily switched from in-memory to database-backed storage.