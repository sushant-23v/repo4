export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-dark mb-2">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-espresso">{title}</h2>
      {subtitle && <p className="mt-4 text-espresso-light text-lg leading-relaxed">{subtitle}</p>}
    </div>
  )
}
