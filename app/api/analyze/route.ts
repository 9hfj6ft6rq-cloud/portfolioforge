import Groq from 'groq-sdk'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })
  try {
    const { projects, jobDescription, mode } = await req.json()

    if (!projects) {
      return NextResponse.json({ error: 'No projects provided' }, { status: 400 })
    }

    const fitSection = mode === 'fitcheck' ? `
  "jobFit": {
    "score": 85,
    "strengths": ["reason1", "reason2", "reason3"],
    "gaps": ["gap1", "gap2"],
    "tailoredSummary": "A 2-3 sentence summary tailored to this job",
    "coverLetterOpening": "A strong opening paragraph for a cover letter for this job"
  },
  "jobRecommendations": null` : `
  "jobFit": null,
  "jobRecommendations": [
    { "title": "Job Title", "reason": "Why this fits them in 1-2 sentences" }
  ]`

    const prompt = `You are a professional career coach and resume writer helping a college student.

Here is a description of their projects, classes, clubs, and experiences:
---
${projects}
---
${mode === 'fitcheck' ? `
They want to apply for this specific job:
---
${jobDescription}
---
Compare their experience to the job requirements and fill in the jobFit fields.
` : ''}
Respond with ONLY a raw JSON object, no markdown, no code blocks, just the JSON:

{
  "skills": ["skill1", "skill2"],
  "portfolioSummary": "3-4 sentence professional bio in first person",
  "resumeBullets": ["bullet1", "bullet2"],
  ${fitSection}
}`

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    })

    const text = completion.choices[0].message.content || ''
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    const result = JSON.parse(cleaned)

    return NextResponse.json(result)
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Analyze error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
