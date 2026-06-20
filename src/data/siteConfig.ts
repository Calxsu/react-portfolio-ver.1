import type { SectionConfig } from '@/types'

export const siteConfig = {
  name: 'John Lorenz Benavidez Caranza',
  role: 'Full-Stack Web Developer',
  tagline:
    'Building Laravel and React-based systems for academic, internship, and business workflows with a practical, production-minded approach.',
  navLinks: [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ],
  location: 'Science City of Muñoz, Nueva Ecija, Philippines',
  availability: 'Open to web development opportunities and collaborations.',
  hero: {
    headline: 'I build full-stack web systems that support real workflows.',
    subheadline:
      'A BSIT graduate with hands-on experience building Laravel-driven platforms, responsive interfaces, dashboards, and workflow automation for academic and business use cases.',
    portrait: {
      src: '',
      alt: 'Portrait of John Lorenz Benavidez Caranza',
      note: 'Add portrait image'
    },
    primaryCta: {
      label: 'View Projects',
      href: '#projects'
    },
    secondaryCta: {
      label: 'Contact Me',
      href: '#contact'
    },
    focus: {
      kicker: 'Current focus',
      title: 'Laravel, React, and database-driven applications',
      description:
        'Creating practical web solutions with clear UI, role-based workflows, notifications, and maintainable architecture.',
      facts: [
        { label: 'Role', value: 'Full-Stack Web Developer' },
        { label: 'Location', value: 'Science City of Muñoz, Nueva Ecija' },
        { label: 'Availability', value: 'Available for opportunities' },
        { label: 'Focus', value: 'Laravel + React + MySQL' }
      ],
      tags: ['Laravel', 'React', 'PHP', 'MySQL', 'Docker']
    }
  },
  about: {
    lead: 'I combine hands-on development experience with a strong foundation in web engineering, testing, and documentation.',
    story:
      'As a Cum Laude BSIT graduate, I have built academic and internship systems using Laravel, Livewire, PHP, MySQL, Tailwind CSS, Docker, and Vite. My work spans responsive interfaces, role-based access, reporting, notifications, and QA-tested modules for real users and administrators.',
    portrait: {
      src: '',
      alt: 'Workspace portrait',
      note: 'Add workspace photo'
    },
    values: [
      'Reliable, maintainable web applications',
      'Practical problem-solving for academic and business systems',
      'Clear communication and team-oriented development'
    ]
  },
  stats: [
    { label: 'Projects built', value: 5, suffix: '+' },
    { label: 'Academic & internship systems', value: 3, suffix: '+' },
    { label: 'Technologies used', value: 10, suffix: '+' }
  ],
  seo: {
    title: 'John Lorenz Caranza | Full-Stack Web Developer',
    description: 'Resume-focused portfolio for John Lorenz Benavidez Caranza, featuring Laravel, React, PHP, MySQL, and full-stack web development projects.',
    ogTitle: 'John Lorenz Caranza Portfolio',
    ogDescription: 'Portfolio showcasing web development projects and experience for John Lorenz Benavidez Caranza.'
  },
  contact: {
    headline: 'Let’s connect.',
    description:
      'Open to internships, freelance work, and full-time opportunities in web development.',
    email: 'johnlorenzcaranza27@gmail.com',
    calendly: '',
    formspree: '',
    helper: 'Phone: +63 976 678 9751 • LinkedIn: linkedin.com/in/john-lorenz-caranza-08014115a'
  }
}

export const sections: SectionConfig[] = [
  { id: 'hero', label: 'Overview', enabled: true },
  { id: 'about', label: 'About', enabled: true },
  { id: 'skills', label: 'Skills', enabled: true },
  { id: 'projects', label: 'Projects', enabled: true },
  { id: 'experience', label: 'Experience', enabled: true },
  { id: 'contact', label: 'Contact', enabled: true }
]
