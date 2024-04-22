import { Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/shared/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card'

export function PetRegisterDocumentationContent() {
  return (
    <Card className="mt-8 flex flex-col items-center justify-center">
      <CardHeader className="flex-col items-center gap-4 pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Check className="mt-0.5 text-primary " />
        </div>
        <CardTitle>Pet registered successfully</CardTitle>
        <CardDescription>
          We need your pet{"'"}s documentation so you can receive your care.
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <div className="mt-6 flex w-full items-center gap-4">
          <Button variant="defaultSecondary" className="w-full" size="lg">
            Later
          </Button>

          <Button className="w-full gap-1" size="lg" asChild>
            <Link
              prefetch={false}
              href="/pet/register/documentation"
              className="space-x-2"
            >
              Continue
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
