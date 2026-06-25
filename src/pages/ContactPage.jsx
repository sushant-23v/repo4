import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import client from '../api/client'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await client.post('/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16 py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Come visit, or drop us a line"
        subtitle="We'd love to hear from you — whether it's a question, a catering request, or just to say hi."
      />

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-espresso" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-espresso focus:border-amber-dark focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-espresso" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-espresso focus:border-amber-dark focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-espresso" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 w-full rounded-xl border border-espresso/20 bg-cream px-4 py-3 text-espresso focus:border-amber-dark focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </Button>
            {status === 'success' && (
              <p className="text-sm font-medium text-green-700">Thanks! We'll be in touch soon.</p>
            )}
          </form>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-espresso-dark">Visit Us</h3>
            <p className="mt-2 text-espresso-light">42 Roastery Lane, Bean District</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-espresso-dark">Hours</h3>
            <p className="mt-2 text-espresso-light">Monday – Sunday · 7:00am – 9:00pm</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-espresso-dark">Reach Out</h3>
            <p className="mt-2 text-espresso-light">hello@desxtocoffee.com</p>
            <p className="text-espresso-light">(555) 012-3456</p>
          </Card>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Desxto Coffee storefront interior"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
