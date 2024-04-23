import { Crown, Heart } from 'lucide-react'
import Image from 'next/image'

import heroDog from '@/assets/dog-cartoons/home-hero.png'
// import banner from '@/assets/hero-banner.png'
import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import { Button } from '@/components/shared/ui/button'
import { ContentHeading } from '@/components/shared/ui/content-heading'

export default function Home() {
  return (
    <>
      {/* Hero w/Actions */}
      <div className="relative h-screen">
        {/* <Image
          src={banner}
          alt="Happy dog working with us"
          className="absolute h-full w-full object-cover"
        /> */}

        {/* Filter */}
        {/* <div className="absolute z-0 h-full w-full bg-black/50 object-fill" /> */}

        {/* Content */}
        <div className="relative z-10 flex h-screen items-center justify-center border-b bg-gray-50 pt-20">
          <MaxWidthWrapper className="grid grid-cols-2">
            <div>
              <h1 className=" m-0 font-secondary text-6xl">
                Let us take{' '}
                <span className="relative inline-flex">
                  care{' '}
                  <Heart className="absolute -right-2 top-2 h-4 w-4 fill-red-500 text-red-500" />
                </span>{' '}
                of your{' '}
                <span className="underline decoration-primary decoration-dashed">
                  partner
                </span>
              </h1>

              <p className="mt-12 text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                impedit ipsa nostrum repellat pariatur laborum molestiae
                recusandae dolorum libero, illum ex saepe vero perferendis, esse
                cumque? Ratione, harum. Accusamus, debitis.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Button size="lg" variant="defaultSecondary">
                  Nao sei
                </Button>
                <Button size="lg">Nao sei</Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image src={heroDog} alt="Happy dog" className="h-72 w-72" />
            </div>
          </MaxWidthWrapper>
        </div>
      </div>

      {/* USP */}
      <div>
        <MaxWidthWrapper className="py-16">
          {/* Heading */}
          <div>
            <ContentHeading>
              Give your{' '}
              <span className="relative inline-flex">
                Dog
                <Crown className="absolute -top-3.5 left-0 h-5 w-5 fill-yellow-500 text-yellow-500" />
              </span>{' '}
              a princess day
            </ContentHeading>
          </div>

          {/* Content */}
          <div></div>
        </MaxWidthWrapper>
      </div>

      {/* Services */}

      {/* How it works */}

      {/* Location */}
    </>
  )
}
