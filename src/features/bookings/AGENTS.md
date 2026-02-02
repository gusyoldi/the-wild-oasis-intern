# AGENTS (bookings)

## Purpose

- Bookings management: list, detail, filtering, sorting, pagination and CRUD operations.

## Key Files

- UI: [BookingTable.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/BookingTable.jsx), [BookingRow.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/BookingRow.jsx), [BookingDetail.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/BookingDetail.jsx), [BookingTableOperations.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/BookingTableOperations.jsx)
- Hooks: [useBookings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/useBookings.js), [useBooking.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/useBooking.js), [useDeleteBooking.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/bookings/useDeleteBooking.js)

## Services and Dependencies

- API: [apiBookings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiBookings.js) (joins with `cabins`, `guests`; filters/sort; `PAGE_SIZE=10`)
- Helpers: [helpers.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/utils/helpers.js), [constants.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/utils/constants.js)
- Remote state: React Query for caching and pagination.

## Flow

1. `getBookings` applies filter, sort and page range.
2. `getBooking` fetches detail with relations.
3. Auxiliary endpoints: `getBookingsAfterDate`, `getStaysAfterDate`, `getStaysTodayActivity`.
4. Mutations: `updateBooking`, `deleteBooking`.

## Example

```js
import { getBookings } from "../../services/apiBookings";
const { data, count } = await getBookings({
  page: 1,
  sortBy: { field: "created_at", direction: "desc" },
});
```
