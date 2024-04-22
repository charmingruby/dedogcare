import { PropsWithChildren } from 'react'

import { PetRegisterContainer } from '@/components/modules/pet/register/container'

export default function PetRegisterLayout({ children }: PropsWithChildren) {
  return (
    <PetRegisterContainer>
      <div className="pt-8">{children}</div>
    </PetRegisterContainer>
  )
}
