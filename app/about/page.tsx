import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About PortfolioForge</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          We believe every college graduate deserves to show up to the job market ready — regardless of their major.
        </p>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
              A Problem Every College Senior Faces
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Four years of hard work — group projects, club leadership, research papers,
              presentations — and most students don&apos;t know how to turn any of it into
              something employers actually want to see.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Other resume builders tell you <em>what</em> to do. We thought that wasn&apos;t
              good enough. So we built PortfolioForge — an AI tool that does the work for you.
              Upload what you have. We&apos;ll handle the rest.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our mission is simple: level the playing field for every college senior, especially
              those in majors where portfolio-building isn&apos;t taught.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/founder-about-1.jpg"
              alt="Founder photo 1"
              width={300}
              height={350}
              className="rounded-2xl shadow-lg w-full object-cover object-top"
            />
            <Image
              src="/founder-about-2.jpg"
              alt="Founder photo 2"
              width={300}
              height={350}
              className="rounded-2xl shadow-lg w-full object-cover object-top mt-8"
            />
          </div>
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
              src="https://drive.google.com/file/d/1rIyHOV_Brm-mVS-ffcKRDqpoVJK8x2vz/preview"
              className="w-full h-full"
              allow="autoplay"
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
        <h2 className="text-3xl font-bold mb-4">Ready to Forge Your Future?</h2>
        <p className="text-indigo-200 mb-8 text-lg">Join the waitlist and be first in line when we launch.</p>
        <Link
          href="/#waitlist"
          className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-full hover:bg-indigo-50 transition-colors inline-block"
        >
          Join the Waitlist
        </Link>
      </section>
    </div>
  )
}
