'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
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
              <Link
                href="/signup"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full text-center transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/how-it-works"
                className="border border-slate-500 hover:border-indigo-400 text-slate-300 hover:text-white font-semibold px-8 py-3 rounded-full text-center transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            >
              <Image
                src="/founder-hero.jpg"
                alt="PortfolioForge founder"
                width={600}
                height={420}
                loading="eager"
                className="w-full object-cover object-top"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-slate-800 font-semibold text-sm">Portfolio Generated</p>
                <p className="text-slate-500 text-xs">In under 60 seconds</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Everything You Need to Land Your First Job
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Other resume builders tell you what to do. PortfolioForge does it for you.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📁',
                title: 'Upload Anything',
                desc: 'Class projects, presentations, club leadership, research papers — if you did it, we can use it.',
                delay: 0,
              },
              {
                icon: '🤖',
                title: 'AI Does the Work',
                desc: 'Our AI extracts your skills, achievements, and impact and formats them into professional content instantly.',
                delay: 0.15,
              },
              {
                icon: '🎯',
                title: 'Job-Specific Summaries',
                desc: 'Paste any job description and get a tailored resume and cover letter in seconds — ready to send.',
                delay: 0.3,
              },
            ].map((item) => (
              <FadeIn key={item.title} delay={item.delay}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(99,102,241,0.12)' }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 h-full"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why PortfolioForge */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/portfolio-preview.svg"
                alt="Student using PortfolioForge"
                width={540}
                height={400}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Built for Majors That Don&apos;t Teach You This
            </h2>
            <p className="text-slate-500 text-lg mb-6 leading-relaxed">
              Business, Education, Social Work, Communications — most programs
              don&apos;t prepare you to build a portfolio. That&apos;s not fair.
              PortfolioForge levels the playing field so every student can
              compete confidently.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'No design skills required',
                'No writing skills required',
                'Everything in one place — portfolio, resume, cover letters',
                'Ready in minutes, not weeks',
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{item}</span>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Get Started Free
            </Link>
          </FadeIn>
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
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <p className="text-4xl font-extrabold mb-1">{item.stat}</p>
              <p className="text-indigo-200 text-sm">{item.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Sign Up CTA */}
      <section className="py-24 px-6 bg-slate-900">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Portfolio?
            </h2>
            <p className="text-slate-400 mb-10">
              Create your free account and go from zero to job-ready in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-full transition-colors"
              >
                Create Free Account
              </Link>
              <Link
                href="/login"
                className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-10 py-4 rounded-full transition-colors"
              >
                Log In
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
