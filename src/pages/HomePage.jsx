import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const highlights = [
  {
    title: 'Beach Relaxation',
    desc: 'Slow mornings, golden sunsets, and plenty of unhurried time by the sea on Goa\'s most romantic shores.',
    img: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Nightlife & Beach Party',
    desc: 'A curated weekday beach party (Mon–Thu) plus laid-back beach shacks and lounge bars after dark.',
    img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Food Experiences',
    desc: 'Fresh seafood, Goan thalis, beachside cafés and a couple of special candlelit dinners for two.',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const stats = [
  { value: '8', label: 'Days' },
  { value: '7', label: 'Nights' },
  { value: '2', label: 'Travelers' },
  { value: '₹1L', label: 'Total Budget' },
]

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center">
        <img
          src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Sunset over a tropical Goa beach"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-24 text-white">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-orange-300">
            Pune → Goa · 30 Jul – 06 Aug 2026
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Sushant & Sonali's Romantic Goa Escape
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Eight sun-soaked days of beach relaxation, nightlife, and incredible food — thoughtfully
            planned to stay within a ₹1,00,000 budget for two.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button to="/itinerary">See the Day-by-Day Plan</Button>
            <Button to="/budget" variant="outline">View the Budget</Button>
          </div>
        </div>
      </section>

      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm text-orange-100 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Trip Vibe"
            title="Built around the moments that matter"
            subtitle="This getaway is shaped by four things you both love — romance, the beach, a great night out, and unforgettable meals."
            center
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {highlights.map((h) => (
              <Card key={h.title} className="overflow-hidden">
                <img src={h.img} alt={h.title} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{h.title}</h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="Planned With Care"
              title="A balanced rhythm, not a rushed checklist"
              subtitle="Day 1 keeps things gentle for arrival fatigue, the final day handles checkout and departure smoothly, and high-energy days alternate with relaxed ones."
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-orange-500">✓</span> Nearby activities clustered to minimize travel time</li>
              <li className="flex gap-3"><span className="text-orange-500">✓</span> Weekday beach party scheduled (Mon–Thu) as requested</li>
              <li className="flex gap-3"><span className="text-orange-500">✓</span> Breakfast, lunch and dinner spots for each day</li>
              <li className="flex gap-3"><span className="text-orange-500">✓</span> Built-in free time for spontaneity and rest</li>
            </ul>
            <div className="mt-8">
              <Button to="/itinerary" variant="ghost">Explore the Itinerary</Button>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Beachside dining experience in Goa"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to relive the plan?</h2>
          <p className="mt-4 text-gray-600">
            Everything from the budget breakdown to the day-by-day flow is here. Dive in and get excited.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/itinerary">View Itinerary</Button>
            <Button to="/contact" variant="ghost">Plan Adjustments</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
