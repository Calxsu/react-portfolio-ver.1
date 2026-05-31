import type { ReactNode } from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'
import { stagger } from '@/utils/motion'

type StaggerProps = HTMLMotionProps<'div'> & {
  children: ReactNode
}

export function Stagger({ children, className, ...props }: StaggerProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={stagger}
      initial={prefersReducedMotion ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
