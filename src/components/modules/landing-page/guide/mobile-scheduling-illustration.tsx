import { PawPrint } from 'lucide-react'
import Image from 'next/image'

import guideUser from '@/assets/guide/user-action.svg'

export function LandingPageGuideMobileSchedulingIllustration() {
  return (
    <div className="relative w-fit">
      <Image
        src={guideUser}
        alt="Customer scheduling on mobile"
        className="h-80 w-80"
      />

      <PawPrint className="absolute right-[32%] top-[32%] h-16 w-16 text-background" />
    </div>
  )
}
