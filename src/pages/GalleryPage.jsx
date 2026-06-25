import SectionHeading from '../components/ui/SectionHeading'

const photos = [
  { id: 1640777, alt: 'Latte with foam art on a wooden table' },
  { id: 699953, alt: 'Warm cafe interior with hanging lights' },
  { id: 958545, alt: 'Tray of fresh pastries' },
  { id: 1640772, alt: 'Barista pouring milk into espresso' },
  { id: 2566573, alt: 'Friends chatting over coffee' },
  { id: 3184405, alt: 'Cafe staff smiling behind the counter' },
]

export default function GalleryPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="A peek inside"
          title="The Desxto atmosphere"
          subtitle="Soft lighting, the aroma of fresh espresso, and a chair that always has your name on it."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p) => (
            <div key={p.id} className="overflow-hidden rounded-warm shadow-warm-sm">
              <img
                src={`https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                alt={p.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
