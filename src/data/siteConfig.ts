import type { SectionConfig } from '@/types'

export const siteConfig = {
  name: 'Alex Meridian',
  role: 'Senior Full-Stack Developer',
  tagline: 'Designing immersive, production-ready digital products with a focus on clarity, speed, and business impact.',
  location: 'Remote / San Francisco, CA',
  availability: 'Available for select freelance and product collaborations.',
  hero: {
    headline: 'I build cinematic, high-performance web experiences.',
    subheadline:
      'A full-stack engineer shaping premium user journeys, scalable systems, and modern product identities.',
    primaryCta: {
      label: 'View Projects',
      href: '#projects'
    },
    secondaryCta: {
      label: 'Start a Project',
      href: '#contact'
    },
    focus: {
      kicker: 'Current focus',
      title: 'Product systems + motion-first UI',
      description:
        'Building premium digital experiences with composable design systems and fast delivery.',
      facts: [
        { label: 'Role', value: 'Senior Full-Stack Developer' },
        { label: 'Location', value: 'Remote / San Francisco, CA' },
        { label: 'Availability', value: 'Open for 2026' },
        { label: 'Focus', value: 'Full-stack delivery' }
      ],
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion']
    }
  },
  about: {
    lead: 'I blend engineering discipline with creative direction to craft products that feel effortless and refined.',
    story:
      'With a background spanning startups, agencies, and product teams, I help founders and teams deliver polished experiences that scale. My process is rooted in discovery, rapid prototyping, and careful execution across frontend, backend, and infrastructure.',
    values: [
      'Product-first collaboration with measurable outcomes',
      'Systems thinking for performance, reliability, and clarity',
      'Design-forward implementation that respects accessibility'
    ]
  },
  stats: [
    { label: 'Years shipping products', value: 8, suffix: '+' },
    { label: 'Projects delivered', value: 40, suffix: '+' },
    { label: 'Avg. Lighthouse score', value: 95, suffix: '' }
  ],
  seo: {
    title: 'Developer Portfolio | Alex Meridian',
    description: 'Premium developer portfolio template built with React, TypeScript, Tailwind, and Framer Motion.',
    ogTitle: 'Developer Portfolio Template',
    ogDescription: 'A cinematic, modern portfolio for full-stack developers and product engineers.'
  },
  contact: {
    headline: 'Let us build the next product together.',
    description:
      'Share a short brief and I will respond within 48 hours with a tailored plan and timeline.',
    email: 'hello@yourdomain.com',
    calendly: '',
    formspree: '',
    helper: 'Replace this email with your own or connect a form provider in the README instructions.'
  }
}

export const sections: SectionConfig[] = [
  { id: 'hero', label: 'Overview', enabled: true },
  { id: 'about', label: 'About', enabled: true },
  { id: 'skills', label: 'Skills', enabled: true },
  { id: 'projects', label: 'Projects', enabled: true },
  { id: 'experience', label: 'Experience', enabled: true },
  { id: 'services', label: 'Services', enabled: true },
  { id: 'testimonials', label: 'Testimonials', enabled: true },
  { id: 'media', label: 'Showcase', enabled: true },
  { id: 'contact', label: 'Contact', enabled: true }
]
