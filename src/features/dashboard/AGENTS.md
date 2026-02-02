# AGENTS (dashboard)

## Purpose
- Dashboard with KPIs, charts and time/segment filters.

## Key Files
- Layout/UI: [DashboardLayout.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/DashboardLayout.jsx), [DashboardFilter.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/DashboardFilter.jsx), [Stats.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/Stats.jsx), [Stat.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/Stat.jsx)
- Charts: [SalesChart.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/SalesChart.jsx), [DurationChart.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/DurationChart.jsx)
- Hooks: [useRecentBookings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/useRecentBookings.js), [useRecentStays.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/dashboard/useRecentStays.js)

## Services and Dependencies
- Data: `apiBookings` (`getBookingsAfterDate`, `getStaysAfterDate`)
- Visualization: `recharts`
- Utilities: [helpers.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/utils/helpers.js) (`getToday`, formatting)

## Flow
1. Load recent bookings/stays via hooks and React Query.
2. KPIs and charts are derived from recent collections.
3. Filters update query keys and recompute metrics.

## Example
```js
import { getBookingsAfterDate } from "../../services/apiBookings";
const items = await getBookingsAfterDate(someIsoDate);
```
