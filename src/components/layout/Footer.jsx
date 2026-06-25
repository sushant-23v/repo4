import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">
              Desxto<span className="text-amber-warm"> Coffee</span>
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Warm, cozy, and brewed with love. Your neighborhood spot for handcrafted coffee and fresh pastries.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-amber-warm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-warm">About</Link></li>
              <li><Link to="/menu" className="text-gray-400 hover:text-amber-warm">Menu</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-amber-warm">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-amber-warm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Visit &amp; Follow</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>123 Roast Lane, Bean City</li>
              <li>hello@desxtocoffee.com</li>
              <li>(555) 012-3456</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-warm">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-warm">Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {year} Desxto Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
