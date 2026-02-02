# Base de Datos y Storage (Supabase)

Este documento describe el esquema mínimo de tablas, políticas RLS y buckets de Storage necesarios para ejecutar la app con tu propia instancia de Supabase.

## Tablas (SQL)

Ejecuta en el editor SQL de Supabase:

```sql
-- Cabins
create table if not exists public.cabins (
  id bigint generated always as identity primary key,
  name text not null,
  maxCapacity integer not null,
  regularPrice numeric not null,
  discount numeric default 0,
  image text,
  description text,
  created_at timestamptz default now()
);

-- Guests
create table if not exists public.guests (
  id bigint generated always as identity primary key,
  fullName text not null,
  email text not null,
  nationality text,
  countryFlag text
);

-- Bookings
create table if not exists public.bookings (
  id bigint generated always as identity primary key,
  created_at timestamptz default now(),
  startDate date not null,
  endDate date not null,
  numNights integer not null,
  numGuests integer not null,
  status text check (status in ('unconfirmed','checked-in','checked-out')) default 'unconfirmed',
  totalPrice numeric not null,
  extrasPrice numeric default 0,
  cabinId bigint references public.cabins(id) on delete set null,
  guestId bigint references public.guests(id) on delete set null
);

-- Settings (fila única id=1)
create table if not exists public.settings (
  id bigint primary key,
  minBookingLength integer not null default 1,
  maxBookingLength integer not null default 30,
  maxGuestsPerBooking integer not null default 6,
  breakfastPrice numeric not null default 15
);

insert into public.settings (id)
values (1) on conflict (id) do nothing;
```

## RLS (Row Level Security)

Activa RLS y aplica políticas base educativas (ajusta para producción):

```sql
alter table public.cabins enable row level security;
alter table public.guests enable row level security;
alter table public.bookings enable row level security;
alter table public.settings enable row level security;

-- Lectura anónima (opcional) para catálogos
create policy "cabins_read_anon" on public.cabins
for select to anon using (true);

create policy "settings_read_anon" on public.settings
for select to anon using (true);

create policy "guests_read_anon" on public.guests
for select to anon using (true);

-- Lectura/escritura para autenticados (simplificada)
create policy "bookings_rw_auth" on public.bookings
for all to authenticated using (true) with check (true);

create policy "cabins_rw_auth" on public.cabins
for all to authenticated using (true) with check (true);

create policy "guests_rw_auth" on public.guests
for all to authenticated using (true) with check (true);

create policy "settings_rw_auth" on public.settings
for all to authenticated using (true) with check (true);
```

Nota: En producción deberías limitar mutaciones (p. ej., que cada usuario solo pueda modificar sus propias reservas). Adapta las condiciones `using`/`with check` según tu modelo y `auth.uid()`.

## Buckets de Storage

Crea los buckets requeridos y políticas de acceso:

```sql
-- Crear buckets (si no existen)
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('cabin-images', 'cabin-images', true)
on conflict (id) do nothing;

-- Políticas de lectura pública
create policy "read_public_avatars" on storage.objects
for select to public
using (bucket_id = 'avatars');

create policy "read_public_cabin_images" on storage.objects
for select to public
using (bucket_id = 'cabin-images');

-- Subida para usuarios autenticados
create policy "upload_avatars_auth" on storage.objects
for insert to authenticated
with check (bucket_id = 'avatars');

create policy "upload_cabin_images_auth" on storage.objects
for insert to authenticated
with check (bucket_id = 'cabin-images');
```

## Variables de entorno

- `VITE_SUPABASE_PUBLIC_URL`: URL de tu proyecto Supabase
- `VITE_SUPABASE_PUBLIC_API_KEY`: clave pública (anon) de Supabase

Usa `.env.local` (ver [.env.example](file:///Users/gustavoyoldi/src/the-wild-oasis-intern/.env.example)).

## Consideraciones

- Las políticas anteriores son abiertas para un entorno de aprendizaje. Endurece las reglas en producción.
- Asegúrate de configurar correctamente los permisos de Storage si cambias la visibilidad de los buckets.
