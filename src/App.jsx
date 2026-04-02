import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import CustomCursor from "./components/ui/CustomCursor";
import PageLoader from "./components/ui/PageLoader";
import ThemeToggle from "./components/ui/ThemeToggle";
import SEO from "./components/SEO";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

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
                {/* Route principale */}
                <Route path="/" element={<Home />} />
                
                {/* Route détails projet */}
                <Route path="/project/:id" element={<ProjectDetail />} />

                {/* CORRECTION : Capture toutes les autres routes (ex: /portfolio, /about)
                  et les redirige vers l'accueil pour éviter les erreurs de console.
                */}
                <Route path="*" element={<Home />} />
              </Routes>
            </AnimatePresence>

            <Footer />

            <ThemeToggle />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;