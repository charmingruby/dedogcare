import Link from 'next/link'

import { AddDogImageFrame } from '@/components/shared/add-dog-image-frame'
import { Button } from '@/components/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card'

export function PetRegisterImageForm() {
  return (
    <Card className="mt-8">
      <CardContent>
        <CardHeader className="gap-2 p-0 pt-6">
          <CardTitle> Let us see the little puppy</CardTitle>
          <CardDescription>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum alias
            sapiente aliquid doloribus quisquam quasi aut ut accusantium velit
            vitae explicabo odit id maiores nobis perferendis totam, iure
            mollitia! Enim.
          </CardDescription>
        </CardHeader>

        {/* Input Frame */}
        <div className="mt-4 flex h-48 w-full flex-col items-center justify-center gap-4 rounded-md border border-dashed">
          <AddDogImageFrame />

          <div className="flex flex-col gap-1 text-center">
            <strong className="text-sm font-bold text-primary">
              Click to upload
            </strong>
            <small className="text-xs text-muted-foreground">
              SVG, PNG, JPG or GIF (max. 800x400px)
            </small>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="mt-8 flex w-full items-center gap-4">
          <Button variant="defaultSecondary" className="w-full" size="lg">
            Cancel
          </Button>

          <Button className="w-full gap-1" size="lg" asChild>
            <Link
              prefetch={false}
              href="/pet/register/documentation"
              className="space-x-2"
            >
              Save
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
