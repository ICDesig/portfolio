import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import { useEffect, useState } from 'react'

const Hero = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Smart Design'

  // Animation typing effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  // Animation des lettres individuelles
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
      },
    }),
  }

  const words = ['Smart', 'Design']

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background avec parallax */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Presentation en video du test.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-blue/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Logo Smart Design avec animation 3D */}
        <div className="mb-12 perspective-1000">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
            {words.map((word, wordIndex) => (
              <div key={wordIndex} className="flex">
                {word.split('').map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    custom={wordIndex * 5 + letterIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ 
                      scale: 1.2, 
                      color: '#F97316',
                      rotateY: 360,
                      transition: { duration: 0.5 }
                    }}
                    className={`text-6xl md:text-8xl lg:text-9xl font-display font-bold inline-block cursor-pointer
                      ${wordIndex === 0 ? 'text-accent-blue' : 'text-white'}
                    `}
                    style={{
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>

          {/* Underline animée */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-accent-blue via-accent-orange to-accent-blue mx-auto mt-6 rounded-full"
            style={{ maxWidth: '600px' }}
          />
        </div>

        {/* Tagline avec effet de typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mb-8"
        >
          <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">
            Votre vision
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent-orange mx-3"
            >
              •
            </motion.span>
            Notre expertise
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Nous transformons les concepts créatifs en expériences visuelles 
          exceptionnelles qui captivent et inspirent
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button href="#portfolio" className="animate-glow">
            Découvrir nos projets
          </Button>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white font-medium uppercase tracking-wider text-sm rounded-lg hover:bg-white hover:text-dark-bg transition-all duration-300"
          >
            Démarrer un projet
          </motion.a>
        </motion.div>

        {/* Stats animés */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '150+', label: 'Projets' },
            { value: '80+', label: 'Clients' },
            { value: '12', label: 'Prix' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3 + index * 0.2, type: 'spring' }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator Amélioré */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#portfolio" className="flex flex-col items-center gap-2 group">
          <span className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-accent-blue rounded-full"
            />
          </div>
        </a>
      </motion.div>

      {/* Gradient glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent z-[5]" />
    </section>
  )
}

export default Hero