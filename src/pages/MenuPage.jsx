import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const categories = [
  {
    name: 'Espresso Drinks',
    items: [
      { name: 'Espresso', desc: 'Rich, bold single shot', price: '$3.00' },
      { name: 'Cappuccino', desc: 'Espresso with steamed milk foam', price: '$4.50' },
      { name: 'Caramel Latte', desc: 'Smooth espresso with caramel', price: '$5.25' },
      { name: 'Flat White', desc: 'Velvety microfoam over a double shot', price: '$4.75' },
    ],
    img: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Brewed & Cold',
    items: [
      { name: 'Pour Over', desc: 'Hand-poured single origin', price: '$4.00' },
      { name: 'Cold Brew', desc: 'Slow-steeped for 18 hours', price: '$4.50' },
      { name: 'Iced Mocha', desc: 'Chocolate, espresso & milk over ice', price: '$5.50' },
      { name: 'Nitro Coffee', desc: 'Creamy cold brew on tap', price: '$5.00' },
    ],
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Pastries & Bites',
    items: [
      { name: 'Butter Croissant', desc: 'Flaky and freshly baked', price: '$3.50' },
      { name: 'Blueberry Muffin', desc: 'Bursting with real berries', price: '$3.25' },
      { name: 'Cinnamon Roll', desc: 'Warm, gooey, glazed', price: '$4.00' },
      { name: 'Avocado Toast', desc: 'Sourdough, avocado, chili flakes', price: '$6.50' },
    ],
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export default function MenuPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Our Menu"
          title="Something for Every Craving"
          subtitle="From bold espresso to comforting pastries, every item is made fresh daily."
        />
        <div className="space-y-12">
          {categories.map((cat) => (
            <Card key={cat.name} className="hover:translate-y-0">
              <div className="grid md:grid-cols-3">
                <img src={cat.img} alt={cat.name} loading="lazy" className="w-full h-full max-h-72 object-cover md:col-span-1" />
                <div className="p-6 md:p-8 md:col-span-2">
                  <h3 className="text-2xl font-bold text-espresso mb-6">{cat.name}</h3>
                  <ul className="space-y-4">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex justify-between items-start gap-4 border-b border-espresso/10 pb-3 last:border-0">
                        <div>
                          <p className="font-semibold text-espresso">{item.name}</p>
                          <p className="text-sm text-espresso-light">{item.desc}</p>
                        </div>
                        <span className="font-semibold text-amber-dark whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
