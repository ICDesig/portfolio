import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import CustomCursor from './components/ui/CustomCursor'
import PageLoader from './components/ui/PageLoader'
import ThemeToggle from './components/ui/ThemeToggle'
import SEO from './components/SEO'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SEO />
      <Router>
        <AnimatePresence mode="wait">
          {isLoading && <PageLoader key="loader" />}
        </AnimatePresence>

        {!isLoading && (
          <div className="min-h-screen bg-dark-bg">
            {/* Curseur personnalisé (desktop seulement) */}
            <div className="hidden lg:block">
              <CustomCursor />
            </div>

            <Navbar />
            
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
              </Routes>
            </AnimatePresence>
            
            <Footer />
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        )}
      </Router>
    </>
  )
}

export default App