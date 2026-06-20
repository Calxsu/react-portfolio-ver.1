import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type TagProps = HTMLAttributes<HTMLSpanElement>

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line/50 bg-surface/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-text/90',
        className
      )}
      {...props}
    />
  )
}
