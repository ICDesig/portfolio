import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-lg bg-dark-card cursor-pointer"
      >
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="text-accent-blue text-sm uppercase tracking-wider font-medium">
              {project.category}
            </span>
            <h3 className="text-2xl font-display font-bold mt-2 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex items-center text-accent-blue">
              <span className="text-sm font-medium mr-2">Voir le projet</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default ProjectCard