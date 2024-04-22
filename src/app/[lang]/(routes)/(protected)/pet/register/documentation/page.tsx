import { File } from 'lucide-react'

import { PetRegisterDocumentationContent } from '@/components/modules/pet/register/documentation/content'
import { PetRegisterMultistep } from '@/components/modules/pet/register/multistep'
import { PetRegisterStepHeading } from '@/components/modules/pet/register/step-heading'
import { ReturnLink } from '@/components/shared/return-link'

export default function PetRegisterDocumentation() {
  return (
    <div>
      <ReturnLink to="home" url="/" />

      <div className="mt-4">
        <PetRegisterStepHeading icon={File} heading="Documentation" />
        <PetRegisterMultistep step={3} />
        <PetRegisterDocumentationContent />
      </div>
    </div>
  )
}
