import { Dog } from 'lucide-react'

import { PetRegisterMultistep } from '@/components/modules/pet/register/multistep'
import { PetRegisterImageForm } from '@/components/modules/pet/register/pet-image/form'
import { PetRegisterStepHeading } from '@/components/modules/pet/register/step-heading'
import { ReturnLink } from '@/components/shared/return-link'

export default function PetRegisterPetImage() {
  return (
    <div>
      <ReturnLink to="home" url="/" />

      <div className="mt-4">
        <PetRegisterStepHeading icon={Dog} heading="Attach a image" />
        <PetRegisterMultistep step={2} />
        <PetRegisterImageForm />
      </div>
    </div>
  )
}
