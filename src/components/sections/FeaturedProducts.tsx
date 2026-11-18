import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase, type Product } from '../../lib/supabase'

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      // If no Supabase env, show demo products
      if (!import.meta.env.VITE_SUPABASE_URL) {
        setProducts([
          { id: '1', name: 'Premium Hoodie', slug: 'premium-hoodie', description: 'Soft cotton blend hoodie', price: 45, compare_at_price: 55, image_url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80', category: 'Apparel', is_featured: true, in_stock: true, created_at: '' },
          { id: '2', name: 'Logo T-Shirt', slug: 'logo-tshirt', description: 'Classic fit with Grobaltech logo', price: 18, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80', category: 'Apparel', is_featured: true, in_stock: true, created_at: '' },
          { id: '3', name: 'Tech Cap', slug: 'tech-cap', description: 'Embroidered tech cap', price: 22, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80', category: 'Accessories', is_featured: true, in_stock: true, created_at: '' },
          { id: '4', name: 'Sticker Pack', slug: 'sticker-pack', description: 'Vinyl sticker set', price: 8, compare_at_price: 12, image_url: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=400&q=80', category: 'Accessories', is_featured: true, in_stock: true, created_at: '' },
        ])
        setLoading(false)
        return
      }

      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_featured', true)
        .eq('in_stock', true)
        .order('created_at', { ascending: false })
        .limit(4)

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
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900">Latest Products from the Shop</h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-lg shadow-primary-500/20"
          >
            View All Products →
          </Link>
        </div>

        {loading && <p className="text-center text-slate-500 py-12">Loading products…</p>}
        {error && <p className="text-center text-red-500 py-12">Error: {error}</p>}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] group hover:-translate-y-1 transition"
              >
                <div className="aspect-square overflow-hidden bg-slate-100 relative">
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
                  <h3 className="font-bold text-dark-900 group-hover:text-primary-600 transition">{p.name}</h3>
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
    </section>
  )
}
