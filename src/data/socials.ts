import { Linkedin, Mail, Phone } from 'lucide-react'
import type { SocialLink } from '@/types'

export const socials: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/john-lorenz-caranza-08014115a/',
    icon: Linkedin
  },
  { label: 'Email', href: 'mailto:johnlorenzcaranza27@gmail.com', icon: Mail },
  { label: 'Phone', href: 'tel:+639766789751', icon: Phone }
]
