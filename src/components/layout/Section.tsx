import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Container } from './Container'

type SectionProps = HTMLAttributes<HTMLElement> & {
  id: string
  children: ReactNode
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20', className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}
