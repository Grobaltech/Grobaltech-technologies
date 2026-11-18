import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim() || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim() || ''

// Keep the React application bootable when optional Supabase build variables
// have not been configured. Pages check VITE_SUPABASE_URL before making
// database requests, so this fallback is never used for real data access.
const fallbackUrl = 'https://placeholder-project.supabase.co'
const fallbackAnonKey = 'placeholder-anon-key'

export const supabase = createClient(
  supabaseUrl || fallbackUrl,
  supabaseAnonKey || fallbackAnonKey,
)

// Types for products (match your Supabase table)
export type Product = {
  id: string
  name: string
  slug: string
  description: string | null
  price: number
  compare_at_price: number | null
  image_url: string | null
  category: string | null
  is_featured: boolean
  in_stock: boolean
  created_at: string
}

export type ProductInsert = Omit<Product, 'id' | 'created_at'>
