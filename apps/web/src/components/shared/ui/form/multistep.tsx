interface MultistepProps {
  size: number
  currentStep: number
}

export function Multistep({ currentStep, size }: MultistepProps) {
  return (
    <div className="w-full space-y-2">
      <small className="font-medium text-muted-foreground">
        Step {currentStep} of {size}
      </small>

      <div className="flex w-full gap-2">
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </div>
    </div>
  )
}

interface StepProps {
  active: boolean
}

export function Step({ active }: StepProps) {
  return (
    <>
      {active ? (
        <div className="h-1 w-full rounded-md bg-primary" />
      ) : (
        <div className="h-1 w-full rounded-md bg-muted" />
      )}
    </>
  )
}
