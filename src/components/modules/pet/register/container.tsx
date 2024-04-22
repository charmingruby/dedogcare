import { PropsWithChildren } from 'react'

import { cn } from '@/libs/tw-merge'

interface PetRegisterContainerProps extends PropsWithChildren {
  className?: string
}

export function PetRegisterContainer({
  children,
  className,
}: PetRegisterContainerProps) {
  return (
    <div className={cn('mx-auto w-full max-w-4xl px-8', className)}>
      {children}
    </div>
  )
}
