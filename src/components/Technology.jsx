/**
 * Technology section – highlights WaterTech's proprietary tech stack
 * with a two-column layout (visual + text panel) and a metrics bar.
 */

const TECH_HIGHLIGHTS = [
  {
    label: 'Quantum Sensing',
    description:
      'Atomic-resolution sensors detect impurities at the parts-per-trillion level, ensuring unprecedented water quality analysis.',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
  },
  {
    label: 'Neural Prediction Engine',
    description:
      'Deep-learning models trained on 20+ years of water quality data forecast contamination events 72 hours in advance.',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  },
  {
    label: 'Bio-Adaptive Membranes',
    description:
      'Graphene-oxide membranes with self-healing polymer matrices maintain optimal flow rates across temperature extremes.',
    icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
  },
  {
    label: 'Blockchain Audit Trail',
    description:
      'Every purification cycle is immutably recorded on a distributed ledger, providing tamper-proof compliance evidence for regulators.',
    icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  },
]

const METRICS = [
  { value: '99.9%',  label: 'Filtration Efficiency' },
  { value: '80%',    label: 'Water Waste Reduction' },
  { value: '72h',    label: 'Ahead Prediction Window' },
  { value: '<48h',   label: 'Deployment Time' },
]

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 bg-ocean-mid overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-water-700/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-600/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-4">
            Our Technology
          </span>
          <h2 className="section-title">
            Engineered for <span className="gradient-text">Tomorrow</span>
          </h2>
          <p className="section-subtitle">
            Proprietary breakthroughs in materials science, AI, and IoT converge in
            WaterTech's unified platform.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Left: animated tech visual */}
          <div className="relative flex items-center justify-center h-80 lg:h-96">
            {/* Concentric rings */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border border-water-500/20"
                style={{
                  width:  `${(i + 1) * 22}%`,
                  height: `${(i + 1) * 22}%`,
                  animation: `spin ${(i + 1) * 8}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                }}
              />
            ))}
            {/* Core */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-water-500 to-teal-400 shadow-glow-blue flex items-center justify-center z-10 animate-glow">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c.251.023.501.05.75.082M19.8 15l-1.575.808A4.5 4.5 0 0116.5 16.5H15M19.8 15l.9-3.6c.304-1.215.31-2.487.019-3.704A24.301 24.301 0 0014.25 3.104M14.25 3.104A24.301 24.301 0 009.75 3.104M4.2 15l1.575.808A4.5 4.5 0 007.5 16.5H9M4.2 15l-.9-3.6a10.5 10.5 0 01.019-3.704A24.301 24.301 0 019.75 3.104M9 16.5v2.25m6-2.25v2.25m-6 0h6" />
              </svg>
            </div>

            {/* Orbiting feature labels */}
            {TECH_HIGHLIGHTS.map(({ label }, idx) => {
              const angle = (idx / TECH_HIGHLIGHTS.length) * 360 - 90
              const rad = (angle * Math.PI) / 180
              const radius = 44 // percent from centre
              const x = 50 + radius * Math.cos(rad)
              const y = 50 + radius * Math.sin(rad)
              return (
                <div
                  key={label}
                  className="absolute z-10 glass-card px-2 py-1 text-xs text-water-300 font-medium border-water-500/30 whitespace-nowrap"
                  style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {label}
                </div>
              )
            })}
          </div>

          {/* Right: highlight list */}
          <div className="space-y-6">
            {TECH_HIGHLIGHTS.map(({ label, description, icon }) => (
              <div
                key={label}
                className="flex gap-5 glass-card p-6 border-water-500/20 hover:border-water-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-water-600 to-teal-500 flex items-center justify-center shadow-card">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d={icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{label}</h3>
                  <p className="text-sm text-blue-200/70 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map(({ value, label }) => (
            <div
              key={label}
              className="glass-card p-6 text-center border-white/10 hover:border-water-500/40 transition-colors duration-300"
            >
              <p className="text-3xl font-black gradient-text mb-2">{value}</p>
              <p className="text-sm text-blue-200/60">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
