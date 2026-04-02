import { motion } from 'framer-motion'
import { Palette, Camera, Video, Lightbulb } from 'lucide-react'
import ServiceCard from '../ui/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Design Graphique',
      description: 'Création d\'identités visuelles complètes et supports de communication percutants.',
      features: [
        'Logo & Identité de marque',
        'Print & Digital Design',
        'Packaging & Merchandising',
        'UI/UX Design',
      ],
    },
    {
      icon: Camera,
      title: 'Photographie',
      description: 'Shootings professionnels pour capturer l\'essence de votre marque ou événement.',
      features: [
        'Photographie Corporate',
        'Photographie de Produits',
        'Fashion & Éditoriale',
        'Événementiel',
      ],
    },
    {
      icon: Video,
      title: 'Vidéographie',
      description: 'Production vidéo de A à Z pour raconter votre histoire de manière captivante.',
      features: [
        'Vidéos Promotionnelles',
        'Documentaires & Reportages',
        'Motion Design',
        'Montage & Post-production',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Direction Artistique',
      description: 'Conception et orchestration de projets créatifs innovants et cohérents.',
      features: [
        'Stratégie Créative',
        'Concept & Storytelling',
        'Direction de Projets',
        'Consulting Créatif',
      ],
    },
  ]

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Mes Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions créatives sur mesure pour donner vie à vos projets
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-dark-card rounded-2xl"
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Mon Processus de Travail
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Découverte', desc: 'Analyse de vos besoins et objectifs' },
              { step: '02', title: 'Concept', desc: 'Élaboration de solutions créatives' },
              { step: '03', title: 'Production', desc: 'Réalisation et développement' },
              { step: '04', title: 'Livraison', desc: 'Finalisation et support' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent-blue/30 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services