import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LoadingScreen } from './components/LoadingScreen'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { useLoadingScreen } from './hooks/useLoadingScreen'

function App() {
  const isLoading = useLoadingScreen(1100)

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="site-shell">
        <Header />
        <main id="top">
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
