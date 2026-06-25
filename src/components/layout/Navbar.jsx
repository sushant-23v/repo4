import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-amber-warm ${
      isActive ? 'text-amber-warm' : 'text-cream'
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-espresso/90 backdrop-blur-md shadow-warm-sm">
      <nav className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-cream">
              Desxto<span className="text-amber-warm"> Coffee</span>
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/menu"
              className="rounded-warm bg-amber-warm px-4 py-2 text-sm font-semibold text-espresso-dark transition-colors hover:bg-amber-light"
            >
              Order Now
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-cream md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-espresso-dark border-t border-cream/10">
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-medium ${isActive ? 'text-amber-warm' : 'text-cream'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-warm bg-amber-warm px-4 py-2 text-center text-sm font-semibold text-espresso-dark"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
