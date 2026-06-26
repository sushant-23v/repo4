import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const breakdown = [
  { cat: 'Intercity transport', amount: 18000, range: '12,000 – 30,000', note: 'Train + transfers, or a budget flight deal booked early.' },
  { cat: 'Accommodation', amount: 35000, range: '24,000 – 45,000', note: '~₹5,000/night for a clean, romantic mid-range stay.' },
  { cat: 'Food & drinks', amount: 18000, range: '12,000 – 24,000', note: 'Cafés, seafood meals, and a few special dinners.' },
  { cat: 'Activities & nightlife', amount: 10000, range: '6,000 – 18,000', note: 'Beach party entry, watersports, paid experiences.' },
  { cat: 'Local transport', amount: 7000, range: '4,000 – 10,000', note: 'Scooter rental plus taxis for late-night returns.' },
  { cat: 'Shopping & souvenirs', amount: 4000, range: '0 – 10,000', note: 'Flexible bucket for gifts and keepsakes.' },
  { cat: 'Contingency', amount: 8000, range: '8,000 – 12,000', note: 'About 8% reserve to absorb surprises.' },
]

const total = breakdown.reduce((s, b) => s + b.amount, 0)
const inr = (n) => 'INR ' + n.toLocaleString('en-IN')

export default function BudgetPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Minimal abstract planning background"
          loading="lazy"
          className="w-full h-72 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full text-white">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-300">Phase 1</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold">Budget Planning</h1>
            <p className="mt-4 max-w-xl text-gray-200">INR 1,00,000 total for two — allocated for a comfortable mid-range romantic Goa trip.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading
            eyebrow="Strategy"
            title="Protect what matters, stay disciplined"
            subtitle="The approach protects accommodation quality, keeps intercity transport efficient, allows a few special dining and nightlife moments, and holds a modest contingency reserve."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white text-sm">
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold text-right">Allocation</th>
                  <th className="px-4 py-3 font-semibold">Realistic Goa Range (INR)</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {breakdown.map((b, i) => (
                  <tr key={b.cat} className={i % 2 ? 'bg-orange-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{b.cat}</td>
                    <td className="px-4 py-3 text-right text-gray-900">{inr(b.amount)}</td>
                    <td className="px-4 py-3 text-gray-600">{b.range}</td>
                    <td className="px-4 py-3 text-gray-600">{b.note}</td>
                  </tr>
                ))}
                <tr className="bg-orange-500 text-white font-semibold">
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3 text-right">{inr(total)}</td>
                  <td className="px-4 py-3" colSpan={2}>For 2 travelers · 7 nights · mid-range</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <SectionHeading eyebrow="Key Decisions" title="How the budget was locked" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              'Budget confirmed at INR 1,00,000 total for both travelers, in INR.',
              'Positioned as a mid-range trip rather than luxury.',
              'Accommodation prioritized first, then transport and food.',
              'Contingency kept at INR 8,000 to preserve core categories.',
              'Activities & nightlife capped at INR 10,000.',
              'Local transport held at INR 7,000 for scooter + taxis.',
            ].map((d) => (
              <Card key={d} className="p-6">
                <p className="text-gray-700 text-sm leading-relaxed">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
