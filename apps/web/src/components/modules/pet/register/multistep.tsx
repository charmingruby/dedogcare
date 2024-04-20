import { Multistep } from '@/components/shared/ui/form/multistep'

interface PetRegisterMultistepProps {
  step: number
}

export function PetRegisterMultistep({ step }: PetRegisterMultistepProps) {
  return (
    <div className="mt-4">
      <Multistep currentStep={step} size={3} />
    </div>
  )
}
