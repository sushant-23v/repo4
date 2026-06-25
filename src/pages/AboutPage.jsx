import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const team = [
  {
    name: 'Maria Lopez',
    role: 'Head Barista',
    img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'James Carter',
    role: 'Master Roaster',
    img: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Aisha Khan',
    role: 'Pastry Chef',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Our Story"
            title="Brewed in Bean City Since 2015"
            subtitle="Desxto Coffee began with a simple dream: a warm, welcoming space where great coffee and good company come together."
          />
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <img
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Coffee shop counter"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="space-y-4 text-espresso-light leading-relaxed text-lg">
              <p>What started as a tiny corner roastery has grown into a beloved neighborhood gathering place. We still roast our beans in small batches, just like day one.</p>
              <p>Every recipe, every blend, and every cozy corner is designed around one idea: making you feel right at home.</p>
              <p>We partner directly with sustainable farms to bring you ethically sourced coffee that tastes as good as it feels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
          <SectionHeading eyebrow="The People" title="Meet Our Team" subtitle="The friendly faces behind every perfect cup." />
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name}>
                <img src={m.img} alt={m.name} loading="lazy" className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-espresso">{m.name}</h3>
                  <p className="mt-1 text-amber-dark font-medium">{m.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
