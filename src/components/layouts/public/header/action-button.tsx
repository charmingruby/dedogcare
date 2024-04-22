import { PawPrint } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/shared/ui/button'

export function ActionButton() {
  return (
    <Button size="lg">
      <Link
        href="/pet/register"
        prefetch={false}
        className="flex items-center gap-1 text-base"
      >
        Schedule
        <PawPrint className="h-4 w-4" />
      </Link>
    </Button>
  )
}
