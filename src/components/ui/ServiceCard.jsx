import { motion } from 'framer-motion'

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative p-8 bg-dark-card rounded-2xl border border-dark-border hover:border-accent-blue transition-all duration-300 overflow-hidden"
    >
      {/* Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 bg-accent-blue/20 rounded-xl flex items-center justify-center group-hover:bg-accent-blue group-hover:scale-110 transition-all duration-300">
          <service.icon className="text-accent-blue group-hover:text-white" size={32} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent-blue transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <span className="text-accent-blue mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default ServiceCard