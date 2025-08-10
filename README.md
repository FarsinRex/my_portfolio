# RetroPortfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS, deployed on Vercel with serverless API routes.

## Features

- **Modern UI**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Three.js Background**: Interactive 3D background animation
- **Contact Form**: Integrated with Google Sheets via Vercel API routes
- **Theme Support**: Light and dark mode with system preference detection
- **Performance**: Optimized with Vite and modern build tools

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel
- **API**: Vercel Serverless Functions
- **Styling**: Tailwind CSS, Framer Motion
- **3D Graphics**: Three.js
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd RetroPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
GOOGLE_URL=your_google_apps_script_webhook_url
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Development

- **Development**: `npm run dev` - Starts Vite dev server
- **Build**: `npm run build` - Builds for production
- **Preview**: `npm run preview` - Preview production build
- **Type Check**: `npm run check` - Run TypeScript compiler

## Project Structure

```
RetroPortfolio/
├── client/                 # React application source
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utility functions
│   └── index.html         # HTML entry point
├── api/                   # Vercel API routes
│   ├── contact.js         # Contact form endpoint
│   └── test.js            # Test endpoint
├── dist/                  # Build output (generated)
├── vite.config.ts         # Vite configuration
├── vercel.json            # Vercel deployment config
└── package.json           # Project dependencies
```

## API Endpoints

### POST /api/contact
Handles contact form submissions and forwards data to Google Sheets.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "contact_number": "+1234567890",
  "message": "Hello, I'd like to discuss a project."
}
```

**Response:**
```json
{
  "success": true,
  "contact": { ... },
  "sheetsResponse": { ... }
}
```

## Deployment

The app is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set the `GOOGLE_URL` environment variable in Vercel
3. Deploy automatically on push to main branch

## Environment Variables

- `GOOGLE_URL`: Your Google Apps Script webhook URL for the contact form

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
