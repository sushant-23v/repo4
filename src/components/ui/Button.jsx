import { Link } from 'react-router-dom'

export default function Button({ children, to, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none'
  const variants = {
    primary: 'bg-amber text-espresso-dark hover:bg-amber-dark',
    secondary: 'bg-espresso text-cream-paper hover:bg-espresso-dark',
    outline: 'border border-espresso text-espresso hover:bg-espresso hover:text-cream-paper',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
