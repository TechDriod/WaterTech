/**
 * Hero section – the first visual impression of the site.
 * Features a bold headline, sub-copy, CTA buttons, and floating
 * decorative orbs to create depth.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ocean-dark pt-16"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-water-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-water-800/10 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(42,164,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(42,164,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: text content */}
        <div className="flex-1 text-center lg:text-left animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-water-600/20 border border-water-500/30 text-water-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            Next-Generation Water Solutions
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-white">Shaping the</span>
            <br />
            <span className="gradient-text">Future of Water</span>
            <br />
            <span className="text-white">Technology</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-200/70 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            WaterTech pioneers advanced purification systems, AI-driven monitoring,
            and sustainable infrastructure to ensure clean water for every community—today and tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#features" className="btn-primary">
              Explore Solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#technology" className="btn-outline">
              Our Technology
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
            {[
              { value: '500M+', label: 'Litres Purified' },
              { value: '120+',  label: 'Countries Served' },
              { value: '99.9%', label: 'Purity Rate' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <p className="text-2xl font-black gradient-text">{value}</p>
                <p className="text-xs text-blue-200/60 mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: decorative water orb visual */}
        <div className="flex-1 flex items-center justify-center animate-float">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-water-500/30 animate-spin-slow" />
            {/* Middle ring */}
            <div className="absolute inset-8 rounded-full border border-teal-400/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
            {/* Inner glowing sphere */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-water-600 via-water-500 to-teal-400 shadow-glow-blue animate-glow flex items-center justify-center">
              {/* Water drop icon */}
              <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24 opacity-90">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
              </svg>
            </div>

            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div
                key={deg}
                className="absolute w-3 h-3 rounded-full bg-teal-400 shadow-glow-teal"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)`,
                  marginTop: '-6px',
                  marginLeft: '-6px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-200/50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
