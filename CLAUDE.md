# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application named "cantina-ueo-client" for the UEO Cantina system. It features Google OAuth authentication via Supabase, protected routing, and a modern UI built with Tailwind CSS v4.

## Development Commands

### Core Development

- `npm start` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Code Quality

- `npm run lint` - Run ESLint on TypeScript/TSX files
- `npm run prettier` - Format code with Prettier
- `npm run format` - Run both linting and formatting

## Project Structure

```
src/
├── main.tsx                   # Application entry point with React 19 createRoot
├── App.tsx                    # Main app with routing setup
├── index.css                  # Tailwind CSS v4 config with custom theme
├── vite-env.d.ts              # Vite type definitions
├── components/
│   ├── LoginPage.tsx          # Google OAuth login UI
│   ├── Dashboard.tsx          # Main authenticated view
│   └── ProtectedRoute.tsx     # Route guard component
├── contexts/
│   └── AuthContext.tsx        # Authentication state management
└── lib/
    └── supabase.ts            # Supabase client initialization
```

## Technology Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2 with @vitejs/plugin-react
- **Routing**: React Router DOM 7.9.1
- **Authentication**: Supabase Auth with Google OAuth
- **Database/Backend**: Supabase (@supabase/supabase-js 2.57.4)
- **Styling**: Tailwind CSS v4.1.13 with PostCSS
- **Linting**: ESLint 9.35.0 with TypeScript ESLint 8.44.0
- **Formatting**: Prettier 3.6.2 with eslint-config-prettier
- **Type Checking**: TypeScript 5.8.3

## Architecture

### Authentication Flow

The app uses a centralized authentication pattern:

1. **AuthContext** (`src/contexts/AuthContext.tsx`) provides global auth state using React Context
   - Manages user session state and loading status
   - Provides `signInWithGoogle()` and `signOut()` methods
   - Listens to Supabase auth state changes via `onAuthStateChange`
   - Must use `useAuth()` hook to access auth state (throws error if used outside AuthProvider)

2. **ProtectedRoute** component wraps authenticated routes
   - Redirects to `/login` if user is not authenticated
   - Shows loading state while checking authentication

3. **Supabase Client** (`src/lib/supabase.ts`) initializes the Supabase client
   - Requires environment variables: `VITE_NEXT_PUBLIC_SUPABASE_URL` and `VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Throws error on startup if environment variables are missing

### Routing Structure

The app uses React Router with a configurable base path:

- `/login` - Public login page with Google OAuth button
- `/` - Protected dashboard (requires authentication)
- Base path is configurable via `VITE_BASE_PATH` environment variable (defaults to `/cantina-ueo-client`)

All routes are wrapped in `AuthProvider` for consistent auth state access.

### Environment Variables

Required environment variables (see `.env.sample`):

- `VITE_BASE_PATH` - Base path for routing (e.g., `/cantina-ueo-client`)
- `VITE_NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `VITE_NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

Copy `.env.sample` to `.env` and fill in the values.

## Styling

### Tailwind CSS v4 Configuration

The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax in `index.css`.

**Custom Theme**: The app includes a comprehensive custom color palette defined in `index.css`:

- `text-*` - Text colors (50-950 shades)
- `background-*` - Background colors (50-950 shades)
- `primary-*` - Primary brand colors (50-950 shades)
- `secondary-*` - Secondary colors (50-950 shades)
- `accent-*` - Accent colors (50-950 shades)

**Dark Mode**: Full dark mode support with inverted color scales in `.dark` class.

**PostCSS**: Configured via `postcss.config.js` using `@tailwindcss/postcss` plugin.

## ESLint Configuration

The project uses a modern flat config ESLint setup (`eslint.config.js`) with:

- TypeScript-specific rules
- React and React Hooks linting
- Import ordering enforcement (builtin → external → internal → parent → sibling → index)
- Prettier integration for style consistency

Key rules:

- Import statements must be ordered by type with newlines between groups
- React hooks rules are enforced as errors
- TypeScript unused variables and explicit `any` are warnings
- React import in JSX scope is not required (modern React pattern)

## TypeScript Configuration

Uses project references pattern:

- `tsconfig.json` - Root configuration with references to app and node configs
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node/build tooling config (for Vite, PostCSS, etc.)

## Development Notes

- The app uses React 19's modern `createRoot` API
- Vite provides fast HMR for development
- OAuth redirects use `window.location.origin` to handle different deployment environments
- The Vite config sets base path from environment variable for flexible deployment
- All TypeScript/TSX files must follow ESLint import ordering rules
