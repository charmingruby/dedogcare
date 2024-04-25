import Link from 'next/link'

export function FooterLinkGroups() {
  return (
    <div className="space-y-2">
      {/* Label */}
      <span className="font-semibold">Services</span>

      {/* List */}
      <div className="flex flex-col gap-1 text-sm">
        <Link
          prefetch={false}
          href="/"
          className="text-muted-foreground transition-all hover:text-primary hover:underline"
        >
          Stay
        </Link>
        <Link
          prefetch={false}
          href="/"
          className="text-muted-foreground transition-all hover:text-primary hover:underline"
        >
          Nursery
        </Link>
        <Link
          prefetch={false}
          href="/"
          className="text-muted-foreground transition-all hover:text-primary hover:underline"
        >
          Overnight
        </Link>
        <Link
          prefetch={false}
          href="/"
          className="text-muted-foreground transition-all hover:text-primary hover:underline"
        >
          Dog Walk
        </Link>
      </div>
    </div>
  )
}
