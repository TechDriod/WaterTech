/** @type {string[][]} Link columns for the footer. */
const FOOTER_LINKS = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Water Purification',  href: '#features' },
      { label: 'Smart Distribution',  href: '#features' },
      { label: 'AI Monitoring',       href: '#technology' },
      { label: 'Modular Systems',     href: '#features' },
      { label: 'Compliance',          href: '#features' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About WaterTech',  href: '#home' },
      { label: 'Technology',       href: '#technology' },
      { label: 'Case Studies',     href: '#testimonials' },
      { label: 'Sustainability',   href: '#features' },
      { label: 'Careers',          href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Documentation',    href: '#' },
      { label: 'API Reference',    href: '#' },
      { label: 'White Papers',     href: '#' },
      { label: 'Blog',             href: '#' },
      { label: 'Contact Us',       href: '#newsletter' },
    ],
  },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
  },
  {
    label: 'GitHub',
    href: '#',
    icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  },
]

/**
 * Site footer with logo, navigation columns, social links, and legal copy.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ocean-dark border-t border-white/10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-water-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-water-500 to-teal-500 flex items-center justify-center shadow-glow-blue group-hover:shadow-glow-teal transition-all duration-300">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
                </svg>
              </div>
              <span className="text-xl font-bold gradient-text">WaterTech</span>
            </a>

            <p className="text-blue-200/60 text-sm leading-relaxed mb-6">
              Pioneering the future of water technology — delivering clean,
              sustainable water solutions to communities and industries worldwide.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card border border-white/10 flex items-center justify-center text-blue-200/60 hover:text-water-400 hover:border-water-500/40 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">{heading}</h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-blue-200/60 hover:text-water-400 text-sm transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/40">
          <p>&copy; {year} WaterTech Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-200/70 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-blue-200/70 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-blue-200/70 transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
