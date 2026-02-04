# AGENTS: Project Overview (Condensed)

This document gives an LLM the minimum context needed to understand and modify **The Wild Oasis** frontend safely.

## Project Summary

- **App**: Property management dashboard for cabins (bookings, check-in/out, KPIs, settings).
- **Type**: React SPA (no custom backend).
- **Backend**: Supabase (auth, Postgres, storage).
- **Deploy**: Netlify (SPA routing).

## Tech Stack (core)

- React 18 + Vite
- React Router
- @tanstack/react-query
- styled-components
- Supabase JS v2
- react-hook-form
- recharts (dashboard charts)

## High-Level Architecture

- **features/**: domain modules (auth, bookings, cabins, dashboard, settings).
- **services/**: all Supabase access (one file per domain).
- **ui/**: reusable presentational components.
- **hooks/**: shared hooks.
- **context/**: global state (dark mode).
- **pages/**: routed screens.
- **styles/**: global styles and CSS variables.

➡️ UI is mostly presentational; side-effects live in hooks + services.

## Data & State

- Remote data handled exclusively via **React Query**.
- Supabase tables used:
  - `bookings`
  - `cabins`
  - `settings` (single row, id=1)
- Storage buckets:
  - `avatars`
  - `cabin-images`

## Supabase APIs (via services/\*)

- **Auth**: signup, login, logout, get/update current user.
- **Bookings**: list, detail, filters, pagination, check-in/out.
- **Cabins**: CRUD + image upload.
- **Settings**: read/update global settings.

All data access goes through `services/*` using `supabase.js`.

## Entry Points

- `main.jsx`: bootstrap + ErrorBoundary.
- `App.jsx`: providers, router, layout, toasts.
- `supabase.js`: Supabase client + env vars.
- `GlobalStyles.js`: theming + dark mode variables.

## Routing & Auth

- React Router SPA.
- `ProtectedRoute` exists for auth guarding (may be commented out).
- Redirect unauthenticated users to `/login`.

## Styling

- styled-components.
- Light/Dark mode via CSS variables on `<html>`.
- Dark mode state stored in localStorage.

## Environment Variables

Defined in `.env.local` (never committed):

- `VITE_SUPABASE_PUBLIC_URL`
- `VITE_SUPABASE_PUBLIC_API_KEY`

## Conventions

- Domain code lives in `features/*`.
- Side-effects and data fetching in hooks/services.
- UI components are reusable and mostly stateless.
- Avoid bypassing services to call Supabase directly.

## Deployment Notes

- Netlify SPA redirect: `/* -> /index.html`.
- Ensure Supabase RLS and bucket permissions allow expected operations.
