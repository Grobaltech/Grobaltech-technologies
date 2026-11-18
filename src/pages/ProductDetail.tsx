import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase, type Product } from '../lib/supabase'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!import.meta.env.VITE_SUPABASE_URL) {
        // Demo fallback
        const demos: Record<string, Product> = {
          'premium-hoodie': { id: '1', name: 'Premium Hoodie', slug: 'premium-hoodie', description: 'Soft cotton blend hoodie with embroidered Grobaltech logo. Perfect for the office or weekend.', price: 45, compare_at_price: 55, image_url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80', category: 'Apparel', is_featured: true, in_stock: true, created_at: '' },
          'logo-tshirt': { id: '2', name: 'Logo T-Shirt', slug: 'logo-tshirt', description: 'Classic fit cotton t-shirt with the Grobaltech logo.', price: 18, compare_at_price: null, image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80', category: 'Apparel', is_featured: true, in_stock: true, created_at: '' },
        }
        setProduct(demos[slug || ''] || null)
        setLoading(false)
        return
      }

      const { data } = await supabase.from('products').select('*').eq('slug', slug).single()
      setProduct(data)
      setLoading(false)
    }
    load()
  }, [slug])

  if (loading) return <div className="py-32 text-center text-slate-500">Loading…</div>
  if (!product) return (
    <div className="py-32 text-center">
      <p className="text-slate-500 mb-4">Product not found</p>
      <Link to="/products" className="text-primary-600 font-semibold">← Back to products</Link>
    </div>
  )

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="text-sm text-primary-600 font-medium mb-8 inline-block">← Back to products</Link>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden bg-slate-50 aspect-square">
            {product.image_url ? (
              <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
            )}
          </div>
          <div>
            {product.category && <p className="text-sm text-primary-600 font-semibold uppercase tracking-wider mb-2">{product.category}</p>}
            <h1 className="text-3xl font-bold text-dark-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold text-primary-600">${product.price.toFixed(2)}</span>
              {product.compare_at_price && product.compare_at_price > product.price && (
                <span className="text-lg text-slate-400 line-through">${product.compare_at_price.toFixed(2)}</span>
              )}
            </div>
            <p className="text-slate-600 leading-relaxed mb-8">{product.description || 'No description available.'}</p>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary-500 text-white font-semibold hover:bg-primary-600 transition shadow-lg shadow-primary-500/25">
              Add to Cart
            </button>
            <p className="text-xs text-slate-400 mt-4">Cart / checkout can be connected to Stripe + Supabase later.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
