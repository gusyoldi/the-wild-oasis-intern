# AGENTS (cabins)

## Purpose
- Cabins CRUD and associated image management.

## Key Files
- UI: [CabinTable.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/CabinTable.jsx), [CabinRow.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/CabinRow.jsx), [CreateCabinForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/CreateCabinForm.jsx), [AddCabin.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/AddCabin.jsx)
- Hooks: [useCabins.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/useCabins.js), [useCreateCabin.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/useCreateCabin.js), [useUpdateCabin.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/useUpdateCabin.js), [useDeleteCabin.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/useDeleteCabin.js)
- Utilities: [utils.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/cabins/utils.js)

## Services and Dependencies
- API: [apiCabins.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiCabins.js)
  - `createUpdateCabin` uploads images to `cabin-images` bucket and manages public path.
- Client: [supabase.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/supabase.js)

## Flow
1. List with `getCabins`.
2. Create/Edit with `createUpdateCabin` (storage upload if needed).
3. Delete with `deleteCabin`.
4. Hooks coordinate React Query (cache and invalidation).

## Example
```js
import { createUpdateCabin } from "../../services/apiCabins";
await createUpdateCabin({ name, image: file }, /* id? */);
```
