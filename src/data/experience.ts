import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'studio-lead',
    role: 'Lead Product Engineer',
    company: 'Atlas Studio',
    period: '2023 - Present',
    location: 'Remote',
    highlights: [
      'Directed frontend architecture for a suite of premium product sites.',
      'Built a reusable motion system used across 8 client engagements.',
      'Mentored a team of 6 engineers on scalable UI patterns.'
    ]
  },
  {
    id: 'platform-engineer',
    role: 'Senior Full-Stack Engineer',
    company: 'Signal Labs',
    period: '2020 - 2023',
    location: 'San Francisco, CA',
    highlights: [
      'Designed real-time dashboards for operations teams.',
      'Improved API response time by 47% with caching and observability.',
      'Led cross-functional delivery for a major platform relaunch.'
    ]
  },
  {
    id: 'founder',
    role: 'Freelance Product Partner',
    company: 'Independent',
    period: '2017 - 2020',
    location: 'Global',
    highlights: [
      'Partnered with founders to launch MVPs and validate product-market fit.',
      'Shipped 20+ production websites and interactive experiences.',
      'Established repeatable design + engineering workflows.'
    ]
  }
]
