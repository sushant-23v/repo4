export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl bg-paper shadow-md shadow-espresso/10 border border-espresso/5 overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  )
}
