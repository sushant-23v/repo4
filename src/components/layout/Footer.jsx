import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white text-sm">G</span>
            Goa Escape
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            A romantic 8-day beach getaway from Pune to Goa, planned to perfection for Sushant & Sonali.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/itinerary" className="hover:text-orange-400">Itinerary</Link></li>
            <li><Link to="/budget" className="hover:text-orange-400">Budget</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Trip Desk</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>Travelers: Sushant & Sonali</li>
            <li>Route: Pune → Goa</li>
            <li>Dates: 30 Jul – 06 Aug 2026</li>
            <li><a href="mailto:hello@goaescape.trip" className="hover:text-orange-400">hello@goaescape.trip</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Goa Escape. Crafted for an unforgettable romantic getaway.
        </div>
      </div>
    </footer>
  )
}
