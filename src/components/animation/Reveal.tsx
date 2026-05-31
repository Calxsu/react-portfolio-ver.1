import type { ReactNode } from 'react'
import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils/cn'
import { fadeUp } from '@/utils/motion'

type RevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode
  delay?: number
}

export function Reveal({ children, delay = 0, className, ...props }: RevealProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      initial={prefersReducedMotion ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
