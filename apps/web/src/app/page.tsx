import Link from 'next/link'

import { Button } from '@/components/shared/ui/button'

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link href="/pet/register" prefetch={false}>
          /pet/register
        </Link>
      </Button>

      <Button asChild>
        <Link href="/pet/register/pet-image" prefetch={false}>
          /pet/register/pet-image
        </Link>
      </Button>
    </div>
  )
}
