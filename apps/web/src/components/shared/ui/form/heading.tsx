interface FormHeadingProps {
  heading: string
}

export function FormHeading({ heading }: FormHeadingProps) {
  return (
    <h2 className="font-secondary text-2xl">
      <strong>{heading}</strong>
    </h2>
  )
}
