import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const team = [
  {
    name: 'Mia Carter',
    role: 'Founder & Head Roaster',
    img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Leo Nguyen',
    role: 'Lead Barista',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sara Lopez',
    role: 'Pastry Chef',
    img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Brewing Community Since 2014"
              subtitle="Desxto Coffee began as a small corner cart with a big dream: to make exceptional coffee that brings people together."
            />
            <p className="mt-6 text-espresso-light">
              What started with a single espresso machine has grown into a beloved neighborhood gathering place. We've
              stayed true to our roots — sourcing thoughtfully, roasting carefully, and serving with genuine warmth.
            </p>
            <p className="mt-4 text-espresso-light">
              Every cup we pour carries our commitment to quality, sustainability, and the simple joy of a good
              conversation over great coffee.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Coffee shop counter"
            loading="lazy"
            className="rounded-2xl shadow-md w-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading center eyebrow="The People" title="Meet Our Team" subtitle="The friendly faces behind your favorite cup." />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name} className="overflow-hidden text-center">
                <img src={m.img} alt={m.name} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-espresso-dark">{m.name}</h3>
                  <p className="mt-1 text-amber-dark">{m.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-8 md:grid-cols-3">
          {[
            { num: '10+', label: 'Years Brewing' },
            { num: '50k+', label: 'Cups Served Monthly' },
            { num: '4.9', label: 'Average Rating' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-amber-dark">{s.num}</p>
              <p className="mt-2 text-espresso-light">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
