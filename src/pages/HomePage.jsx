import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  {
    title: 'Freshly Roasted',
    text: 'Single-origin beans roasted in small batches every week for peak aroma and flavor.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cozy Atmosphere',
    text: 'Warm wood, soft light, and comfy corners — the perfect spot to slow down and sip.',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Crafted by Baristas',
    text: 'Every cup is hand-prepared by our passionate baristas who love what they pour.',
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cup of freshly brewed coffee on a wooden table"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">Desxto Coffee</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-paper max-w-3xl">
            Where every cup feels like home
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/90">
            Warm espresso, slow mornings, and a friendly face behind the counter. Pull up a chair and stay a while.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/menu">Explore the Menu</Button>
            <Button to="/contact" variant="outline" className="text-paper border-paper/40 hover:bg-paper/10">
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <SectionHeading
          center
          eyebrow="Why Desxto"
          title="A little ritual worth slowing down for"
          subtitle="We obsess over the details so your coffee break feels effortless and genuinely good."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="overflow-hidden">
              <img src={f.img} alt={f.title} loading="lazy" className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-espresso-dark">{f.title}</h3>
                <p className="mt-2 text-espresso-light">{f.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24 grid gap-12 md:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Barista pouring latte art"
            loading="lazy"
            className="rounded-2xl shadow-lg shadow-espresso/15 w-full object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Our Promise"
              title="Good coffee, made with care"
              subtitle="From the first roast to the last sip, we believe great coffee brings people together."
            />
            <ul className="mt-6 space-y-3 text-espresso">
              <li className="flex gap-3"><span className="text-amber-dark">●</span> Ethically sourced beans</li>
              <li className="flex gap-3"><span className="text-amber-dark">●</span> House-made syrups &amp; pastries</li>
              <li className="flex gap-3"><span className="text-amber-dark">●</span> Free Wi-Fi and cozy seating</li>
            </ul>
            <div className="mt-8">
              <Button to="/about" variant="secondary">Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cozy coffee shop interior"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/75" />
        <div className="relative mx-auto max-w-3xl px-4 md:px-8 lg:px-16 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-paper">Stop by for your next favorite cup</h2>
          <p className="mt-4 text-cream/90">Open daily 7am–9pm. We'll keep the kettle warm.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/contact">Find Us</Button>
            <Link to="/menu" className="inline-flex items-center justify-center rounded-xl border border-paper/40 px-6 py-3 text-sm font-semibold text-paper hover:bg-paper/10">
              See the Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
