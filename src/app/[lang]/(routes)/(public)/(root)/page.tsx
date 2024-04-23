import Image from 'next/image'

import banner from '@/assets/hero-banner.png'

export default function Home() {
  return (
    <div className="relative h-screen">
      <Image
        src={banner}
        alt="Happy dog working with us"
        className="absolute h-full w-full object-cover"
      />

      {/* Filter */}
      <div className="absolute z-0 h-full w-full bg-black/50 object-fill" />
    </div>
  )
}
