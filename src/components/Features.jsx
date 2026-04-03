import FeatureCard from './FeatureCard'

/**
 * Data for each feature / service card.
 */
const FEATURES = [
  {
    icon: 'M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z',
    title: 'Advanced Purification',
    description:
      'Multi-stage filtration combined with UV-C sterilisation and reverse osmosis removes 99.99% of contaminants — from microplastics to heavy metals.',
    color: 'water',
    bullets: [
      'Nano-filtration membranes',
      'Real-time contamination sensors',
      'Zero chemical waste process',
    ],
  },
  {
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Global Sustainability',
    description:
      'Our closed-loop systems reduce water waste by up to 80%, supporting UN SDG 6 — clean water and sanitation for all.',
    color: 'teal',
    bullets: [
      'Carbon-neutral operations',
      'Rainwater harvesting integration',
      'Greywater recycling systems',
    ],
  },
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'AI-Driven Monitoring',
    description:
      'Machine-learning algorithms continuously analyse flow rates, chemical compositions, and infrastructure health — predicting failures before they occur.',
    color: 'cyan',
    bullets: [
      'Predictive maintenance alerts',
      'IoT sensor network integration',
      'Digital-twin infrastructure models',
    ],
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Smart Distribution',
    description:
      'Pressure-adaptive pipelines and intelligent pumping stations optimise energy consumption while ensuring consistent supply across remote areas.',
    color: 'water',
    bullets: [
      'Variable-frequency drive pumps',
      'Leak-detection acoustics',
      'Remote valve actuation',
    ],
  },
  {
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Modular Infrastructure',
    description:
      'Rapidly deployable, containerised treatment units scale from a single village to a metropolitan network — with no civil construction required.',
    color: 'teal',
    bullets: [
      'Deploy in under 48 hours',
      'Solar or grid powered',
      'ISO-container footprint',
    ],
  },
  {
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    title: 'Certified Quality',
    description:
      'Every system is independently validated to WHO, EPA, and EU Drinking Water Directive standards with full audit trail and reporting.',
    color: 'cyan',
    bullets: [
      'ISO 9001 / ISO 14001 certified',
      'Continuous compliance reporting',
      'Third-party laboratory validation',
    ],
  },
]

/**
 * Features section showcasing WaterTech's core services and capabilities.
 */
export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-ocean-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-water-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-water-600/20 border border-water-500/30 text-water-300 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">Water Solutions</span>
          </h2>
          <p className="section-subtitle">
            From source to tap, WaterTech delivers end-to-end solutions that combine
            engineering excellence with environmental responsibility.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
