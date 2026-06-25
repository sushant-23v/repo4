import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Come Say Hello"
              subtitle="Questions, catering, or just want to chat about coffee? We'd love to hear from you."
            />
            <div className="mt-8 space-y-4 text-espresso">
              <p><span className="font-semibold">Address:</span> 123 Brew Street, Bean Town</p>
              <p><span className="font-semibold">Email:</span> hello@desxtocoffee.com</p>
              <p><span className="font-semibold">Phone:</span> (555) 234-5678</p>
              <p><span className="font-semibold">Hours:</span> Mon–Sun, 7:00 AM – 7:00 PM</p>
            </div>
            <img
              src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Coffee shop seating"
              loading="lazy"
              className="mt-8 rounded-2xl shadow-md w-full object-cover"
            />
          </div>

          <Card className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-espresso-dark">Thank You!</h3>
                <p className="mt-3 text-espresso-light">
                  Your message has been received. We'll get back to you soon — and maybe save you a seat.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-espresso" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-espresso/20 bg-white px-4 py-2.5 focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-espresso/20 bg-white px-4 py-2.5 focus:border-amber focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-espresso/20 bg-white px-4 py-2.5 focus:border-amber focus:outline-none"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">Send Message</Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  )
}
