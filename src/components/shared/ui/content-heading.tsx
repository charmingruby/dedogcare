import { ReactNode } from 'react'

import { cn } from '@/libs/tw-merge'

interface ContentHeadingProps {
  children: ReactNode
  className?: string
}

export function ContentHeading({ children, className }: ContentHeadingProps) {
  return (
    <h2 className={cn('font-secondary text-5xl font-semibold', className)}>
      {children}
    </h2>
  )
}
