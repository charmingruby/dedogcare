import Link from 'next/link'

import { Button } from '@/components/shared/ui/button'

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link href="/app/customers" prefetch={false}>
          /app/customers
        </Link>
      </Button>
    </div>
  )
}
