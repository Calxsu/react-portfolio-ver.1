import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'web-apps',
    title: 'Product & Web Development',
    description: 'End-to-end product delivery with refined UI, motion, and scalable architecture.',
    tags: ['React', 'TypeScript', 'Design systems']
  },
  {
    id: 'backend',
    title: 'Backend & API Systems',
    description: 'Modern API design, authentication, and performance-focused infrastructure.',
    tags: ['Node.js', 'PostgreSQL', 'Caching']
  },
  {
    id: 'dashboards',
    title: 'Data & Dashboard Experiences',
    description: 'Operational and analytics dashboards with real-time insights and clarity.',
    tags: ['Visualization', 'Observability', 'UX']
  },
  {
    id: 'launch',
    title: 'Launch & Deployment',
    description: 'Production-ready delivery across Docker, CI/CD, and scalable hosting setups.',
    tags: ['Docker', 'CI/CD', 'Nginx']
  }
]
