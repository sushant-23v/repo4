import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const days = [
  {
    day: 'Day 1 · Thu 30 Jul',
    title: 'Arrival & Easy Evening',
    energy: 'Relaxed',
    img: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Depart Pune, travel to Goa and reach the stay. Settle in, unpack, and recover from travel fatigue.',
    afternoon: 'Light lunch near the accommodation, then a slow walk along the closest beach.',
    evening: 'Relaxed seafood dinner at a beach shack. Early night to recharge.',
    food: 'Lunch: café near stay · Dinner: beachside shack (fresh catch)',
    transport: 'Pre-booked airport/station transfer to stay (~45–60 min).',
  },
  {
    day: 'Day 2 · Fri 31 Jul',
    title: 'North Goa Beaches',
    energy: 'Balanced',
    img: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Breakfast at a popular café, then explore a cluster of north Goa beaches.',
    afternoon: 'Beach time, sunbathing, and a long relaxed lunch by the sea.',
    evening: 'Sunset point, followed by a romantic dinner at a well-reviewed restaurant.',
    food: 'Breakfast: artisan café · Lunch: beach restaurant · Dinner: candlelit Goan dinner',
    transport: 'Scooter rental for the day — flexible and budget-friendly.',
  },
  {
    day: 'Day 3 · Sat 01 Aug',
    title: 'Water Activities Day',
    energy: 'High energy',
    img: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Water activities such as a surfing lesson or watersports combo (within activity budget).',
    afternoon: 'Refuel with a hearty lunch, then downtime by the pool or beach.',
    evening: 'Casual dinner and a stroll through a lively beach market.',
    food: 'Breakfast: at stay · Lunch: shack thali · Dinner: market-side eatery',
    transport: 'Scooter + short taxi to the activity point.',
  },
  {
    day: 'Day 4 · Sun 02 Aug',
    title: 'Slow & Romantic',
    energy: 'Relaxed',
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Sleep in. Late, leisurely breakfast. No agenda.',
    afternoon: 'Spa or quiet beach hours, plus a bit of café-hopping.',
    evening: 'A special candlelit dinner — one of the trip\'s nicer meals for two.',
    food: 'Brunch: café · Dinner: premium romantic restaurant',
    transport: 'Mostly on foot / short taxi rides.',
  },
  {
    day: 'Day 5 · Mon 03 Aug',
    title: 'Weekday Beach Party',
    energy: 'High energy',
    img: 'https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Relaxed start to save energy for the night ahead.',
    afternoon: 'Beach lounging and a light, fun lunch.',
    evening: 'The requested weekday beach party — entry and drinks budgeted carefully within nightlife funds.',
    food: 'Lunch: shack · Dinner: party venue / late-night bites',
    transport: 'Taxi both ways for a safe late-night return.',
  },
  {
    day: 'Day 6 · Tue 04 Aug',
    title: 'South Goa Calm',
    energy: 'Relaxed',
    img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Recovery morning, then head toward quieter south Goa beaches.',
    afternoon: 'Peaceful beach time and a seafood lunch with a view.',
    evening: 'Quiet dinner and an early, restful night.',
    food: 'Lunch: seaside seafood · Dinner: relaxed local restaurant',
    transport: 'Day taxi or scooter for the south stretch.',
  },
  {
    day: 'Day 7 · Wed 05 Aug',
    title: 'Food, Shopping & Sunset',
    energy: 'Balanced',
    img: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Breakfast, then souvenir and gift shopping (kept within the shopping budget).',
    afternoon: 'Favorite-café revisit and last-minute beach time.',
    evening: 'Final sunset together and a memorable farewell dinner.',
    food: 'Breakfast: café · Lunch: street eats · Dinner: farewell seafood feast',
    transport: 'Scooter + walking around shopping areas.',
  },
  {
    day: 'Day 8 · Thu 06 Aug',
    title: 'Checkout & Departure',
    energy: 'Relaxed',
    img: 'https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&w=600',
    morning: 'Relaxed breakfast, pack up, and check out on time.',
    afternoon: 'Buffer time for transfer to station/airport and the journey back to Pune.',
    evening: 'Arrive home with full hearts and a camera roll of memories.',
    food: 'Breakfast: at stay · Travel snacks en route',
    transport: 'Pre-arranged transfer to departure point.',
  },
]

const energyColor = {
  Relaxed: 'bg-green-100 text-green-700',
  Balanced: 'bg-blue-100 text-blue-700',
  'High energy': 'bg-orange-100 text-orange-700',
}

export default function ItineraryPage() {
  return (
    <div>
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-400">Phase 3</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Day-by-Day Itinerary</h1>
          <p className="mt-4 max-w-2xl text-gray-300">
            A balanced 8-day flow that alternates high-energy and relaxed days, clusters nearby spots
            to reduce travel, and keeps activities, food, and local transport within budget.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-8">
          {days.map((d) => (
            <Card key={d.day} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-0">
                <img src={d.img} alt={d.title} loading="lazy" className="w-full h-56 md:h-full object-cover" />
                <div className="md:col-span-2 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-semibold text-orange-600">{d.day}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${energyColor[d.energy]}`}>
                      {d.energy}
                    </span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">{d.title}</h3>
                  <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-900">Morning</div>
                      <p className="mt-1 text-gray-600">{d.morning}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Afternoon</div>
                      <p className="mt-1 text-gray-600">{d.afternoon}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Evening</div>
                      <p className="mt-1 text-gray-600">{d.evening}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <p><span className="font-semibold text-gray-900">Food:</span> {d.food}</p>
                    <p><span className="font-semibold text-gray-900">Transport:</span> {d.transport}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <SectionHeading eyebrow="Want changes?" title="Tweak any day to your liking" center />
          <div className="mt-8">
            <Button to="/contact">Suggest an Adjustment</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
