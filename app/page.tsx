'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (name && email) setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-indigo-500/20 text-indigo-300 text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-indigo-500/30">
              AI-Powered Career Tool for College Seniors
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Turn Your College Work Into a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Career-Ready Portfolio
              </span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Upload your class projects, club activities, and presentations.
              PortfolioForge&apos;s AI instantly builds your portfolio, resume, and
              tailored job summaries — so you can apply smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#waitlist"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full text-center transition-colors"
              >
                Join the Waitlist
              </a>
              <Link
                href="/how-it-works"
                className="border border-slate-500 hover:border-indigo-400 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-full text-center transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <Image
                src="/founder-hero.jpg"
                alt="PortfolioForge founder"
                width={600}
                height={420}
                className="w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-slate-800 font-semibold text-sm">Portfolio Generated</p>
                <p className="text-slate-500 text-xs">In under 60 seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Everything You Need to Land Your First Job
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Other resume builders tell you what to do. PortfolioForge does it for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📁',
                title: 'Upload Anything',
                desc: 'Class projects, presentations, club leadership, research papers — if you did it, we can use it.',
              },
              {
                icon: '🤖',
                title: 'AI Does the Work',
                desc: 'Our AI extracts your skills, achievements, and impact and formats them into professional content instantly.',
              },
              {
                icon: '🎯',
                title: 'Job-Specific Summaries',
                desc: 'Paste any job description and get a tailored resume and cover letter in seconds — ready to send.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PortfolioForge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/540x400/7C3AED/ffffff?text=Your+Photo+Here"
              alt="Student using PortfolioForge"
              width={540}
              height={400}
              className="rounded-2xl shadow-xl w-full object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Built for Majors That Don&apos;t Teach You This
            </h2>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Business, Education, Social Work, Communications — most programs
              don&apos;t prepare you to build a portfolio. That&apos;s not fair.
              PortfolioForge levels the playing field so every student can
              compete confidently.
            </p>
            <ul className="space-y-4">
              {[
                'No design skills required',
                'No writing skills required',
                'Everything in one place — portfolio, resume, cover letters',
                'Ready in minutes, not weeks',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-indigo-600 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { stat: '60s', label: 'Avg. portfolio generation time' },
            { stat: '10x', label: 'More effective than DIY resumes' },
            { stat: '3-in-1', label: 'Portfolio, Resume & Cover Letter' },
            { stat: '100%', label: 'Built for new grads' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-extrabold mb-1">{item.stat}</p>
              <p className="text-indigo-200 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email Capture */}
      <section id="waitlist" className="py-24 px-6 bg-slate-900">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Be the First to Know When We Launch
          </h2>
          <p className="text-slate-400 mb-10">
            Join hundreds of college students getting early access to PortfolioForge.
          </p>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl px-8 py-10">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">You&apos;re on the list, {name}!</h3>
              <p className="text-slate-400">We&apos;ll email you at <span className="text-indigo-400">{email}</span> when PortfolioForge launches.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-5 py-4 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-xl transition-colors"
              >
                Join the Waitlist →
              </button>
              <p className="text-slate-500 text-xs">No spam. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
