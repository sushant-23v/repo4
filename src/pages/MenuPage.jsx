import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const menu = {
  Espresso: [
    { name: 'Espresso', desc: 'Rich, bold single shot', price: '$3.0' },
    { name: 'Cappuccino', desc: 'Espresso, steamed milk, foam', price: '$4.2' },
    { name: 'Flat White', desc: 'Velvety microfoam, double shot', price: '$4.5' },
    { name: 'Mocha', desc: 'Espresso, chocolate, steamed milk', price: '$4.8' },
  ],
  Brewed: [
    { name: 'Pour Over', desc: 'Single-origin, hand poured', price: '$4.0' },
    { name: 'Cold Brew', desc: 'Slow-steeped 18 hours', price: '$4.5' },
    { name: 'Drip Coffee', desc: 'House blend, bottomless', price: '$3.2' },
  ],
  Treats: [
    { name: 'Almond Croissant', desc: 'Buttery, flaky, baked fresh', price: '$3.8' },
    { name: 'Banana Bread', desc: 'House recipe, warm slice', price: '$3.5' },
    { name: 'Cinnamon Roll', desc: 'Glazed, gooey center', price: '$4.0' },
  ],
}

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <SectionHeading
        center
        eyebrow="Our Menu"
        title="Made fresh, every single cup"
        subtitle="From velvety lattes to slow-steeped cold brew and warm pastries — there's a little something for everyone."
      />
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {Object.entries(menu).map(([category, items]) => (
          <Card key={category} className="p-6">
            <h3 className="text-xl font-bold text-espresso-dark border-b border-espresso/10 pb-3">{category}</h3>
            <ul className="mt-4 space-y-4">
              {items.map((item) => (
                <li key={item.name} className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-espresso">{item.name}</p>
                    <p className="text-sm text-espresso-light">{item.desc}</p>
                  </div>
                  <span className="font-semibold text-amber-dark whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-2xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Assorted coffee drinks and pastries"
          loading="lazy"
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>
    </div>
  )
}
