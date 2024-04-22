import { AddDogImageFrame } from '@/components/shared/add-dog-image-frame'
import { ReturnLink } from '@/components/shared/return-link'
import { FormHeading } from '@/components/shared/ui/form/heading'

export default function PetRegisterPetImage() {
  return (
    <div>
      <ReturnLink to="home" url="/" />

      <div>
        <FormHeading heading="Add a Pet" />

        {/* Pet Image */}
        <div className="flex gap-4">
          <div>
            <AddDogImageFrame />
          </div>

          <div className="flex w-full flex-col">
            <strong>Pet image</strong>

            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, alias? Officiis iure est nihil omnis, delectus
              necessitatibus nemo, ducimus nostrum pariatur ullam, debitis
              blanditiis dignissimos! Laudantium illo nam quo molestiae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
