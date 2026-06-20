import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn('glass rounded-3xl p-6 transition duration-300 hover:-translate-y-0.5', className)}
      {...props}
    />
  )
}
