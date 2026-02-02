# AGENTS (check-in-out)

## Purpose
- Check-in and check-out flows for bookings and today’s activity.

## Key Files
- UI: [CheckinBooking.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/CheckinBooking.jsx), [CheckoutButton.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/CheckoutButton.jsx), [TodayActivity.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/TodayActivity.jsx), [TodayItem.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/TodayItem.jsx)
- Hooks: [useCheckin.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/useCheckin.js), [useCheckout.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/useCheckout.js), [useTodayActivity.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/check-in-out/useTodayActivity.js)

## Services and Dependencies
- API: [apiBookings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiBookings.js)
  - `getStaysTodayActivity` for today’s activity.
  - `updateBooking` for status changes (checked-in/checked-out).

## Flow
1. Today’s activity via `getStaysTodayActivity` (combined OR).
2. Check-in/out update booking `status` via `updateBooking`.
3. UI composed in [Checkin.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/pages/Checkin.jsx) and auxiliary components.

## Example
```js
import { updateBooking } from "../../services/apiBookings";
await updateBooking(bookingId, { status: "checked-in" });
```
