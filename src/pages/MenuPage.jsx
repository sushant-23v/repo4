import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const sections = [
  {
    name: 'Espresso',
    items: [
      { name: 'Espresso', desc: 'A bold, concentrated single shot', price: '$3.00' },
      { name: 'Macchiato', desc: 'Espresso marked with a dollop of foam', price: '$3.75' },
      { name: 'Cortado', desc: 'Equal parts espresso and steamed milk', price: '$4.00' },
    ],
  },
  {
    name: 'Milk Drinks',
    items: [
      { name: 'Velvet Latte', desc: 'Silky steamed milk over a double shot', price: '$4.75' },
      { name: 'Cappuccino', desc: 'Espresso topped with airy foam', price: '$4.50' },
      { name: 'Flat White', desc: 'Microfoam poured over ristretto shots', price: '$4.75' },
    ],
  },
  {
    name: 'Brew & Cold',
    items: [
      { name: 'Pour Over', desc: 'Single-origin, hand-poured to order', price: '$5.00' },
      { name: 'Cold Brew', desc: 'Slow-steeped 18 hours, smooth & bold', price: '$4.50' },
      { name: 'Iced Latte', desc: 'Chilled espresso over fresh milk', price: '$4.75' },
    ],
  },
  {
    name: 'Bakery',
    items: [
      { name: 'Butter Croissant', desc: 'Flaky and freshly baked daily', price: '$3.50' },
      { name: 'Cinnamon Roll', desc: 'Warm, gooey and lightly glazed', price: '$4.25' },
      { name: 'Blueberry Muffin', desc: 'Bursting with real blueberries', price: '$3.75' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div>
      <section className="bg-espresso">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 text-center">
          <h1 className="text-4xl font-bold text-cream md:text-5xl">Our Menu</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Handcrafted coffee and freshly baked treats — there's something cozy for everyone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {sections.map((s) => (
            <Card key={s.name} className="p-8">
              <SectionHeading title={s.name} />
              <ul className="mt-6 divide-y divide-espresso/10">
                {s.items.map((item) => (
                  <li key={item.name} className="flex items-start justify-between gap-4 py-4">
                    <div>
                      <p className="font-semibold text-espresso">{item.name}</p>
                      <p className="text-sm text-espresso-light">{item.desc}</p>
                    </div>
                    <span className="whitespace-nowrap font-semibold text-amber-dark">{item.price}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
