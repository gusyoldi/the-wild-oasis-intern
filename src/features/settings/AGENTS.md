# AGENTS (settings)

## Purpose
- Read and update global system settings.

## Key Files
- UI: [UpdateSettingsForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/settings/UpdateSettingsForm.jsx)
- Hooks: [useSettings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/settings/useSettings.js), [useUpdateSetting.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/settings/useUpdateSetting.js)

## Services and Dependencies
- API: [apiSettings.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiSettings.js)
  - `getSettings()` retrieves the single row (id=1).
  - `updateSetting(newSetting)` updates that row (id=1).

## Flow
1. Read settings with `getSettings`.
2. Update using `updateSetting` (object `{ setting: newValue }`).
3. Hooks coordinate remote state and invalidation with React Query.

## Example
```js
import { updateSetting } from "../../services/apiSettings";
await updateSetting({ minBookingLength: 2 });
```
