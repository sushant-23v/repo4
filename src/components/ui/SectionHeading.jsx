export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-dark">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-espresso md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-espresso-light">{subtitle}</p>}
    </div>
  )
}
