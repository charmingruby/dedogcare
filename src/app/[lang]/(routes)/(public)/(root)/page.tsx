import { Crown, Heart } from 'lucide-react'
import Image from 'next/image'

import heroDog from '@/assets/dog-cartoons/home-hero.png'
import { LandingPageMVV } from '@/components/modules/landing-page/mvv'
import { LandingPageUSPList } from '@/components/modules/landing-page/usp/list'
import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import { Button } from '@/components/shared/ui/button'
import { ContentHeading } from '@/components/shared/ui/content-heading'
import { ContentParagraph } from '@/components/shared/ui/content-paragraph'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="justify-cente relative flex h-screen items-center bg-gray-50 pt-20">
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

      {/* MVV */}
      <div className="relative">
        {/* Half background */}
        <div className="absolute h-1/2 w-full border-b bg-gray-50"></div>

        <MaxWidthWrapper className="relative z-10 py-16">
          <LandingPageMVV />
        </MaxWidthWrapper>
      </div>

      {/* USP */}
      <MaxWidthWrapper className="space-y-8 py-16">
        {/* Heading */}
        <div className="text-center">
          <ContentHeading>
            Give your{' '}
            <span className="relative inline-flex">
              dog
              <Crown className="absolute -top-3 left-0 h-4 w-4 fill-yellow-500 text-yellow-500" />
            </span>{' '}
            a king day
          </ContentHeading>
        </div>

        {/* Content */}
        <LandingPageUSPList />
      </MaxWidthWrapper>

      {/* Services */}
      <MaxWidthWrapper className="py-16">
        {/* Heading */}
        <ContentHeading>All the comfort your dog deserves</ContentHeading>
        <ContentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          nostrum sunt omnis consequatur quod molestias soluta necessitatibus
          reiciendis laboriosam facere, fugit possimus similique delectus saepe?
          Beatae, libero. Maiores, aliquid tempore.
        </ContentParagraph>
        <ContentParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          nostrum sunt omnis consequatur quod molestias soluta necessitatibus
          reiciendis laboriosam facere, fugit possimus similique delectus saepe?
          Beatae, libero. Maiores, aliquid tempore.
        </ContentParagraph>
      </MaxWidthWrapper>

      {/* How it works */}
      <div className="bg-primary">how it works</div>

      {/* Customers */}
      <div>customer</div>
      {/* Contact */}
      <div>contact</div>

      {/* CTA */}
      <div>cta</div>
    </>
  )
}
