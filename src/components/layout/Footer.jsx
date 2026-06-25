import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber text-espresso-dark font-bold">D</span>
            <span className="text-xl font-bold">Desxto Coffee</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Warm, cozy &amp; freshly brewed. Your neighborhood coffee shop crafting every cup with care.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">Visit &amp; Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>123 Brew Street, Bean Town</li>
            <li>hello@desxtocoffee.com</li>
            <li>(555) 234-5678</li>
            <li className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Desxto Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
