import { Dog, Plus } from 'lucide-react'

export function AddDogImageFrame() {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border bg-[#ECF0F3] shadow-md">
      <Dog className="h-9 w-9 text-[#858d94]" strokeWidth={1.5} />

      <div className="absolute bottom-0 left-10 rounded-full bg-primary p-0.5 text-background shadow-md">
        <Plus strokeWidth={2.5} className="h-4 w-4" />
      </div>
    </div>
  )
}
