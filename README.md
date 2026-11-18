# Grobaltech Technologies — React + Supabase

Modern recreation of the Achrovin design language for **Grobaltech Technologies**, built with:

- **React 19** + TypeScript + Vite
- **Tailwind CSS v4**
- **React Router**
- **Supabase** (products / shop + ready for leads/CMS)
- Deployable to **Cloudflare Pages**

## Quick Start

```bash
cd grobaltech-app
cp .env.example .env
# Edit .env with your Supabase URL + anon key (optional for demo mode)

npm install
npm run dev
```

Open http://localhost:5173

Without Supabase credentials the app runs in **demo mode** with sample products.

## Supabase Setup (Products)

1. Create a free project at https://supabase.com
2. In SQL Editor run:

```sql
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  price numeric(10,2) not null,
  compare_at_price numeric(10,2),
  image_url text,
  category text,
  is_featured boolean default false,
  in_stock boolean default true,
  created_at timestamptz default now()
);

-- Optional: enable RLS and allow public read
alter table products enable row level security;
create policy "Public read products"
  on products for select
  using (true);
```

3. Insert sample rows in the Table Editor (or via SQL).
4. Copy Project URL and anon/public key into `.env`:

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

5. Restart `npm run dev`.

### Suggested next tables for full CMS / CRM

```sql
-- Leads from contact form
create table leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

-- Optional content blocks for future CMS
create table pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text,
  content jsonb,
  updated_at timestamptz default now()
);
```

Wire the Contact form to insert into `leads` for a simple CRM pipeline.

## Project Structure

```
src/
  components/
    Layout.tsx, Header.tsx, Footer.tsx, TopBar.tsx
    sections/          # Hero, Services, About, Projects, Team, Pricing, FeaturedProducts…
  pages/
    Home.tsx
    Products.tsx       # Full shop listing (Supabase)
    ProductDetail.tsx
    Contact.tsx
  lib/supabase.ts      # Client + Product type
```

## Deploy to Cloudflare Pages

1. Push the repo to GitHub/GitLab.
2. Cloudflare Dashboard → Pages → Create project → Connect Git.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
4. Deploy. Attach custom domain as needed.

Cloudflare Pages works perfectly with this static SPA + Supabase (no Node server required at runtime).

## Content Management

- **Products**: manage entirely from Supabase Table Editor (or build a simple admin later).
- **Leads / CRM**: store contact form submissions in a `leads` table; view in Supabase or connect to HubSpot/Salesforce via Edge Functions.
- **Other content**: currently static in React components. Move text/images into a `content` or `pages` table + fetch on the frontend when you need non-technical editors.

## Notes

- Design closely follows the Achrovin Pro structure, colors (purple primary), typography (Plus Jakarta Sans), and section hierarchy you selected.
- Cart / checkout is stubbed — connect Stripe + Supabase for real commerce if needed.
- The original static HTML version remains in `../grobaltech-site` if you want a pure static fallback.

Built for production use on Cloudflare with Supabase as the content & product backend.
