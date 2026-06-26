import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

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
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-4xl md:text-5xl font-bold">Plan Adjustments & Questions</h1>
          <p className="mt-4 max-w-xl text-gray-300">
            Want to tweak a day, change a restaurant, or rebalance the budget? Drop a note below.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get in touch" title="Trip planning desk" />
            <div className="mt-6 space-y-4 text-gray-700">
              <p><span className="font-semibold">Travelers:</span> Sushant & Sonali</p>
              <p><span className="font-semibold">Route:</span> Pune → Goa</p>
              <p><span className="font-semibold">Dates:</span> 30 Jul – 06 Aug 2026</p>
              <p><span className="font-semibold">Email:</span> <a className="text-orange-600 hover:underline" href="mailto:hello@goaescape.trip">hello@goaescape.trip</a></p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <h3 className="text-xl font-semibold text-green-800">Thanks, {form.name || 'traveler'}!</h3>
                <p className="mt-2 text-green-700 text-sm">Your note has been noted. We'll factor it into the plan.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
                  />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
