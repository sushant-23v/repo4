import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We'd Love to Hear From You"
          subtitle="Questions, catering requests, or just want to say hi? Drop us a line."
        />
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-espresso">Visit Us</h3>
              <p className="text-espresso-light">123 Roastery Lane, Bean City</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-espresso">Hours</h3>
              <p className="text-espresso-light">Open daily 7:00 AM – 9:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-espresso">Contact</h3>
              <p className="text-espresso-light">hello@desxtocoffee.com</p>
              <p className="text-espresso-light">(555) 012-3456</p>
            </div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Coffee shop storefront"
              loading="lazy"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="bg-paper rounded-2xl shadow-md p-6 md:p-8 space-y-5">
            {submitted && (
              <div className="rounded-md bg-amber/20 border border-amber px-4 py-3 text-espresso">
                Thanks! We&apos;ll get back to you soon.
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-espresso mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-md border border-espresso/20 bg-cream px-4 py-2.5 text-espresso focus:outline-none focus:ring-2 focus:ring-amber"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-espresso mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-md border border-espresso/20 bg-cream px-4 py-2.5 text-espresso focus:outline-none focus:ring-2 focus:ring-amber"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-espresso mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-espresso/20 bg-cream px-4 py-2.5 text-espresso focus:outline-none focus:ring-2 focus:ring-amber"
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
