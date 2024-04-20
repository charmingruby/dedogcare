import { PropsWithChildren } from 'react'

import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'

export default function PetRegisterLayout({ children }: PropsWithChildren) {
  return (
    <MaxWidthWrapper>
      <div className="pt-8">{children}</div>
    </MaxWidthWrapper>
  )
}
