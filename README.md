# The Wild Oasis

Aplicación SPA de gestión de alojamientos (“cabañas”) con reservas, check-in/out, panel, ajustes y cuentas de usuario. Construida con React + Vite y Supabase (autenticación, base de datos y almacenamiento). Desplegable como SPA (compatible con Netlify).

> Este proyecto forma parte de un curso de Jonas Schmedtmann. Ha sido implementado con fines de aprendizaje y adaptado para desarrollo local y de experimentación.

## Características

- Autenticación (email/contraseña), perfil de usuario y avatar
- Listado de reservas, detalle, filtrado, ordenación y paginación
- Flujos de check-in / check-out y “actividad de hoy”
- CRUD de cabañas con subida de imágenes
- Panel con KPIs y gráficos
- Gestión de ajustes globales
- Modo oscuro con toggle persistente

## Stack Tecnológico

- React 18, Vite 4, React Router 6
- styled-components, @tanstack/react-query (+ devtools)
- @supabase/supabase-js (auth, Postgres, storage)
- date-fns, react-hook-form, react-hot-toast, recharts

## Puesta en marcha

1. Clona el repositorio
2. Crea `.env.local` y define:
   - `VITE_SUPABASE_PUBLIC_URL`
   - `VITE_SUPABASE_PUBLIC_API_KEY`
3. Instala y ejecuta:
   - `pnpm install` (o `npm install`)
   - `pnpm dev` (o `npm run dev`)

## Scripts

- `dev`: inicia el servidor de desarrollo de Vite
- `build`: genera el build de producción
- `preview`: sirve el bundle generado localmente
- `lint`: corre ESLint con Flat Config
- `test`: corre Vitest (jsdom) para unit/integration

## Directorios destacados

- `src/App.jsx`: providers, router y layout
- `src/main.jsx`: bootstrap y ErrorBoundary
- `src/services/*`: cliente de Supabase y APIs por dominio
- `src/features/*`: módulos de dominio (authentication, bookings, cabins, check-in-out, dashboard, settings)
- `src/ui/*`: componentes UI compartidos
- `src/styles/GlobalStyles.js`: variables CSS y modo oscuro

## Notas

- Las políticas RLS de Supabase y permisos de buckets deben permitir las operaciones necesarias de auth/db/storage.
- No se deben commitear claves/tokens; usa únicamente claves públicas de Supabase en el cliente.      

## Convención de commits

- Commitlint valida mensajes tipo Conventional Commits (hook `commit-msg` con Husky).
