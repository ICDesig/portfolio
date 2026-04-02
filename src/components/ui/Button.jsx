import { motion } from 'framer-motion'

const Button = ({ children, href, className = '', ...props }) => {
  const Component = href ? 'a' : 'button'
  
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component
        href={href}
        className={`
          inline-block px-8 py-4 
          bg-accent-blue text-white 
          font-medium uppercase tracking-wider text-sm
          rounded-lg
          transition-all duration-300
          hover:bg-accent-blue/90
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}

export default Button