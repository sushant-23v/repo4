import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const travelers = [
  { name: 'Sushant', age: 36, diet: 'Non-vegetarian' },
  { name: 'Sonali', age: 33, diet: 'Non-vegetarian' },
]

const facts = [
  { label: 'Origin City', value: 'Pune' },
  { label: 'Departure', value: '30 July 2026' },
  { label: 'Return', value: '06 August 2026' },
  { label: 'Duration', value: '7 nights / 8 days' },
  { label: 'Trip Style', value: 'Mid-range, romantic' },
  { label: 'Total Budget', value: 'INR 1,00,000 (both)' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1600"
          alt="Scenic coastal view"
          loading="lazy"
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full text-white">
            <h1 className="text-4xl md:text-5xl font-bold">About This Trip</h1>
            <p className="mt-4 max-w-xl text-gray-200">
              The foundation of a perfectly planned romantic getaway — the travelers, the dates, and
              the vision behind every choice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SectionHeading
              eyebrow="The Couple"
              title="A getaway designed for two"
              subtitle="Sushant and Sonali are headed to Goa for romance, relaxation, lively nights, and great food. Both are non-vegetarian, so seafood and Goan specialties take center stage."
            />
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {travelers.map((t) => (
                <Card key={t.name} className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                  <p className="mt-1 text-gray-500 text-sm">Age {t.age}</p>
                  <p className="mt-3 text-sm text-gray-600">Dietary preference: {t.diet}</p>
                </Card>
              ))}
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Romantic beach scene"
            loading="lazy"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading eyebrow="Trip Fundamentals" title="The essential details" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <Card key={f.label} className="p-6">
                <div className="text-sm uppercase tracking-wider text-orange-600 font-semibold">{f.label}</div>
                <div className="mt-2 text-lg font-semibold text-gray-900">{f.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Special Request" title="A weekday beach party" />
          <p className="mt-6 text-gray-600 leading-relaxed">
            One key wish shaped the nightlife planning: a beach party on a weekday (Monday to Thursday).
            Weekday parties tend to be more relaxed and better value, so this slots neatly into the
            itinerary without straining the activities and nightlife budget of INR 10,000.
          </p>
        </div>
      </section>
    </div>
  )
}
