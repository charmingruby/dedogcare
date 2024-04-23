import { Dog } from 'lucide-react'

export function BrandLogo() {
  return (
    <div className="flex items-center font-secondary text-2xl">
      <span className="flex items-center font-thin">
        DoD
        <Dog className="h-5 w-5 text-primary" />g
      </span>
      <span className=" font-thin text-primary">Care</span>
    </div>
  )
}
