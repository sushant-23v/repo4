import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const categories = [
  {
    name: 'Espresso Bar',
    items: [
      { name: 'Espresso', desc: 'Bold single shot of pure intensity.', price: '$3.00' },
      { name: 'Cappuccino', desc: 'Espresso with steamed milk and silky foam.', price: '$4.50' },
      { name: 'Caffè Latte', desc: 'Smooth espresso with creamy steamed milk.', price: '$4.75' },
      { name: 'Flat White', desc: 'Velvety microfoam over a double shot.', price: '$4.75' },
    ],
  },
  {
    name: 'Slow & Cold',
    items: [
      { name: 'Pour-Over', desc: 'Hand-brewed single origin, bright and clean.', price: '$5.00' },
      { name: 'Cold Brew', desc: 'Steeped 18 hours for a smooth, low-acid cup.', price: '$4.50' },
      { name: 'Iced Latte', desc: 'Chilled espresso over milk and ice.', price: '$5.00' },
      { name: 'Nitro Cold Brew', desc: 'Creamy, cascading, naturally sweet.', price: '$5.50' },
    ],
  },
  {
    name: 'Bakery',
    items: [
      { name: 'Butter Croissant', desc: 'Flaky, golden, baked fresh daily.', price: '$3.50' },
      { name: 'Cinnamon Roll', desc: 'Warm, gooey, with cream cheese glaze.', price: '$4.25' },
      { name: 'Banana Bread', desc: 'Moist, walnut-studded, lightly spiced.', price: '$3.75' },
      { name: 'Almond Biscotti', desc: 'Crisp and perfect for dunking.', price: '$2.50' },
    ],
  },
]

export default function MenuPage() {
  return (
    <div>
      <section className="relative py-24">
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Coffee and pastries"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16 text-center text-cream-paper">
          <h1 className="text-4xl md:text-5xl font-bold">Our Menu</h1>
          <p className="mt-4 text-cream max-w-xl mx-auto">
            Handcrafted drinks and house-baked treats — made fresh, served warm.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <SectionHeading title={cat.name} />
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {cat.items.map((item) => (
                  <Card key={item.name} className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-espresso-dark">{item.name}</h3>
                      <p className="mt-1 text-espresso-light">{item.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-amber/20 px-3 py-1 text-sm font-semibold text-amber-dark">
                      {item.price}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
