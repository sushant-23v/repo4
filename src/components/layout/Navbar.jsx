import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
      isActive
        ? 'text-amber-dark bg-paper'
        : 'text-espresso hover:text-amber-dark hover:bg-paper/60'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/80 backdrop-blur border-b border-espresso/10">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso text-paper font-bold">D</span>
            <span className="text-lg font-bold text-espresso-dark">Desxto Coffee</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-espresso-dark hover:bg-amber-dark transition-colors"
            >
              Visit Us
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-espresso hover:bg-paper"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-espresso/10 bg-cream">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-base font-medium ${
                    isActive ? 'text-amber-dark bg-paper' : 'text-espresso hover:bg-paper'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-amber px-3 py-2 text-center text-base font-semibold text-espresso-dark"
            >
              Visit Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
