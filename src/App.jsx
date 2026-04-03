import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Technology from './components/Technology'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

/**
 * Root application component.
 * Composes all page sections in order.
 */
function App() {
  return (
    <div className="min-h-screen bg-ocean-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
