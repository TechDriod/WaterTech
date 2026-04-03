/**
 * Individual feature card used inside the Features section.
 *
 * @param {object}  props
 * @param {string}  props.icon        - SVG path data for the card icon
 * @param {string}  props.title       - Feature name
 * @param {string}  props.description - Short description of the feature
 * @param {string}  props.color       - Tailwind colour token for the accent (e.g. 'water', 'teal')
 * @param {string[]}props.bullets     - Optional list of bullet-point highlights
 */
export default function FeatureCard({ icon, title, description, color = 'water', bullets = [] }) {
  const colorMap = {
    water: {
      bg:     'from-water-600/20 to-water-800/20',
      border: 'border-water-500/30 hover:border-water-400/60',
      icon:   'from-water-500 to-water-700',
      text:   'text-water-400',
    },
    teal: {
      bg:     'from-teal-600/20 to-teal-800/20',
      border: 'border-teal-500/30 hover:border-teal-400/60',
      icon:   'from-teal-400 to-teal-600',
      text:   'text-teal-400',
    },
    cyan: {
      bg:     'from-cyan-600/20 to-cyan-800/20',
      border: 'border-cyan-500/30 hover:border-cyan-400/60',
      icon:   'from-cyan-400 to-cyan-600',
      text:   'text-cyan-400',
    },
  }

  const c = colorMap[color] ?? colorMap.water

  return (
    <article
      className={`glass-card bg-gradient-to-br ${c.bg} border ${c.border}
                  p-8 group hover:shadow-glass hover:-translate-y-2 transition-all duration-300 cursor-default`}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.icon} flex items-center justify-center mb-6 shadow-card group-hover:scale-110 transition-transform duration-300`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d={icon} />
        </svg>
      </div>

      {/* Content */}
      <h3 className={`text-xl font-bold mb-3 ${c.text}`}>{title}</h3>
      <p className="text-blue-200/70 leading-relaxed mb-4">{description}</p>

      {/* Bullet highlights */}
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-blue-200/60">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
