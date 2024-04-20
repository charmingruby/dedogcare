import { PropsWithChildren } from 'react'

import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'

export default function PetRegisterLayout({ children }: PropsWithChildren) {
  return (
    <MaxWidthWrapper>
      <div className="mt-8">{children}</div>
    </MaxWidthWrapper>
  )
}
