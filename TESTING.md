# Testing Plan (Integration-first)

This document outlines an initial plan to add integration tests to The Wild Oasis. The repo currently has no test infra. The plan prioritizes user-centric flows and real data interactions while keeping Supabase external dependencies testable via mocks/stubs.

## Test Infrastructure Proposal
- Runner: Vitest (fast, Vite-native) or Jest (if preferred)
- Rendering: React Testing Library
- Network/database: MSW (Mock Service Worker) to stub Supabase endpoints, or custom Supabase client stubs
- Router: MemoryRouter for route tests
- Store/cache: React Query test utils with QueryClient per test

## Foundational Setup Tasks
1. Add dependencies:
   - `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `msw`
2. Configure:
   - Vite test config (vitest) with `jsdom`
   - Global setup: RTL matchers, MSW handlers bootstrapped
   - Create Supabase client test double (override `createClient` in tests)
3. Utilities:
   - Factory helpers for bookings/cabins/users
   - Render wrapper with `QueryClientProvider`, `MemoryRouter`, `DarkModeProvider`

## Integration Test Candidates (Initial)
1. Authentication
   - LoginForm submits valid credentials, shows success toast, routes to dashboard
   - SignupForm creates user, handles errors, persists metadata (mocked)
   - UpdateUserDataForm uploads avatar (storage mocked), updates user metadata
2. Protected Routing
   - ProtectedRoute redirects unauthenticated users to `/login`
   - Authenticated users render application layout
3. Bookings
   - BookingTable loads page 1 with server results, paginates to page 2
   - BookingDetail renders joined cabin/guest info; error state on 404
   - BookingTableOperations applies filter and sort; reflects in rows
4. Check-in/out
   - CheckinBooking updates status to `checked-in`, shows feedback, invalidates queries
   - CheckoutButton sets `checked-out`, revalidates list and detail
   - TodayActivity lists check-ins/outs for current day
5. Cabins
   - CreateCabinForm uploads image (mock storage), new cabin appears in list
   - UpdateCabin modifies fields and image path when needed
   - DeleteCabin removes cabin and updates list
6. Dashboard
   - Stats and charts compute metrics from recent bookings/stays
   - DashboardFilter changes window and recalculates KPIs
7. Settings
   - UpdateSettingsForm persists value via `updateSetting`, re-renders with new data
8. Dark Mode
   - DarkModeToggle switches theme, persists in localStorage
9. Errors and Toasts
   - API failures surface error toasts; ErrorBoundary resets on reload

## Test Data and Mocking Strategy
- MSW handlers simulate Supabase `from(...).select/insert/update/delete` calls
- Storage mocking: intercept `.storage.from(bucket).upload(...)` and return URLs
- Auth mocking: `auth.signUp/signInWithPassword/getSession/getUser/signOut/updateUser`
- Strict contract tests on API modules in `src/services/*` to ensure query building

## Running Tests (once infra is added)
```bash
pnpm test
# or
pnpm vitest
```

## Next Steps
- Decide on runner (Vitest recommended for Vite projects)
- Add test dependencies and configs
- Start with Authentication and Bookings tests, expand to other modules

