import Image from 'next/image'

import exampleDogPreview from '@/assets/landing-page/location/example-preview.jpg'

export function LandingPageLocationMosaic() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="w-full rounded-md border p-2">
        <Image
          src={exampleDogPreview}
          alt="Dog headers"
          className="aspect-square rounded-md"
        />
      </div>
      <div className="w-full rounded-md border p-2">
        <Image
          src={exampleDogPreview}
          alt="Dog headers"
          className="aspect-square rounded-md"
        />
      </div>
      <div className="w-full rounded-md border p-2">
        <Image
          src={exampleDogPreview}
          alt="Dog headers"
          className="aspect-square rounded-md"
        />
      </div>
    </div>
  )
}
