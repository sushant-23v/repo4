import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...rest }) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition-colors'
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-600',
    outline: 'border border-white/70 text-white hover:bg-white hover:text-gray-900',
    ghost: 'border border-orange-500 text-orange-600 hover:bg-orange-50',
  }
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
