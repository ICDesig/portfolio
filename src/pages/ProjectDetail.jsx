import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
import { projects } from '../data/projects'
import SEO from '../components/SEO'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projet non trouvé</h1>
          <Link to="/" className="text-accent-blue hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title={`${project.title} - Smart Design`}
        description={project.description}
        image={project.image}
      />
      
      <div className="pt-20">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour aux projets</span>
        </Link>

        {/* Title & Meta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Tag size={18} />
              <span>{project.category}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span>Client: XYZ Company</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>2024</span>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl">
              {project.description}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div className="bg-dark-card p-6 rounded-xl h-fit">
            <h3 className="text-xl font-bold mb-4">Détails du Projet</h3>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-gray-400 mb-1">Année</div>
                <div className="font-medium">2024</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Catégorie</div>
                <div className="font-medium">{project.category}</div>
              </div>
              <div>
                <div className="text-gray-400 mb-1">Rôle</div>
                <div className="font-medium">Direction Artistique, Design</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-8 mb-16">
          {[1, 2, 3].map((item) => (
            <motion.img
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000}?w=1200`}
              alt={`Gallery ${item}`}
              className="w-full rounded-xl"
            />
          ))}
        </div>

        {/* Next Project */}
        <div className="text-center pt-12 border-t border-dark-border">
          <Link
            to={`/project/${project.id === projects.length ? 1 : project.id + 1}`}
            className="inline-block text-accent-blue hover:text-accent-orange transition-colors text-lg font-medium"
          >
            Voir le projet suivant →
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetail