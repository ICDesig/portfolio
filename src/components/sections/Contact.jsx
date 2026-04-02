import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Input from '../ui/Input'
import Button from '../ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Envoi en cours...' })

    // Simulation d'envoi (remplacer par EmailJS plus tard)
    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message envoyé avec succès!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@smartdesign.com' },
    { icon: Phone, label: 'Téléphone', value: '+242 06 123 45 67' },
    { icon: MapPin, label: 'Localisation', value: 'Brazzaville, Congo' },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Travaillons Ensemble
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en autour d'un café virtuel
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold mb-8">
              Informations de Contact
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-accent-blue" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className="text-lg font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Behance', 'LinkedIn', 'Twitter'].map((social) => (
                  <a 
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-bg rounded-lg flex items-center justify-center hover:bg-accent-blue transition-colors duration-300 text-sm font-bold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <Input
                label="Votre Nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Input
                label="Sujet"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <Input
                label="Votre Message"
                name="message"
                textarea
                value={formData.message}
                onChange={handleChange}
                required
              />

              {status.message && (
                <div className={`p-4 rounded-lg ${
                  status.type === 'success' ? 'bg-green-500/20 text-green-400' : 
                  status.type === 'error' ? 'bg-red-500/20 text-red-400' : 
                  'bg-accent-blue/20 text-accent-blue'
                }`}>
                  {status.message}
                </div>
              )}

              <Button type="submit" className="w-full flex items-center justify-center space-x-2">
                <span>Envoyer le Message</span>
                <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact