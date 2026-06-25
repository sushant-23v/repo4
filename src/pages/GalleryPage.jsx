import SectionHeading from '../components/ui/SectionHeading'

const photos = [
  { id: 699953, alt: 'Coffee cup on table' },
  { id: 1640777, alt: 'Cozy cafe corner' },
  { id: 1640772, alt: 'Latte being poured' },
  { id: 958545, alt: 'Coffee beans' },
  { id: 1366919, alt: 'Latte art' },
  { id: 1181671, alt: 'Cafe counter' },
  { id: 33109, alt: 'Coffee setup' },
  { id: 346529, alt: 'Warm interior' },
  { id: 417074, alt: 'Coffee ambiance' },
]

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Gallery"
          title="A Peek Inside Desxto"
          subtitle="Warm light, rich aromas, and cozy corners — take a look around."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-2xl shadow-md">
              <img
                src={`https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={p.alt}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
