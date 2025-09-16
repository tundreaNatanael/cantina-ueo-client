# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite application named "cantina-ueo-client". It's a minimal setup with modern tooling for React development with hot module replacement (HMR) and comprehensive linting.

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
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── App.css          # Application styles
├── index.css        # Global styles
├── vite-env.d.ts    # Vite type definitions
└── assets/          # Static assets
```

## Technology Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Build Tool**: Vite 7.1.2 with @vitejs/plugin-react
- **Linting**: ESLint 9.35.0 with TypeScript ESLint 8.44.0
- **Formatting**: Prettier 3.6.2 with eslint-config-prettier
- **Type Checking**: TypeScript 5.8.3

## ESLint Configuration

The project uses a modern flat config ESLint setup (eslint.config.js) with:

- TypeScript-specific rules
- React and React Hooks linting
- Import ordering enforcement
- Prettier integration for style consistency

Key rules:

- Import statements must be ordered by type (builtin, external, internal, etc.)
- React hooks rules are enforced
- TypeScript unused variables are warnings
- No explicit `any` types (warnings)

## TypeScript Configuration

Uses project references pattern with:

- `tsconfig.json` - Root configuration with references
- `tsconfig.app.json` - Application-specific config
- `tsconfig.node.json` - Node/build tooling config

## Development Notes

- The app uses React 19's new features including the modern `createRoot` API
- Vite provides fast HMR for development
- ESLint is configured to run on `.ts` and `.tsx` files
- Prettier handles code formatting automatically
- The project follows modern React patterns (no need for React imports in JSX)
