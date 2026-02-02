## Desktop-first Testing Guideline

> **Important**  
> All tests in this phase must assume a **desktop viewport**.  
> Mobile and responsive testing is **explicitly deferred** to a later task.

### Core Principle

- Validate **visual styles and layouts on desktop first**
- Ensure spacing, alignment, typography and component composition are correct
- Catch styling regressions in the primary (desktop) UX
- Avoid responsive complexity at this stage
- Mobile testing will be handled in a separate phase

---

### Viewport Rules

- Default viewport: **desktop (e.g. 1440×900)**
- Tests must not assert mobile breakpoints
- Responsive behavior is out of scope for this phase

---

### Test Scope (Desktop Only)

#### Authentication

- Login flow works and routes correctly
- Signup flow handles success and errors
- Profile update renders correctly in desktop layout

#### Protected Routing

- Unauthenticated users redirect to `/login`
- Authenticated users render full desktop layout (sidebar + main content)

#### Bookings

- Tables render correctly on desktop
- Pagination, filters and sorting update rows
- Columns and actions are aligned and visible

#### Check-in / Check-out

- Status updates trigger UI feedback
- Lists and detail views revalidate correctly
- Desktop action placement is correct

#### Cabins

- Create, update and delete flows work
- Forms and lists render correctly on desktop
- Image previews and spacing are consistent

#### Dashboard

- Stats and charts render with correct layout
- Filters update KPIs
- Cards and charts align correctly on desktop

#### Settings

- Settings persist and re-render
- Desktop form styling remains consistent

#### Dark Mode

- Theme toggle works and persists
- Desktop contrast and layout remain intact

#### Errors & Feedback

- API failures surface error toasts
- ErrorBoundary recovers correctly
- Toast positioning works on desktop

---

### Out of Scope (For Now)

- Mobile viewport tests
- Responsive layout assertions
- Touch interactions
- Mobile navigation

> These items will be addressed in a **dedicated mobile testing phase**.
