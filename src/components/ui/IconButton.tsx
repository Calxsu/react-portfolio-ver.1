import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type IconButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function IconButton({ className, children, ...props }: IconButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/60 text-muted transition hover:border-accent/60 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
