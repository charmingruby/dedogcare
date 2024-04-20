import Image from 'next/image'

import femaleIcon from '@/assets/gender-symbols/female.png'
import maleIcon from '@/assets/gender-symbols/male.png'
import { cn } from '@/libs/tw-merge'

interface GenderIconProps {
  className?: string
}

export function MaleIcon({ className }: GenderIconProps) {
  return (
    <Image
      src={maleIcon}
      alt="Male icon"
      className={cn('h-6 w-6', className)}
    />
  )
}

export function FemaleIcon({ className }: GenderIconProps) {
  return (
    <Image
      src={femaleIcon}
      alt="Female icon"
      className={cn('h-6 w-6', className)}
    />
  )
}
