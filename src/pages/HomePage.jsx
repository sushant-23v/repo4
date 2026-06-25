import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  {
    title: 'Single-Origin Beans',
    desc: 'Sourced from family farms and roasted in small batches for a rich, balanced cup every time.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cup of single-origin coffee',
  },
  {
    title: 'Cozy Atmosphere',
    desc: 'Warm wood, soft lighting, and comfy seating — the perfect spot to work, read, or catch up.',
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cozy coffee shop interior',
  },
  {
    title: 'Fresh Pastries',
    desc: 'Baked in-house daily to pair perfectly with your espresso, latte, or pour-over.',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fresh pastries on display',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Barista pouring latte art"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-24 text-cream-paper">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">Desxto Coffee</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Warm, Cozy &amp; Freshly Brewed Every Single Day
          </h1>
          <p className="mt-6 text-lg text-cream max-w-xl">
            Step into our neighborhood coffee shop where every cup is crafted with care, and every visit feels like home.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/menu" variant="primary">Explore the Menu</Button>
            <Button to="/contact" variant="outline" className="border-cream-paper text-cream-paper hover:bg-cream-paper hover:text-espresso-dark">
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            center
            eyebrow="Why Desxto"
            title="Crafted with Care, Served with Warmth"
            subtitle="From bean to cup, we obsess over the details so you can simply sit back and savor the moment."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title} className="overflow-hidden">
                <img src={f.img} alt={f.alt} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-espresso-dark">{f.title}</h3>
                  <p className="mt-2 text-espresso-light">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 lg:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Coffee being brewed"
            loading="lazy"
            className="rounded-2xl shadow-md w-full object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Our Promise"
              title="A Better Cup Starts Here"
              subtitle="We believe great coffee should be accessible, ethical, and unforgettable. That's the Desxto difference."
            />
            <ul className="mt-6 space-y-3 text-espresso">
              <li className="flex gap-3"><span className="text-amber-dark">&#10003;</span> Ethically sourced, fair-trade beans</li>
              <li className="flex gap-3"><span className="text-amber-dark">&#10003;</span> Roasted fresh in small batches</li>
              <li className="flex gap-3"><span className="text-amber-dark">&#10003;</span> Friendly baristas who know your order</li>
            </ul>
            <div className="mt-8">
              <Button to="/about" variant="secondary">Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-8 lg:px-16">
          <div className="rounded-3xl bg-espresso text-cream-paper px-8 py-12 md:px-16 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Your Cozy Corner Awaits</h2>
            <p className="mt-4 text-cream max-w-xl mx-auto">
              Drop by for a freshly brewed cup, a warm pastry, and a comfortable seat. We can't wait to welcome you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="primary">Find Our Location</Button>
              <Button to="/menu" variant="outline" className="border-cream-paper text-cream-paper hover:bg-cream-paper hover:text-espresso-dark">
                See the Menu
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
