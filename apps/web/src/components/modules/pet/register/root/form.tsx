import { Heart } from 'lucide-react'
import Link from 'next/link'

import { FemaleIcon, MaleIcon } from '@/components/shared/gender-icons'
import { Button } from '@/components/shared/ui/button'
import { Label } from '@/components/shared/ui/label'

export function PetRegisterRootForm() {
  return (
    <>
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
    </>
  )
}
