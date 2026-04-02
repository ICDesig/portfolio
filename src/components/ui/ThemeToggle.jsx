import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-dark-card border border-dark-border rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-blue/50 transition-shadow"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <Sun className="text-accent-orange" size={24} />
        ) : (
          <Moon className="text-accent-blue" size={24} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle