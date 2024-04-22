import { PawPrint } from 'lucide-react'

import { PetRegisterMultistep } from '@/components/modules/pet/register/multistep'
import { PetRegisterRootForm } from '@/components/modules/pet/register/root/form'
import { PetRegisterStepHeading } from '@/components/modules/pet/register/step-heading'
import { ReturnLink } from '@/components/shared/return-link'
import { LanguageRootProps } from '@/i18n'

export default function PetRegisterRoot({
  params: { lang },
}: LanguageRootProps) {
  return (
    <div>
      <ReturnLink to="home" url="/" />

      <div className="mt-4">
        <PetRegisterStepHeading icon={PawPrint} heading="Add a Pet" />
        <PetRegisterMultistep step={1} />
        <PetRegisterRootForm lang={lang} />
      </div>
    </div>
  )
}
