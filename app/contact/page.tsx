'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.name && form.email && form.message) setSubmitted(true)
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in Touch</h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto">
          Have questions, feedback, or partnership ideas? We&apos;d love to hear from you.
        </p>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">We&apos;re Here to Help</h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Whether you&apos;re a student with questions, a university looking to partner,
              or just curious about PortfolioForge — reach out. We read and respond to
              every message.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '✉️',
                  title: 'Email Us',
                  value: 'hello@portfolioforge.com',
                  sub: 'We respond within 24 hours',
                },
                {
                  icon: '🎓',
                  title: 'University Partnerships',
                  value: 'partnerships@portfolioforge.com',
                  sub: 'Bring PortfolioForge to your campus',
                },
                {
                  icon: '💬',
                  title: 'General Inquiries',
                  value: 'Available via this form',
                  sub: 'Questions, feedback, or just to say hi',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                    <p className="text-indigo-600 text-sm">{item.value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-indigo-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Want early access?</h3>
              <p className="text-indigo-200 text-sm mb-4">
                Join our waitlist on the homepage and be first in line when we launch.
              </p>
              <a
                href="/#waitlist"
                className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-full text-sm hover:bg-indigo-50 transition-colors inline-block"
              >
                Join the Waitlist →
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-slate-800 font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-500">
                  Thanks, {form.name}! We&apos;ll get back to you at{' '}
                  <span className="text-indigo-600">{form.email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-indigo-600 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-slate-800 font-bold text-xl mb-1">Send Us a Message</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-600 text-sm font-medium mb-1.5 block">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 text-sm font-medium mb-1.5 block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-600 text-sm font-medium mb-1.5 block">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 transition-colors bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="partnership">University Partnership</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-600 text-sm font-medium mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-xl transition-colors"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
