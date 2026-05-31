import type { LucideIcon } from 'lucide-react'

export type SectionConfig = {
  id: string
  label: string
  enabled: boolean
}

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type ProjectLink = {
  label: string
  href: string
  type: 'demo' | 'repo' | 'case'
}

export type Project = {
  id: string
  title: string
  summary: string
  problem: string
  result: string
  category: string
  stack: string[]
  image: string
  video: string
  links: ProjectLink[]
}

export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  location: string
  highlights: string[]
}

export type Service = {
  id: string
  title: string
  description: string
  tags: string[]
}

export type Testimonial = {
  id: string
  name: string
  role: string
  quote: string
}

export type MediaItem = {
  id: string
  title: string
  description: string
  type: 'video' | 'image'
  src: string
  poster: string
}
