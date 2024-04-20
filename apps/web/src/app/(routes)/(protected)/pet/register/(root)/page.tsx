import { Heart, PawPrint } from 'lucide-react'
import Link from 'next/link'

import { FemaleIcon, MaleIcon } from '@/components/shared/gender-icons'
import { ReturnLink } from '@/components/shared/return-link'
import { Button } from '@/components/shared/ui/button'
import { FormHeading } from '@/components/shared/ui/form/heading'
import { Multistep } from '@/components/shared/ui/form/multistep'
import { Label } from '@/components/shared/ui/label'

export default function PetRegisterRoot() {
  return (
    <div>
      <ReturnLink to="home" url="/" />

      <div className="mt-4">
        {/* Header */}
        <div className="flex items-center gap-2">
          <PawPrint className="text-primary" />
          <FormHeading heading="Add a Pet" />
        </div>

        {/* Steps */}
        <div className="mt-4">
          <Multistep currentStep={1} size={2} />
        </div>

        {/* Form */}
        <div className="mt-8 space-y-6">
          {/* Gender */}
          <div className="flex w-full flex-col gap-2">
            <Label>Gender</Label>

            <div className="flex w-full items-center gap-4">
              <Button variant="optionNotSelected" className="w-full gap-1">
                <MaleIcon />
                <span>Male</span>
              </Button>

              <Button variant="optionSelected" className="w-full gap-1">
                <FemaleIcon />
                <span>Female</span>
              </Button>
            </div>
          </div>

          {/* Size */}
          <div>
            <Label>Size</Label>
          </div>

          {/* Weight */}
          {/* Breed */}
          {/* Birthdate */}
          {/* Gender */}
          {/* Size */}
          {/* Weight */}
          {/* Breed */}
          {/* Birthdate */}
        </div>

        <div className="mt-8 flex w-full items-center gap-4">
          <Button variant="defaultSecondary" className="w-full" size="lg">
            Cancel
          </Button>

          <Button className="w-full gap-1" size="lg" asChild>
            <Link prefetch={false} href="/pet/register/pet-image">
              Save
              <Heart className="h-3 w-3 fill-background" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
