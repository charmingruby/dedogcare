import { Dog } from 'lucide-react'

import { cn } from '@/libs/tw-merge'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return <Dog className={cn('h-8 w-8 text-primary', className)} />
}
