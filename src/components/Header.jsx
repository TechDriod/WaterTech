import { useState, useEffect } from 'react'

/**
 * Navigation link items rendered in the Header.
 */
const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Features',    href: '#features' },
  { label: 'Technology',  href: '#technology' },
  { label: 'Testimonials',href: '#testimonials' },
  { label: 'Contact',     href: '#newsletter' },
]

/**
 * Site header with logo, navigation, and a CTA button.
 * Becomes opaque on scroll for readability.
 */
export default function Header() {
  const [scrolled,     setScrolled]     = useState(false)
  const [menuOpen,     setMenuOpen]     = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ocean-dark/95 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Water drop SVG icon */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-water-500 to-teal-500 flex items-center justify-center shadow-glow-blue group-hover:shadow-glow-teal transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">WaterTech</span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-blue-200/80 hover:text-white font-medium transition-colors duration-200 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-water-400 to-teal-400 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#newsletter" className="hidden md:inline-flex btn-primary text-sm px-6 py-3">
            Get Started
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-white/10 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-blue-200/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <div className="pt-2 px-4">
              <a href="#newsletter" onClick={() => setMenuOpen(false)} className="btn-primary text-sm w-full justify-center">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
