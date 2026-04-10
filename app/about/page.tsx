'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
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

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About PortfolioForge</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A tool born from the job search struggle — built by a college student who just wanted a simpler way.
          </p>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <FadeIn className="flex flex-col gap-6">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              The Story Behind It
            </span>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
              Built by a College Student, for College Students
            </h2>
            <p className="text-slate-500 leading-relaxed">
              I&apos;m currently in college and actively going through the job search myself. I
              know firsthand how overwhelming it feels — you&apos;ve done the work, put in the
              hours, and built real experience, but when it comes time to actually apply, turning
              all of that into something polished and professional feels like a whole separate job.
            </p>
            <p className="text-slate-500 leading-relaxed">
              I didn&apos;t want to spend hours wrestling with resume templates or guessing which
              of my projects were worth including. I wanted something that could just take what I
              had and make it work — without the stress. So I built PortfolioForge.
            </p>
            <p className="text-slate-500 leading-relaxed">
              What started as something I made for myself became something I realized every college
              student deserves access to. If you&apos;re in the same boat — grinding through
              applications and wishing the process was simpler — this was made for you.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                <Image
                  src="/founder-about-1.jpg"
                  alt="Founder photo 1"
                  width={300}
                  height={350}
                  className="rounded-2xl shadow-lg w-full object-cover object-top"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="mt-8">
                <Image
                  src="/founder-about-2.jpg"
                  alt="Founder photo 2"
                  width={300}
                  height={350}
                  className="rounded-2xl shadow-lg w-full object-cover object-top"
                />
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pitch Video */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
            Hear It From Us
          </span>
          <h2 className="text-3xl font-bold text-slate-800 mt-3 mb-4">
            Our 30-Second Pitch
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Watch to understand why PortfolioForge is 10x better than anything else out there.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/W2hLCC22i1Y"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="PortfolioForge Pitch Video"
            />
          </div>
        </div>
      </section>

      {/* Third photo + values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <Image
            src="/ai-flow-preview.svg"
            alt="AI flow preview"
            width={540}
            height={400}
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <div>
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-slate-800 mt-3 mb-8">Our Values</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Accessibility',
                  desc: "Career tools shouldn't require privilege or connections. We make professional portfolios available to everyone.",
                },
                {
                  title: 'Simplicity',
                  desc: "If it takes more than 5 minutes, we've failed. Our goal is to remove every unnecessary step.",
                },
                {
                  title: 'Real Results',
                  desc: 'Every feature exists to get you an interview. We don\'t add fluff — only what moves the needle.',
                },
              ].map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{v.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 px-6 text-center text-white">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-4">Ready to Forge Your Future?</h2>
          <p className="text-indigo-200 mb-8 text-lg">Create your free account and start building today.</p>
          <Link
            href="/signup"
            className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-full hover:bg-indigo-50 transition-colors inline-block"
          >
            Get Started Free
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
