import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-6', className)} {...props} />
}
