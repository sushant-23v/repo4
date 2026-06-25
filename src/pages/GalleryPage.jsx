import SectionHeading from '../components/ui/SectionHeading'

const photos = [
  { id: 699953, alt: 'Latte art being poured' },
  { id: 1640777, alt: 'Cup of coffee on table' },
  { id: 1640772, alt: 'Coffee shop interior' },
  { id: 958545, alt: 'Fresh pastries' },
  { id: 312418, alt: 'Coffee beans close up' },
  { id: 374885, alt: 'Cozy cafe corner' },
]

export default function GalleryPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            center
            eyebrow="Gallery"
            title="A Peek Inside Desxto"
            subtitle="Moments from our cozy corner — the coffee, the bakes, and the spaces you love."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-2xl shadow-sm">
                <img
                  src={`https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                  alt={p.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
