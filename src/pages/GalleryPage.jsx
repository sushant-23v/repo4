import SectionHeading from '../components/ui/SectionHeading'

const images = [
  { id: '1640777', alt: 'Latte with foam art' },
  { id: '1640772', alt: 'Coffee shop counter' },
  { id: '699953', alt: 'Barista pouring coffee' },
  { id: '958545', alt: 'Cozy cafe interior' },
  { id: '3109807', alt: 'Coffee beans close up' },
  { id: '2312369', alt: 'Minimal coffee setup' },
]

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <SectionHeading
        center
        eyebrow="Gallery"
        title="A peek inside Desxto"
        subtitle="The warmth, the aroma, the little moments — here's a glimpse of life at our coffee shop."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <div key={img.id} className="overflow-hidden rounded-2xl">
            <img
              src={`https://images.pexels.com/photos/${img.id}/pexels-photo-${img.id}.jpeg?auto=compress&cs=tinysrgb&w=600`}
              alt={img.alt}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
