import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import type { SocialLink } from '@/types'

export const socials: SocialLink[] = [
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'Email', href: 'mailto:hello@yourdomain.com', icon: Mail }
]
