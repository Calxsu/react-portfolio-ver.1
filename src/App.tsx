import { useEffect } from 'react'
import { sections, siteConfig } from '@/data/siteConfig'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { Testimonials } from '@/components/sections/Testimonials'
import { MediaShowcase } from '@/components/sections/MediaShowcase'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

const sectionMap = {
  hero: <Hero />,
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  experience: <Experience />,
  services: <Services />,
  testimonials: <Testimonials />,
  media: <MediaShowcase />,
  contact: <Contact />
}

export default function App() {
  useEffect(() => {
    document.title = siteConfig.seo.title
    const description = document.querySelector('meta[name="description"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')

    if (description) description.setAttribute('content', siteConfig.seo.description)
    if (ogTitle) ogTitle.setAttribute('content', siteConfig.seo.ogTitle)
    if (ogDescription) ogDescription.setAttribute('content', siteConfig.seo.ogDescription)
  }, [])

  const enabledSections = sections.filter((section) => section.enabled)

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="app-background" />
      <div className="app-grid" />
      <Navbar />
      <main className="pt-4">
        {enabledSections.map((section) => (
          <div key={section.id}>{sectionMap[section.id as keyof typeof sectionMap]}</div>
        ))}
      </main>
      <Footer />
    </div>
  )
}
