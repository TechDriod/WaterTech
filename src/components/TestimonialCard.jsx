/**
 * Individual testimonial card.
 *
 * @param {object} props
 * @param {string} props.quote    - The testimonial quote text
 * @param {string} props.name     - Reviewer name
 * @param {string} props.role     - Reviewer job title / organisation
 * @param {string} props.initials - 1–2 letter initials for avatar placeholder
 * @param {number} props.stars    - Star rating (1–5)
 */
export default function TestimonialCard({ quote, name, role, initials, stars = 5 }) {
  return (
    <article className="glass-card p-8 border border-white/10 hover:border-water-500/40 hover:-translate-y-2 transition-all duration-300 flex flex-col gap-6">
      {/* Star rating */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            fill={i < stars ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={1.5}
            className={`w-5 h-5 ${i < stars ? 'text-yellow-400' : 'text-white/20'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-blue-100/80 leading-relaxed italic flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Reviewer */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        {/* Avatar */}
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-water-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-blue-200/60 text-xs">{role}</p>
        </div>
      </div>
    </article>
  )
}
