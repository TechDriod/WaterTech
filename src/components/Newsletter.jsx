import { useState } from 'react'

/**
 * Newsletter subscription section with an email form and
 * a brief privacy assurance note.
 */
export default function Newsletter() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error,     setError]     = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="newsletter" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-water-900 via-ocean-mid to-teal-900 pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-water-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-water-500 to-teal-500 shadow-glow-blue mb-8 mx-auto">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h2 className="section-title">
          Stay Ahead of the <span className="gradient-text">Wave</span>
        </h2>
        <p className="text-lg text-blue-200/70 mb-10">
          Get the latest WaterTech breakthroughs, case studies, and industry insights
          delivered directly to your inbox — no spam, ever.
        </p>

        {submitted ? (
          /* Success state */
          <div className="glass-card p-8 border border-teal-500/40 inline-flex flex-col items-center gap-4 rounded-2xl">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-water-500 flex items-center justify-center shadow-glow-teal">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-white">You&apos;re on the list!</p>
            <p className="text-blue-200/70 text-sm">Watch your inbox for the next WaterTech dispatch.</p>
          </div>
        ) : (
          /* Form state */
          <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError('') }}
                placeholder="your@email.com"
                aria-describedby={error ? 'email-error' : undefined}
                className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200/40
                           focus:outline-none focus:border-water-400 focus:ring-2 focus:ring-water-400/30
                           transition-all duration-300"
              />
              {error && (
                <p id="email-error" role="alert" className="mt-2 text-sm text-red-400 text-left pl-4">{error}</p>
              )}
            </div>
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>
        )}

        <p className="mt-6 text-xs text-blue-200/40">
          By subscribing you agree to our&nbsp;
          <a href="#" className="underline hover:text-blue-200/70 transition-colors duration-200">Privacy Policy</a>.
          &nbsp;Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
