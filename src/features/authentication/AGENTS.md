# AGENTS (authentication)

## Purpose

- User authentication management: sign up, login, logout, update user data and password, avatar handling.

## Key Files

- Forms: [LoginForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/LoginForm.jsx), [SignupForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/SignupForm.jsx), [UpdatePasswordForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/UpdatePasswordForm.jsx), [UpdateUserDataForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/UpdateUserDataForm.jsx)
- User state: [useUser.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/useUser.js), [UserAvatar.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/UserAvatar.jsx)
- Actions: [LoginForm.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/LoginForm.jsx), [Logout.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/Logout.jsx)
- Hooks (API): [useLogin.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/useLogin.js), [useLogout.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/useLogout.js), [useSignup.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/useSignup.js), [useUpdateUser.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/features/authentication/useUpdateUser.js)

## Services and Dependencies

- API: [apiAuth.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/apiAuth.js)
- Client: [supabase.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/supabase.js)
- Base UI and routing: [App.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/App.jsx), [ProtectedRoute.jsx](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/ui/ProtectedRoute.jsx)
- Notifications: react-hot-toast; forms: react-hook-form.

## Flow

1. signup/login call Supabase Auth.
2. getCurrentUser retrieves current session and user data.
3. updateCurrentUser updates password/name and optionally uploads avatar to `avatars` bucket.
4. logout signs the user out in Supabase.
5. `ProtectedRoute` restricts routes when enabled.

## Example

```js
import { login } from "../../services/apiAuth";
await login({ email, password });
```

## Env Vars

- VITE_SUPABASE_PUBLIC_URL, VITE_SUPABASE_PUBLIC_API_KEY (see [supabase.js](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/src/services/supabase.js))
