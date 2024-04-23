import { PropsWithChildren } from 'react'

import { cn } from '@/libs/tw-merge'

interface ContentParagraphProps extends PropsWithChildren {
  className?: string
}

export function ContentParagraph({
  children,
  className,
}: ContentParagraphProps) {
  return <p className={cn('leading-relaxed', className)}>{children}</p>
}
