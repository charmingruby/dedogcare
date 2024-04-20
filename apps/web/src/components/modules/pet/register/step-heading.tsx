import { LucideIcon } from 'lucide-react'

import { FormHeading } from '@/components/shared/ui/form/heading'

interface PetRegisterStepHeadingProps {
  icon: LucideIcon
  heading: string
}

export function PetRegisterStepHeading({
  icon: Icon,
  heading,
}: PetRegisterStepHeadingProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="text-primary" />
      <FormHeading>{heading}</FormHeading>
    </div>
  )
}
