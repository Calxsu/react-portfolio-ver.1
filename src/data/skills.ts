import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Storybook']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs', 'GraphQL', 'Authentication', 'Event-driven systems']
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'Redis', 'Prisma', 'Data modeling', 'Analytics instrumentation']
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'CI/CD pipelines', 'Nginx', 'Observability', 'Infrastructure as code']
  },
  {
    title: 'Product',
    items: ['Design systems', 'UX collaboration', 'Accessibility', 'Performance budgets']
  }
]
