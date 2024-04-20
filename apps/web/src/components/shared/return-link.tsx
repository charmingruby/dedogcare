import { CornerDownLeft } from 'lucide-react'
import Link from 'next/link'

interface ReturnLinkProps {
  to: string
  url: string
}

export function ReturnLink({ to, url }: ReturnLinkProps) {
  const message = `Return to ${to}`

  return (
    <Link
      href={url}
      prefetch={false}
      className="flex w-fit items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
    >
      <CornerDownLeft className="h-3 w-3" strokeWidth={2.5} />
      <span className="text-sm">{message}</span>
    </Link>
  )
}
