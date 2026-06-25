import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">☕</span>
            <span className="text-xl font-bold">Desxto Coffee</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Warm, cozy, and crafted with love. Your neighborhood coffee shop serving freshly roasted beans every day.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-amber transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber transition-colors">About</Link></li>
            <li><Link to="/menu" className="hover:text-amber transition-colors">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-amber transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber mb-4">Find Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>123 Roastery Lane, Bean City</li>
            <li>Open daily 7am – 9pm</li>
            <li>hello@desxtocoffee.com</li>
            <li>(555) 012-3456</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber transition-colors">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Desxto Coffee. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
