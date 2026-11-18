import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
