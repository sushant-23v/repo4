export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-warm bg-cream-paper shadow-warm-sm transition-shadow hover:shadow-warm ${className}`}
    >
      {children}
    </div>
  )
}
