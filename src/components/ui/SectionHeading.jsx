export default function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-orange-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-gray-600">{subtitle}</p>}
    </div>
  )
}
