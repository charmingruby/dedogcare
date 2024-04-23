'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/libs/tw-merge'

interface NavItemProps {
  url: string
  label: string
}

export function NavItem({ label, url }: NavItemProps) {
  const fakePathname = usePathname()

  const splittedPathname = fakePathname.split('/')

  const pathname =
    splittedPathname.length !== 3 ? '/' : `/${splittedPathname[3]}`

  const isTheCurrentUrl = pathname === url

  return (
    <div
      className={cn(
        'flex h-[79px] items-center justify-center border-b-2 text-base',
        `${isTheCurrentUrl ? 'border-primary font-medium' : 'border-background text-muted-foreground transition-colors hover:text-primary'}`,
      )}
    >
      <Link prefetch={false} href={url}>
        <span>{label}</span>
      </Link>
    </div>
  )
}
