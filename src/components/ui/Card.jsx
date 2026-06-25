export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-cream-paper border border-espresso/10 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  )
}
