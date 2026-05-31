import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

const variants = {
  primary:
    'bg-accent text-slate-900 shadow-glow hover:translate-y-[-1px] hover:shadow-xl',
  secondary: 'border border-line/60 text-text hover:border-accent/60 hover:text-accent',
  ghost: 'text-muted hover:text-text'
}

export function Button({ href, variant = 'primary', className, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <a className={cn(baseStyles, variants[variant], className)} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
