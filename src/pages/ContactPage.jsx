import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass =
    'w-full rounded-warm border border-espresso/20 bg-cream-paper px-4 py-3 text-espresso outline-none focus:border-amber-warm'

  return (
    <div>
      <section className="bg-espresso">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 text-center">
          <h1 className="text-4xl font-bold text-cream md:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Have a question, want to book the space, or just say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Visit us" title="Find your cozy corner" />
            <div className="mt-6 space-y-4 text-espresso-light">
              <p><span className="font-semibold text-espresso">Address:</span> 123 Roast Lane, Bean City</p>
              <p><span className="font-semibold text-espresso">Email:</span> hello@desxtocoffee.com</p>
              <p><span className="font-semibold text-espresso">Phone:</span> (555) 012-3456</p>
              <p><span className="font-semibold text-espresso">Hours:</span> Mon–Sun, 7:00am – 7:00pm</p>
            </div>
            <img
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Cup of coffee on a cafe table"
              loading="lazy"
              className="mt-8 rounded-warm shadow-warm"
            />
          </div>

          <Card className="p-8">
            <h3 className="text-xl font-semibold text-espresso">Send us a message</h3>
            {sent && (
              <p className="mt-4 rounded-warm bg-amber-light/40 px-4 py-3 text-sm text-espresso">
                Thanks for reaching out! We'll get back to you soon.
              </p>
            )}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className={inputClass}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
                className={inputClass}
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  )
}
