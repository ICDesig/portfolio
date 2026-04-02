import SEO from '../components/SEO'
import Hero from '../components/sections/Hero'
import Portfolio from '../components/sections/Portfolio'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <>
      <SEO />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Contact />
    </>
  )
}

export default Home