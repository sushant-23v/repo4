import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'

const values = [
  { title: 'Quality First', desc: 'Every bean is hand-selected and roasted to bring out its very best character.' },
  { title: 'Genuine Warmth', desc: 'We greet everyone like an old friend — because that is exactly how it should feel.' },
  { title: 'Community Rooted', desc: 'Desxto is a gathering place built around the people who make our neighborhood special.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="The Desxto Coffee team"
          loading="lazy"
          className="h-72 w-full object-cover md:h-96"
        />
        <div className="absolute inset-0 bg-espresso-dark/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl font-bold text-cream md:text-5xl">Our Story</h1>
            <p className="mt-3 max-w-xl text-cream/90">A small dream that grew into a cozy corner of the city.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Since the beginning"
              title="Built on warmth and great coffee"
              subtitle="Desxto Coffee began with a simple idea: create a space where great coffee and genuine hospitality come together."
            />
            <p className="mt-6 text-espresso-light">
              What started as a single espresso machine and a passion for the perfect pour has grown into
              a beloved neighborhood cafe. We believe coffee is more than a drink — it's a moment of
              comfort, a reason to slow down, and an invitation to connect.
            </p>
            <p className="mt-4 text-espresso-light">
              Today, our team continues to roast in small batches, bake fresh each morning, and welcome
              every guest with the same warmth we started with.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Friends enjoying coffee together"
            loading="lazy"
            className="rounded-warm shadow-warm"
          />
        </div>
      </section>

      <section className="bg-cream-paper">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <SectionHeading center eyebrow="What we stand for" title="Our core values" />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="p-8 text-center">
                <h3 className="text-xl font-semibold text-espresso">{v.title}</h3>
                <p className="mt-3 text-sm text-espresso-light">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
