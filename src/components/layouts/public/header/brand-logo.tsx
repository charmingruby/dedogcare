import { Logo } from '@/components/shared/logo'

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <Logo className="h-8 w-8" />

      <div className="font-secondary text-2xl">
        <span className="font-thin">DoDog</span>
        <strong className="font-semibold text-primary">Care</strong>
      </div>
    </div>
  )
}
