import TestimonialCard from './TestimonialCard'

const TESTIMONIALS = [
  {
    quote:
      'WaterTech transformed our municipal water supply. Contamination incidents dropped to zero within the first quarter of deployment, and our residents noticed the difference immediately.',
    name:     'Dr. Sarah Chen',
    role:     'Chief Water Officer, City of New Geneva',
    initials: 'SC',
    stars:    5,
  },
  {
    quote:
      'The AI prediction engine flagged a pipe-burst risk 68 hours before our pressure sensors detected anything. That early warning alone saved us an estimated $2M in emergency repairs.',
    name:     'Marcus Williams',
    role:     'Infrastructure Director, Aqua Pacific Ltd.',
    initials: 'MW',
    stars:    5,
  },
  {
    quote:
      'Deploying containerised treatment units to 14 remote villages took just three weeks. Communities that previously walked hours for water now have safe supply at their doorsteps.',
    name:     'Amara Diallo',
    role:     'Regional Programme Manager, WaterAid Africa',
    initials: 'AD',
    stars:    5,
  },
  {
    quote:
      "Our semiconductor fab requires ultra-pure process water to sub-ppb specifications. WaterTech's quantum-sensing modules maintain those standards 24/7 without a single non-conformance.",
    name:     'Jin-Ho Park',
    role:     'VP Operations, NanoFab Solutions Korea',
    initials: 'JP',
    stars:    5,
  },
  {
    quote:
      'The blockchain audit trail has simplified our environmental compliance reporting enormously. Regulators can access real-time, immutable records — audits that used to take months now take days.',
    name:     'Elena Rossi',
    role:     'Sustainability Director, EuroWater Consortium',
    initials: 'ER',
    stars:    5,
  },
  {
    quote:
      "Switching to WaterTech's closed-loop system cut our industrial water consumption by 76%. The ROI was achieved in under 18 months. I recommend them without hesitation.",
    name:     'Carlos Mendoza',
    role:     'General Manager, Agri-Horizon Peru',
    initials: 'CM',
    stars:    5,
  },
]

/**
 * Testimonials / case studies section showing real-world customer impact.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-ocean-dark">
      {/* Decorative top / bottom lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-water-500/30 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-water-600/20 border border-water-500/30 text-water-300 text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="section-title">
            Trusted Worldwide, <span className="gradient-text">Proven Results</span>
          </h2>
          <p className="section-subtitle">
            Municipalities, industries, and NGOs across 120+ countries rely on WaterTech
            to deliver safe, sustainable water every day.
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Case study CTA */}
        <div className="mt-16 text-center">
          <a
            href="#newsletter"
            className="btn-outline inline-flex"
          >
            Read Full Case Studies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
