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
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-amber-dark' : 'text-espresso hover:text-amber-dark'
    }`

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream-paper/80 backdrop-blur border-b border-espresso/10">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-espresso text-cream-paper font-bold">D</span>
            <span className="text-xl font-bold text-espresso-dark">Desxto Coffee</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-3 rounded-full bg-amber px-5 py-2 text-sm font-semibold text-espresso-dark hover:bg-amber-dark transition-colors"
            >
              Visit Us
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-espresso hover:bg-cream"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-espresso transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 bg-espresso transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-espresso transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-espresso/10 bg-cream-paper">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? 'bg-cream text-amber-dark' : 'text-espresso hover:bg-cream'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-amber px-3 py-2 text-center text-base font-semibold text-espresso-dark"
            >
              Visit Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
