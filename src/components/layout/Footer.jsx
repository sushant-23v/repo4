import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-espresso-dark font-bold">D</span>
            <span className="text-lg font-bold">Desxto Coffee</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Where every cup feels like home. Freshly roasted beans, cozy corners, and a warm welcome every day.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
            <li><Link to="/menu" className="text-gray-300 hover:text-white">Menu</Link></li>
            <li><Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-amber">Visit &amp; Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>42 Roastery Lane, Bean District</li>
            <li>hello@desxtocoffee.com</li>
            <li>(555) 012-3456</li>
            <li>Mon–Sun · 7am – 9pm</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber">Facebook</a>
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
