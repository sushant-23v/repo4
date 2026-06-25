import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const featured = [
  {
    name: 'Signature Espresso',
    desc: 'Rich, velvety shots pulled from our house espresso blend with notes of dark chocolate.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Velvet Latte',
    desc: 'Silky steamed milk poured over a double shot for a warm, comforting cup.',
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Fresh Pastries',
    desc: 'Baked in-house every morning — flaky croissants, muffins and warm cinnamon rolls.',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative flex min-h-screen items-center">
        <img
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cozy coffee shop interior with warm lighting"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/70" />
        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-warm">
              Warm &amp; Cozy Since Day One
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-cream md:text-6xl">
              Every cup feels like coming home
            </h1>
            <p className="mt-6 text-lg text-cream/90">
              At Desxto Coffee we handcraft each drink with carefully sourced beans, slow roasted
              for a smooth, comforting flavor. Pull up a chair and stay a while.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/menu">Explore the Menu</Button>
              <Button to="/about" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-espresso">
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="What we brew"
          title="Crafted favorites you'll love"
          subtitle="From bold espresso to buttery pastries, every item is made fresh and served with a smile."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((f) => (
            <Card key={f.name} className="overflow-hidden">
              <img src={f.img} alt={f.name} loading="lazy" className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-espresso">{f.name}</h3>
                <p className="mt-2 text-sm text-espresso-light">{f.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-cream-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:grid-cols-2">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Barista pouring latte art"
            loading="lazy"
            className="rounded-warm shadow-warm"
          />
          <div>
            <SectionHeading
              eyebrow="Our promise"
              title="Beans with a story, brewed with care"
              subtitle="We partner directly with small farms to bring you ethically sourced beans, then roast them in small batches to lock in flavor."
            />
            <ul className="mt-6 space-y-3 text-espresso-light">
              <li className="flex items-start gap-3"><span className="text-amber-dark">●</span> Single-origin and signature house blends</li>
              <li className="flex items-start gap-3"><span className="text-amber-dark">●</span> Roasted in small batches for freshness</li>
              <li className="flex items-start gap-3"><span className="text-amber-dark">●</span> Warm, welcoming space to work or relax</li>
            </ul>
            <div className="mt-8">
              <Button to="/about" variant="secondary">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-espresso">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold text-cream md:text-4xl">Come visit Desxto Coffee today</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Whether it's your morning ritual or an afternoon treat, we've saved a cozy seat just for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Find Us</Button>
            <Button to="/menu" variant="outline" className="border-cream text-cream hover:bg-cream hover:text-espresso">
              See Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
