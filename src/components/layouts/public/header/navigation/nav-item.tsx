import Link from 'next/link'

interface NavItemProps {
  url: string
  label: string
}

export function NavItem({ label, url }: NavItemProps) {
  return (
    <Link prefetch={false} href={url}>
      {label}
    </Link>
  )
}
