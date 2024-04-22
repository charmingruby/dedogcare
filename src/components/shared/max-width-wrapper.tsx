import { PropsWithChildren } from 'react'

import { cn } from '@/libs/tw-merge'

interface Props extends PropsWithChildren {
  className?: string
}

export function MaxWidthWrapper({ children, className }: Props) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-8', className)}>
      {children}
    </div>
  )
}
