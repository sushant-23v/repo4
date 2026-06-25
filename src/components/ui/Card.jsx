export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-paper shadow-sm shadow-espresso/10 border border-espresso/5 transition-shadow hover:shadow-lg hover:shadow-espresso/15 ${className}`}
    >
      {children}
    </div>
  )
}
