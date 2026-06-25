import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const team = [
  {
    name: 'Mara Quinn',
    role: 'Head Barista',
    img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Diego Santos',
    role: 'Roast Master',
    img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Aisha Bello',
    role: 'Pastry Chef',
    img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <SectionHeading
          eyebrow="Our Story"
          title="Brewed with love since day one"
          subtitle="Desxto Coffee started as a tiny corner cart with a big dream — to make the warmest coffee in town."
        />
        <div className="mt-12 grid gap-12 md:grid-cols-2 items-center">
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Coffee shop counter with beans and equipment"
            loading="lazy"
            className="rounded-2xl shadow-lg shadow-espresso/15 w-full object-cover"
          />
          <div className="space-y-4 text-espresso">
            <p>
              What began with a single hand-grinder and a passion for the perfect pour has grown into a
              neighborhood favorite. We still roast in small batches and greet every regular by name.
            </p>
            <p>
              Our espresso brown counters, warm amber light, and soft music are all designed to slow
              the world down for a moment. Because coffee was never really about the rush.
            </p>
            <p>
              Whether you're here for a quick cortado or an afternoon of work, you're always welcome at Desxto.
            </p>
            <Button to="/contact" variant="secondary">Come Say Hello</Button>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <SectionHeading center eyebrow="The Crew" title="Meet the people behind the counter" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name} className="overflow-hidden text-center">
                <img src={m.img} alt={m.name} loading="lazy" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-espresso-dark">{m.name}</h3>
                  <p className="text-amber-dark">{m.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
