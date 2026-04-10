'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ email?: string } | null>(null)
  const [projects, setProjects] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [mode, setMode] = useState<'recommend' | 'fitcheck'>('recommend')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }
    })
  }, [router])

  async function handleGenerate() {
    if (!projects.trim()) {
      setError('Please describe at least one project or experience.')
      return
    }
    if (mode === 'fitcheck' && !jobDescription.trim()) {
      setError('Please paste a job description to check your fit.')
      return
    }
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projects, jobDescription: mode === 'fitcheck' ? jobDescription : '', mode }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      // Save result to Supabase
      const { data: userData } = await supabase.auth.getUser()
      await supabase.from('results').insert({
        user_id: userData.user?.id,
        projects_input: projects,
        job_description: jobDescription,
        mode,
        skills: data.skills,
        portfolio_summary: data.portfolioSummary,
        resume_bullets: data.resumeBullets,
        job_fit: data.jobFit,
        job_recommendations: data.jobRecommendations,
      })

      // Store in sessionStorage to pass to results page
      sessionStorage.setItem('portfolioforge_result', JSON.stringify(data))
      router.push('/results')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-slate-100 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800">Your Dashboard</h1>
            <p className="text-slate-500 text-sm">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-slate-500 hover:text-slate-800 text-sm transition-colors"
          >
            Log out
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Mode Toggle */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">What do you need today?</h2>
          <p className="text-slate-500 mb-6">Choose a mode then describe your experience below.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              onClick={() => setMode('recommend')}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${
                mode === 'recommend'
                  ? 'border-indigo-600 bg-indigo-50'
                  : 'border-slate-200 bg-white hover:border-indigo-200'
              }`}
            >
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-bold text-slate-800">Job Recommendations</h3>
              <p className="text-slate-500 text-sm mt-1">Not sure what to apply for? Get job suggestions based on your experience.</p>
            </button>
            <button
              onClick={() => setMode('fitcheck')}
              className={`text-left p-5 rounded-2xl border-2 transition-all ${
                mode === 'fitcheck'
                  ? 'border-violet-600 bg-violet-50'
                  : 'border-slate-200 bg-white hover:border-violet-200'
              }`}
            >
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold text-slate-800">Job Fit Check</h3>
              <p className="text-slate-500 text-sm mt-1">Have a specific job? See how well you match and get tailored materials.</p>
            </button>
          </div>
        </div>

        {/* Project Input */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <label className="text-sm font-semibold text-slate-700 block mb-2">
            Describe your projects, classes, clubs, and experiences
          </label>
          <p className="text-slate-400 text-xs mb-3">
            Include project names, what you did, any leadership roles, skills you used, and results you achieved.
          </p>
          <textarea
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
            rows={8}
            placeholder={`Example:\n- Senior capstone: Built a marketing campaign for a local nonprofit that increased their social media engagement by 40%\n- Marketing Club President: Led a team of 12 students, organized 3 events per semester\n- Data Analysis class: Used Excel and Python to analyze sales trends for a mock retail company\n- Volunteer coordinator at campus food bank for 2 years`}
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-sm"
          />
        </div>

        {/* Job Description (fit check mode only) */}
        {mode === 'fitcheck' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
            <label className="text-sm font-semibold text-slate-700 block mb-2">
              Paste the job description
            </label>
            <p className="text-slate-400 text-xs mb-3">
              Copy and paste the full job posting you want to apply for.
            </p>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows={6}
              placeholder="Paste the job description here..."
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors resize-none text-sm"
            />
          </div>
        )}

        {error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">{error}</p>
        )}

        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`w-full font-semibold py-4 rounded-xl transition-colors disabled:opacity-60 text-white ${
            mode === 'fitcheck'
              ? 'bg-violet-600 hover:bg-violet-500'
              : 'bg-indigo-600 hover:bg-indigo-500'
          }`}
        >
          {loading ? '✨ Generating your results...' : '✨ Generate My Portfolio & Resume'}
        </button>
      </div>
    </div>
  )
}
