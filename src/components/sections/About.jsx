import { motion } from 'framer-motion'
import { Award, Users, Briefcase, Heart } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Design Graphique', percentage: 95 },
    { name: 'Photographie', percentage: 90 },
    { name: 'Vidéographie', percentage: 85 },
    { name: 'Direction Artistique', percentage: 92 },
  ]

  const stats = [
    { icon: Briefcase, value: '150+', label: 'Projets Réalisés' },
    { icon: Users, value: '80+', label: 'Clients Satisfaits' },
    { icon: Award, value: '12', label: 'Prix Remportés' },
    { icon: Heart, value: '100%', label: 'Passion' },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              À Propos de Moi
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Créatif passionné avec plus de 8 ans d'expérience dans le design visuel, 
              je transforme les concepts en expériences visuelles mémorables.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ma philosophie : chaque projet est une opportunité de raconter une histoire 
              unique et de créer un impact émotionnel durable. Je crois en l'alliance 
              parfaite entre esthétique et stratégie.
            </p>

            {/* Skills Bars */}
            <div className="space-y-6 mb-10">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-accent-blue">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-dark-bg rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-accent-blue to-accent-orange rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-dark-bg rounded-lg"
                >
                  <stat.icon className="mx-auto mb-2 text-accent-blue" size={32} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About