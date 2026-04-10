'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type JobFit = {
  score: number
  strengths: string[]
  gaps: string[]
  tailoredSummary: string
  coverLetterOpening: string
}

type JobRecommendation = {
  title: string
  reason: string
}

type Result = {
  skills: string[]
  portfolioSummary: string
  resumeBullets: string[]
  jobFit: JobFit | null
  jobRecommendations: JobRecommendation[] | null
}

export default function ResultsPage() {
  const router = useRouter()
  const [result, setResult] = useState<Result | null>(null)
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem('portfolioforge_result')
    if (!stored) {
      router.push('/dashboard')
      return
    }
    setResult(JSON.parse(stored))
  }, [router])

  function copyToClipboard(text: string, label: string) {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  if (!result) return null

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✨</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Your Results Are Ready</h1>
          <p className="text-slate-500 mt-2">Here&apos;s everything PortfolioForge generated for you.</p>
        </div>

        {/* Job Fit Score */}
        {result.jobFit && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">🎯 Job Fit Score</h2>
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl font-extrabold text-white flex-shrink-0 ${
                result.jobFit.score >= 75 ? 'bg-green-500' : result.jobFit.score >= 50 ? 'bg-yellow-500' : 'bg-red-400'
              }`}>
                {result.jobFit.score}%
              </div>
              <div>
                <p className="text-slate-700 font-semibold">
                  {result.jobFit.score >= 75 ? 'Strong match! You\'re a great fit for this role.' :
                   result.jobFit.score >= 50 ? 'Decent match. A few areas to strengthen.' :
                   'Some gaps, but your transferable skills can help.'}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-green-700 mb-2">Your Strengths</h3>
                <ul className="flex flex-col gap-2">
                  {result.jobFit.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-green-500 mt-0.5">✓</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-amber-700 mb-2">Areas to Highlight Better</h3>
                <ul className="flex flex-col gap-2">
                  {result.jobFit.gaps.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-amber-500 mt-0.5">→</span> {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Job Recommendations */}
        {result.jobRecommendations && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">🔍 Jobs That Fit You</h2>
            <div className="flex flex-col gap-3">
              {result.jobRecommendations.map((job, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-indigo-50 rounded-xl">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{job.title}</h3>
                    <p className="text-slate-600 text-sm mt-0.5">{job.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-800 mb-4">💡 Your Skills</h2>
          <div className="flex flex-wrap gap-2">
            {result.skills.map((skill, i) => (
              <span key={i} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">📄 Portfolio Bio</h2>
            <button
              onClick={() => copyToClipboard(result.portfolioSummary, 'bio')}
              className="text-indigo-600 text-sm font-semibold hover:underline"
            >
              {copied === 'bio' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-slate-600 leading-relaxed">{result.portfolioSummary}</p>
        </div>

        {/* Resume Bullets */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-800">📋 Resume Bullet Points</h2>
            <button
              onClick={() => copyToClipboard(result.resumeBullets.join('\n'), 'bullets')}
              className="text-indigo-600 text-sm font-semibold hover:underline"
            >
              {copied === 'bullets' ? 'Copied!' : 'Copy All'}
            </button>
          </div>
          <ul className="flex flex-col gap-3">
            {result.resumeBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                <span className="text-indigo-400 mt-0.5">•</span> {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Tailored Summary + Cover Letter (fit check only) */}
        {result.jobFit && (
          <>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-800">🎯 Tailored Resume Summary</h2>
                <button
                  onClick={() => copyToClipboard(result.jobFit!.tailoredSummary, 'summary')}
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  {copied === 'summary' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-slate-600 leading-relaxed">{result.jobFit.tailoredSummary}</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-800">✉️ Cover Letter Opening</h2>
                <button
                  onClick={() => copyToClipboard(result.jobFit!.coverLetterOpening, 'cover')}
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  {copied === 'cover' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-slate-600 leading-relaxed">{result.jobFit.coverLetterOpening}</p>
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="flex-1 text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-4 rounded-xl transition-colors"
          >
            Generate Again
          </Link>
        </div>
      </div>
    </div>
  )
}
