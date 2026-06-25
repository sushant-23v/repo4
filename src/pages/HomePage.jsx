import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const features = [
  {
    title: 'Freshly Roasted',
    desc: 'We roast our beans in small batches every week for peak flavor and aroma in every cup.',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Freshly roasted coffee beans',
  },
  {
    title: 'Cozy Atmosphere',
    desc: 'Warm lighting, soft seating, and a quiet corner for every mood — your home away from home.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Cozy coffee shop interior',
  },
  {
    title: 'Crafted with Love',
    desc: 'Our baristas pour their heart into every latte, pour-over, and pastry on the menu.',
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Barista crafting latte art',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Cup of coffee on a wooden table"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-paper leading-tight">
            Warm Coffee, <span className="text-amber">Cozy Moments</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/90 max-w-2xl mx-auto">
            Welcome to Desxto Coffee — where every cup is brewed with care and every visit feels like home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/menu" variant="primary">Explore Our Menu</Button>
            <Button to="/contact" variant="outline" className="!border-paper !text-paper hover:!bg-paper hover:!text-espresso">
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Why Desxto"
            title="More Than Just Coffee"
            subtitle="We believe great coffee brings people together. Here's what makes us special."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <img src={f.img} alt={f.alt} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-espresso">{f.title}</h3>
                  <p className="mt-3 text-espresso-light leading-relaxed">{f.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Latte with latte art"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
          <div>
            <SectionHeading
              center={false}
              eyebrow="Our Promise"
              title="Quality You Can Taste"
              subtitle="From ethically sourced beans to perfectly steamed milk, we obsess over the details so you can simply relax and enjoy."
            />
            <Button to="/about">Learn Our Story</Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-espresso">Ready for your next favorite cup?</h2>
          <p className="mt-4 text-lg text-espresso-light">Stop by today and discover what makes Desxto Coffee the cozy corner everyone loves.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/menu">See the Menu</Button>
            <Link to="/gallery" className="inline-flex items-center justify-center rounded-md border border-espresso px-6 py-3 text-sm font-semibold text-espresso hover:bg-espresso hover:text-paper transition-colors">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
