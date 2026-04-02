'use client'
import { useState } from 'react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Upload Your Work',
    description:
      'Drag and drop your class projects, presentations, club activities, research papers, or any other work from your college career.',
    detail:
      'Supported formats: PDF, DOCX, PPTX, images, and more. PortfolioForge accepts anything you\'ve done in college.',
    icon: '📁',
    demo: {
      label: 'Uploading files...',
      items: ['Senior Capstone Project.pdf', 'Marketing Club President Role.docx', 'Data Analysis Presentation.pptx'],
    },
  },
  {
    number: '02',
    title: 'AI Analyzes Your Content',
    description:
      'Our AI reads everything you upload and extracts your skills, achievements, leadership roles, and outcomes.',
    detail:
      'The AI identifies what employers care about — results, impact, skills — and organizes them into professional language automatically.',
    icon: '🤖',
    demo: {
      label: 'AI extracting skills...',
      items: ['Project Management', 'Data Analysis', 'Team Leadership', 'Public Speaking', 'Python, Excel'],
    },
  },
  {
    number: '03',
    title: 'Get Your Portfolio & Resume',
    description:
      'PortfolioForge generates a polished portfolio page and a formatted resume — ready to share with employers.',
    detail:
      'Your portfolio includes project cards, skill highlights, and a bio. Your resume is ATS-friendly and professionally formatted.',
    icon: '✨',
    demo: {
      label: 'Generated content',
      items: ['Portfolio page ✓', 'Resume PDF ✓', 'Skills summary ✓'],
    },
  },
  {
    number: '04',
    title: 'Apply with a Tailored Summary',
    description:
      'Paste any job description and get a custom cover letter and resume summary tailored specifically to that role.',
    detail:
      'No more generic applications. Every job gets a version of you that speaks directly to what they\'re looking for.',
    icon: '🎯',
    demo: {
      label: 'Job-matched summary',
      items: ['Matched 8/10 job requirements', 'Cover letter generated', 'Resume reordered for role'],
    },
  },
]

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          From raw college work to job-ready portfolio in four simple steps.
        </p>
      </section>

      {/* Step-by-step visual */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Step list */}
            <div className="flex flex-col gap-4">
              {steps.map((step, i) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  className={`text-left p-6 rounded-2xl border-2 transition-all ${
                    activeStep === i
                      ? 'border-indigo-600 bg-indigo-50 shadow-md'
                      : 'border-slate-100 bg-white hover:border-indigo-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-widest ${activeStep === i ? 'text-indigo-600' : 'text-slate-400'}`}>
                        Step {step.number}
                      </span>
                      <h3 className="text-slate-800 font-bold text-lg mt-1">{step.title}</h3>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Interactive Demo Panel */}
            <div className="sticky top-24">
              <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl min-h-[400px] flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-slate-500 text-xs ml-2">PortfolioForge Demo</span>
                </div>

                <div className="mb-4">
                  <span className="text-4xl">{steps[activeStep].icon}</span>
                  <h3 className="text-white font-bold text-xl mt-3">{steps[activeStep].title}</h3>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">{steps[activeStep].detail}</p>
                </div>

                <div className="mt-auto">
                  <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-3">
                    {steps[activeStep].demo.label}
                  </p>
                  <div className="flex flex-col gap-2">
                    {steps[activeStep].demo.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 text-sm flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="text-slate-500 hover:text-white text-sm disabled:opacity-30 transition-colors"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-2">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${i === activeStep ? 'bg-indigo-500' : 'bg-slate-600'}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="text-slate-500 hover:text-white text-sm disabled:opacity-30 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>

              <p className="text-center text-slate-400 text-xs mt-4">
                * Full interactive demo coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it beats the competition */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why PortfolioForge Wins</h2>
          <p className="text-slate-500 mb-12 text-lg">
            Traditional resume builders stop at advice. We go all the way.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-slate-600 font-semibold bg-white rounded-tl-xl">Feature</th>
                  <th className="py-4 px-6 text-slate-600 font-semibold bg-white">Other Builders</th>
                  <th className="py-4 px-6 text-white font-semibold bg-indigo-600 rounded-tr-xl">PortfolioForge</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Generates content from your uploads', false, true],
                  ['Tailors resume per job description', false, true],
                  ['Builds full portfolio page', false, true],
                  ['Gives writing tips & templates', true, true],
                  ['Works for non-CS/design majors', false, true],
                  ['Everything in one place', false, true],
                ].map(([feature, others, pf]) => (
                  <tr key={String(feature)} className="border-t border-slate-100">
                    <td className="py-4 px-6 text-left text-slate-700 bg-white font-medium">{String(feature)}</td>
                    <td className="py-4 px-6 text-center bg-white">
                      {others ? (
                        <span className="text-green-500 text-lg">✓</span>
                      ) : (
                        <span className="text-red-400 text-lg">✗</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-indigo-50">
                      <span className="text-indigo-600 text-lg font-bold">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Try It?</h2>
        <p className="text-indigo-200 mb-8 text-lg">Get early access when we launch.</p>
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
