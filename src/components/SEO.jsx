import { useEffect } from 'react'

const SEO = ({ 
  title = 'Smart Design - Design & Création Visuelle', 
  description = 'Studio créatif spécialisé en design graphique, photographie et vidéographie. Transformez vos idées en expériences visuelles exceptionnelles.',
  keywords = 'design graphique, photographie, vidéographie, branding, identité visuelle, création',
  image = '/og-image.jpg',
  url = 'https://smartdesign.com'
}) => {
  useEffect(() => {
    // Title
    document.title = title

    // Meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ]

    // Supprimer les anciennes meta tags
    metaTags.forEach(({ name, property }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
      const existing = document.querySelector(selector)
      if (existing) {
        existing.remove()
      }
    })

    // Ajouter les nouvelles meta tags
    metaTags.forEach(({ name, property, content }) => {
      const meta = document.createElement('meta')
      if (name) meta.name = name
      if (property) meta.setAttribute('property', property)
      meta.content = content
      document.head.appendChild(meta)
    })

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url

    // Cleanup
    return () => {
      metaTags.forEach(({ name, property }) => {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
        const meta = document.querySelector(selector)
        if (meta) meta.remove()
      })
    }
  }, [title, description, keywords, image, url])

  return null
}

export default SEO