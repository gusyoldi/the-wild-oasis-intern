# AGENTS: Technical Guide for LLM

This document describes the architecture, components and flows of “The Wild Oasis” so an LLM can reason about the codebase, answer questions, and generate accurate changes.

## 1. Overview

- Purpose: Property management app for “cabins” with bookings, check-in/out, dashboard, settings and user accounts.
- Scope: React + Vite SPA; persistence, auth and file storage on Supabase; deployment for Netlify (SPA routing).
- Nature: Frontend interacting with Supabase tables, storage and auth. No custom backend server in this repo.

## 2. Tech Stack and Versions

- React 18.2.0 ([package.json](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/package.json))
- Vite 4.2.0
- @vitejs/plugin-react 3.1.0
- styled-components 5.3.10
- react-router-dom 6.11.1
- @tanstack/react-query 4.29.5 + devtools 4.29.6
- @supabase/supabase-js 2.21.0
- date-fns 2.30.0
- react-hook-form 7.43.9
- react-error-boundary 4.0.4
- react-hot-toast 2.4.1
- recharts 2.6.2
- eslint 8.39.0 + eslint-config-react-app 7.0.1
- next-auth 5.0.0-beta.30 (present but not used in current flow)

## 3. Directory Structure

Project root ([LS](file:///Users/gustavoyoldi/src/the-wild-oasis-intern)):

- public/: static assets (logos, images).
- src/: main source code.
  - context/: global contexts, e.g. dark mode [DarkModeContext.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/context/DarkModeContext.jsx).
  - data/: sample data and assets (cabins).
  - features/: domain modules.
    - authentication/: auth forms and hooks (signup, login, etc.) and [useUser.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/useUser.js).
    - bookings/: listings, detail and operations on bookings (+ hooks and API).
    - cabins/: cabins CRUD with image uploads to `cabin-images` bucket.
    - check-in-out/: check-in/out flows and today’s activity.
    - dashboard/: KPIs, charts and filters.
    - settings/: global settings read/update.
  - hooks/: reusable hooks (localStorage, navigation, outside click).
  - pages/: routed pages (Dashboard, Bookings, Booking, Checkin, Cabins, Users, Settings, Account).
  - services/: Supabase integration ([supabase.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/supabase.js)) and domain APIs: [apiAuth.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiAuth.js), [apiBookings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiBookings.js), [apiCabins.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiCabins.js), [apiSettings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiSettings.js).
  - styles/: global styling with CSS variables and themes [GlobalStyles.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/styles/GlobalStyles.js).
  - ui/: shared UI components (Layout, Header, Table, Modal, Inputs, etc.).
  - utils/: helpers and constants ([helpers.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/utils/helpers.js), [constants.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/utils/constants.js)).
  - App.jsx: providers, router and layout orchestration ([App.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/App.jsx)).
  - main.jsx: bootstrap and ErrorBoundary ([main.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/main.jsx)).
- index.html: SPA entry (root element + loads main.jsx).
- vite.config.js: Vite configuration and plugins.
- netlify.toml: SPA redirect `/* -> /index.html`.
- .eslintrc.json: lint config (extends react-app).
- .env.local: local env vars (not versioned).
- package.json: scripts and dependencies.

## 4. Design and Architecture Patterns

- Domain modularity: `features/*` groups UI and hooks by business area.
- API/services separation: `services/*` wraps Supabase calls per table/function.
- Dedicated hooks: data logic and effects (e.g. `useBookings`, `useCabins`).
- Remote state with React Query: caching, invalidation, loading/error states.
- Global context: dark theme via `DarkModeContext` and CSS variables.
- Presentation vs logic: `ui/*` components are largely presentational; hooks/services handle side-effects.
- SPA with React Router: declarative routes and programmatic navigation; `ProtectedRoute` for auth guards.
- Styling with styled-components: theming via CSS custom properties in `GlobalStyles`.

## 5. Key Dependencies and Roles

- Supabase: authentication (email + password), Postgres DB tables (`bookings`, `cabins`, `settings`), and storage (buckets `avatars`, `cabin-images`).
- React Query: data fetch/caching; devtools inspection.
- React Router: SPA routing and navigation.
- styled-components: styles, light/dark themes.
- date-fns: date utilities (e.g. `formatDistance`, `differenceInDays`).
- react-hook-form: forms (create/edit entities).
- react-error-boundary: render error capture and reset.
- react-hot-toast: success/error notifications.
- recharts: dashboard charts.

## 6. Critical Entry Points and Configuration

- main.jsx: boot with `ErrorBoundary`, render into `#root` ([main.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/main.jsx)).
- App.jsx: providers `DarkModeProvider`, `QueryClientProvider`, `ReactQueryDevtools`, router and `Toaster` ([App.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/App.jsx)).
- GlobalStyles.js: defines variables and dark mode behavior ([GlobalStyles.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/styles/GlobalStyles.js)).
- vite.config.js: `react` and `vite-plugin-eslint` plugins ([vite.config.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/vite.config.js)).
- netlify.toml: SPA `[[redirects]]` ([netlify.toml](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/netlify.toml)).
- .eslintrc.json: base React rules ([.eslintrc.json](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/.eslintrc.json)).

## 7. Environment Variables

Defined and consumed in [supabase.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/supabase.js):

- VITE_SUPABASE_PUBLIC_URL: Supabase project URL.
- VITE_SUPABASE_PUBLIC_API_KEY: Supabase public key.

Notes:
- Don’t commit values to the repo or public docs.
- Place in `.env.local` (or equivalent). Vite exposes `VITE_*` to the client.

## 8. Available APIs / Methods

The app uses Supabase SDK; “APIs” are JS functions operating on tables/buckets. Main methods:

### Authentication ([apiAuth.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiAuth.js))

- signup({ fullName, email, password })
- login({ email, password })
- getCurrentUser()
- logout()
- updateCurrentUser({ password?, fullName?, avatar? })
  - Uploads `avatar` to `avatars` bucket and stores public URL in user metadata.

### Bookings ([apiBookings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiBookings.js))

- getBookings({ filter?, sortBy?, page? })
  - Fields: `id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice` + joins `cabins(name)`, `guests(fullName,email)`.
  - Filter: `query[method](field, value)`; Sort: `order(field, ascending)`.
  - Pagination: `PAGE_SIZE=10`.
- getBooking(id)
- getBookingsAfterDate(dateISO)
- getStaysAfterDate(dateISO)
- getStaysTodayActivity()
- updateBooking(id, obj)
- deleteBooking(id)

### Cabins ([apiCabins.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiCabins.js))

- getCabins()
- createUpdateCabin(newCabin, id?)
  - Insert/update and upload image to `cabin-images` bucket if needed.
- deleteCabin(id)

### Settings ([apiSettings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiSettings.js))

- getSettings()
- updateSetting(newSetting)  // updates single row with id=1

## 9. Code and Style Conventions

- ESLint: base `react-app`.
- Domain organization under `features/*`.
- Hooks use `use*` naming for data/effect logic.
- UI components in `ui/*` are reusable and styled via styled-components.
- CSS variables for theming in `:root`, with `light-mode` / `dark-mode` classes.
- Declarative routes and page names under `pages/*`.
- Pure helpers in `utils/*`.

## 10. Main Workflows

- Authentication:
  - `signup/login/logout/getCurrentUser/updateCurrentUser` via Supabase auth.
  - `ProtectedRoute` redirects to `/login` if not authenticated ([ProtectedRoute.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/ui/ProtectedRoute.jsx)). In `App.jsx` the guard is commented; enable as needed.
- Bookings management:
  - Table/pagination/filters with React Query and `bookings` APIs.
  - Detail and status updates (check-in/out).
- Cabins management:
  - CRUD with image uploads to `cabin-images`.
- Dashboard:
  - KPIs and charts (`recharts`), recent stays and bookings.
- Settings:
  - Read/update from `settings` table (single row id=1).
- Dark mode:
  - Context + CSS variables; toggle persisted in localStorage.

## 11. External Integrations

- Supabase:
  - Auth: email/password, user metadata and avatar.
  - DB: tables `bookings`, `cabins`, `settings` (RLS must permit required operations).
  - Storage: buckets `avatars` and `cabin-images` used by APIs.
- Netlify:
  - SPA routing via global redirect `/* -> /index.html`.

## 12. Usage Examples

### Fetch bookings with React Query

```jsx
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBookings";

function BookingsList({ page, filter, sortBy }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bookings", { page, filter, sortBy }],
    queryFn: () => getBookings({ page, filter, sortBy }),
    keepPreviousData: true,
  });

  if (isLoading) return <Spinner />;
  if (error) return <ErrorBox>{error.message}</ErrorBox>;

  return data?.data?.map((b) => <BookingRow key={b.id} booking={b} />);
}
```

### Protected route guard

```jsx
import AppLayout from "../ui/AppLayout";
import ProtectedRoute from "../ui/ProtectedRoute";

<Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
  <Route index element={<Navigate replace to="dashboard" />} />
  {/* other routes */}
</Route>
```

### Upload avatar to Supabase

```js
import { updateCurrentUser } from "../services/apiAuth";
// avatar: File
await updateCurrentUser({ fullName: "John Doe", avatar });
```

### Vite environment variables

```js
// src/services/supabase.js
export const supabaseUrl = import.meta.env.VITE_SUPABASE_PUBLIC_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_API_KEY;
```

## 13. LLM Critical Entry Points

- Navigation and providers are orchestrated in [App.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/App.jsx) and [main.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/main.jsx).
- All data operations go through `services/*` with Supabase client [supabase.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/supabase.js).
- Styles and dark mode affect `<html>` classes managed by [DarkModeContext.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/context/DarkModeContext.jsx) and variables in [GlobalStyles.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/styles/GlobalStyles.js).
- In production, ensure RLS and bucket permissions (`avatars`, `cabin-images`) so functions work as expected.

## 14. Scripts

- `pnpm dev` / `npm run dev`: start Vite dev server.
- `pnpm build` / `npm run build`: build production bundle.
- `pnpm preview` / `npm run preview`: serve built bundle locally.

## 15. Security Considerations

- Do not expose or log keys/tokens.
- Use only Supabase public key in client; sensitive operations must respect RLS.
- Validate form inputs and handle errors in UI (toasts + ErrorBoundary).
