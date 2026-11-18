import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, type Product } from '../lib/supabase'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      if (!import.meta.env.VITE_SUPABASE_URL) {
        // Demo data when Supabase is not configured
        setProducts([
          { id: '1', name: 'Premium Hoodie', slug: 'premium-hoodie', description: 'Soft cotton blend hoodie with logo', price: 45, compare_at_price: 55, image_url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80', category: 'Apparel', is_featured: true, in_stock: true, created_at: '' },
          { id: '2', name: 'Logo T-Shirt', slug: 'logo-tshirt', description: 'Classic fit with Grobaltech logo', price: 18, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', category: 'Apparel', is_featured: true, in_stock: true, created_at: '' },
          { id: '3', name: 'Tech Cap', slug: 'tech-cap', description: 'Embroidered tech cap', price: 22, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80', category: 'Accessories', is_featured: false, in_stock: true, created_at: '' },
          { id: '4', name: 'Sticker Pack', slug: 'sticker-pack', description: 'Vinyl sticker set', price: 8, compare_at_price: 12, image_url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80', category: 'Accessories', is_featured: true, in_stock: true, created_at: '' },
          { id: '5', name: 'Long Sleeve Tee', slug: 'long-sleeve-tee', description: 'Comfortable long sleeve', price: 25, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80', category: 'Apparel', is_featured: false, in_stock: true, created_at: '' },
          { id: '6', name: 'Polo Shirt', slug: 'polo', description: 'Classic polo with embroidered logo', price: 20, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=600&q=80', category: 'Apparel', is_featured: false, in_stock: true, created_at: '' },
        ])
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('in_stock', true)
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }
      setProducts(data || [])
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">Shop</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Our Products</h1>
          <p className="text-slate-500">Browse merchandise and digital products from Grobaltech Technologies.</p>
        </div>

        {loading && <p className="text-center text-slate-500 py-20">Loading products…</p>}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">Error loading products: {error}</p>
            <p className="text-sm text-slate-500">Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set and the products table exists.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition group"
              >
                <div className="aspect-square overflow-hidden bg-slate-50 relative">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
                  )}
                  {p.compare_at_price && p.compare_at_price > p.price && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-primary-500 text-white text-xs font-bold rounded">Sale</span>
                  )}
                </div>
                <div className="p-5">
                  {p.category && <p className="text-xs text-primary-600 font-medium uppercase tracking-wider mb-1">{p.category}</p>}
                  <h2 className="font-bold text-dark-900 group-hover:text-primary-600 transition">{p.name}</h2>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-semibold text-primary-600">${p.price.toFixed(2)}</span>
                    {p.compare_at_price && p.compare_at_price > p.price && (
                      <span className="text-sm text-slate-400 line-through">${p.compare_at_price.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
