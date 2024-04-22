import { PropsWithChildren } from 'react'

export function FormHeading({ children }: PropsWithChildren) {
  return (
    <h2 className="font-secondary text-3xl">
      <span className="font-extralight">{children}</span>
    </h2>
  )
}
