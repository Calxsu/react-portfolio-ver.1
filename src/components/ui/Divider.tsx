import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type DividerProps = HTMLAttributes<HTMLDivElement>

export function Divider({ className, ...props }: DividerProps) {
  return <div className={cn('h-px w-full bg-line/60', className)} {...props} />
}
