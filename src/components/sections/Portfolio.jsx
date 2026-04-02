import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = ['all', 'design', 'photographie', 'vidéographie']

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Mes Projets
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Une sélection de mes meilleures réalisations
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`
                px-6 py-3 rounded-lg font-medium uppercase tracking-wider text-sm
                transition-all duration-300
                ${activeFilter === cat
                  ? 'bg-accent-blue text-white'
                  : 'bg-dark-card text-gray-400 hover:text-white'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio