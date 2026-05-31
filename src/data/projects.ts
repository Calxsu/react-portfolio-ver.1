import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'aurora-platform',
    title: 'Aurora Commerce Platform',
    summary: 'A headless commerce experience with cinematic storytelling and rapid checkout flows.',
    problem: 'Legacy checkout flows were slow, hard to personalize, and fragile under scale.',
    result: 'Delivered a 42% lift in conversion with a modern, modular storefront stack.',
    category: 'Product',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '',
    video: '',
    links: [
      { label: 'Case Study', href: '#', type: 'case' },
      { label: 'Live Demo', href: '#', type: 'demo' }
    ]
  },
  {
    id: 'signal-ops',
    title: 'Signal Ops Command Center',
    summary: 'A real-time analytics dashboard for operations leaders and reliability teams.',
    problem: 'Teams needed a unified view of system health across 12 services.',
    result: 'Reduced incident response time by 35% with unified observability.',
    category: 'Platform',
    stack: ['React', 'Framer Motion', 'D3.js', 'Node.js', 'Redis'],
    image: '',
    video: '',
    links: [
      { label: 'Case Study', href: '#', type: 'case' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  },
  {
    id: 'nova-studio',
    title: 'Nova Studio',
    summary: 'A creative portfolio builder for design teams with motion-first templates.',
    problem: 'Teams struggled to launch portfolio sites without engineering overhead.',
    result: 'Enabled 120+ teams to launch in under a week with reusable templates.',
    category: 'SaaS',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Supabase'],
    image: '',
    video: '',
    links: [
      { label: 'Live Demo', href: '#', type: 'demo' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  }
]
