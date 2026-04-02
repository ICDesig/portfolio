import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} Creative Studio. Tous droits réservés.
          </div>

          {/* Made with love */}
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Fait avec</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>à Brazzaville</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer