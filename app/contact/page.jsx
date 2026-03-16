'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Connect to Supabase or email service
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <section className="bg-espresso py-20 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-sans mb-3">Reach Out</p>
        <h1 className="font-serif text-5xl text-cream mb-4">Contact Us</h1>
        <p className="text-muted text-base max-w-xl mx-auto font-light">
          Questions about an order, allergies, or anything else? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="font-serif text-3xl text-espresso mb-8">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold flex-shrink-0">
                  ✉
                </div>
                <div>
                  <p className="font-semibold text-espresso text-sm tracking-wide mb-1">Email</p>
                  <a href="mailto:info@slicedthw.com" className="text-caramel hover:text-gold text-sm">
                    info@slicedthw.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-espresso text-sm tracking-wide mb-1">Service Area</p>
                  <p className="text-muted text-sm">DMV — Washington DC, Maryland & Virginia</p>
                  <p className="text-muted text-sm">Nationwide shipping available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-gold flex-shrink-0">
                  ⏱
                </div>
                <div>
                  <p className="font-semibold text-espresso text-sm tracking-wide mb-1">Response Time</p>
                  <p className="text-muted text-sm">We typically respond within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-linen rounded-xl p-6 border border-linen">
              <h4 className="font-serif text-espresso text-lg mb-3">Important Reminders</h4>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex gap-2"><span className="text-gold">•</span> All sales are final</li>
                <li className="flex gap-2"><span className="text-gold">•</span> Refrigerate and consume within 3–5 days</li>
                <li className="flex gap-2"><span className="text-gold">•</span> Allergy concerns? Please contact us before ordering</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-linen rounded-2xl p-10 text-center border border-caramel/30">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-serif text-espresso text-2xl mb-3">Message Sent!</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Thanks for reaching out. We'll get back to you within 24 hours at the email you provided.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-caramel text-sm underline hover:text-gold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-espresso text-sm font-semibold mb-2 tracking-wide">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-linen rounded-lg px-4 py-3 bg-linen text-espresso text-sm focus:outline-none focus:border-caramel focus:bg-cream transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-espresso text-sm font-semibold mb-2 tracking-wide">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-linen rounded-lg px-4 py-3 bg-linen text-espresso text-sm focus:outline-none focus:border-caramel focus:bg-cream transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-espresso text-sm font-semibold mb-2 tracking-wide">Subject</label>
                  <select
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-linen rounded-lg px-4 py-3 bg-linen text-espresso text-sm focus:outline-none focus:border-caramel focus:bg-cream transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="order">Order Question</option>
                    <option value="allergy">Allergy Inquiry</option>
                    <option value="wholesale">Wholesale / Bulk</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-espresso text-sm font-semibold mb-2 tracking-wide">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-linen rounded-lg px-4 py-3 bg-linen text-espresso text-sm focus:outline-none focus:border-caramel focus:bg-cream transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-espresso text-cream font-bold tracking-widest uppercase py-4 rounded-lg hover:bg-bark transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
