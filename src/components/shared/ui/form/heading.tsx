import { PropsWithChildren } from 'react'

export function FormHeading({ children }: PropsWithChildren) {
  return (
    <h2 className="font-secondary text-2xl">
      <strong>{children}</strong>
    </h2>
  )
}
