import { Crown, Heart, Mail, MapPin, PawPrint } from 'lucide-react'
import Image from 'next/image'

import ctaDog from '@/assets/landing-page/cta/dog-sleeping.jpg'
import heroDog from '@/assets/landing-page/hero/cartoon-dog.png'
import coverLocationDog from '@/assets/landing-page/location/example-cover.jpg'
import { LandingPageContactInfos } from '@/components/modules/landing-page/contact/infos'
import { LandingPageDepositions } from '@/components/modules/landing-page/depositions'
import { LandingPageGuideMobileSchedulingIllustration } from '@/components/modules/landing-page/guide/mobile-scheduling-illustration'
import { LandingPageGuideSteps } from '@/components/modules/landing-page/guide/steps'
import { LandingPageLocationMosaic } from '@/components/modules/landing-page/location/mosaic'
import { LandingPageMVV } from '@/components/modules/landing-page/mvv'
import { LandingPageServicesTabs } from '@/components/modules/landing-page/services/tabs'
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
                <Heart className="absolute -right-2 top-2 h-4 w-4 fill-primary text-primary" />
              </span>{' '}
              of your{' '}
              <span className="underline decoration-primary decoration-dashed">
                partner
              </span>
            </h1>

            <p className="mt-12 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              impedit ipsa nostrum repellat pariatur laborum molestiae
              recusandae dolorum libero, illum ex saepe vero perferendis, esse
              cumque? Ratione, harum. Accusamus, debitis.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Button size="lg" variant="defaultSecondary" className="gap-1">
                Schedule
                <PawPrint className="h-4 w-4" />
              </Button>
              <Button size="lg">Contact</Button>
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
              Dog
              <Crown className="absolute -top-3 left-0 h-4 w-4 fill-yellow-500 text-yellow-500" />
            </span>{' '}
            a king day
          </ContentHeading>
        </div>

        {/* Content */}
        <LandingPageUSPList />
      </MaxWidthWrapper>

      {/* Services */}
      <MaxWidthWrapper className="flex flex-col gap-8 py-16">
        {/* Introduction */}
        <div>
          <ContentHeading>Our Services</ContentHeading>
        </div>

        {/* Steps */}
        <div className="w-full">
          <LandingPageServicesTabs />
        </div>
      </MaxWidthWrapper>

      {/* Guide */}
      <div className="border-y bg-primary py-16">
        <MaxWidthWrapper className="grid grid-cols-3 gap-8">
          <div className="flex items-center gap-8">
            <LandingPageGuideMobileSchedulingIllustration />
          </div>

          <div className="col-span-2">
            <LandingPageGuideSteps />
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Location */}
      <MaxWidthWrapper className="py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Image */}
          <div className="w-full rounded-md border p-2">
            <Image
              src={coverLocationDog}
              alt="Dog headers"
              className=" rounded-md"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-7 w-7 text-primary" />
                <ContentHeading>Our space</ContentHeading>
              </div>

              <ContentParagraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                alias doloribus quibusdam. Libero non fugit dolorum voluptates
                temporibus quidem porro deleniti, odit corrupti, iste sunt
                inventore. Sint accusantium accusamus laborum?
              </ContentParagraph>
            </div>

            <div>
              <LandingPageLocationMosaic />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Depositions */}
      <MaxWidthWrapper className="space-y-8 py-16">
        <div className="text-center">
          <ContentHeading>Loved by dog owners</ContentHeading>
        </div>

        <div className="rounded-md border">
          <LandingPageDepositions />
        </div>
      </MaxWidthWrapper>

      {/* Contact */}
      <MaxWidthWrapper className="relative space-y-8 border-t py-16">
        {/* Content */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Mail className="h-7 w-7 text-primary" />
            <ContentHeading>Let{"'"}s chat</ContentHeading>
          </div>

          <ContentParagraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            reprehenderit ad tempora minus neque quibusdam vero delectus odit
            doloremque ullam! Est neque doloremque ad beatae officia autem
            molestiae. Aliquam, magni.
          </ContentParagraph>
        </div>

        <div>
          <LandingPageContactInfos />
        </div>
      </MaxWidthWrapper>

      {/* CTA */}
      <div className="relative border-t bg-gray-50">
        {/* Cover img */}
        <Image
          src={ctaDog}
          alt="Dogs running"
          className="absolute h-full w-full object-cover object-bottom"
        />

        {/* Content */}
        <MaxWidthWrapper className="relative z-10 pb-72 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-1">
              <ContentHeading>Let us help your dog</ContentHeading>
              <Heart className="h-5 w-5 fill-primary text-primary" />
            </div>

            <ContentParagraph className="mt-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
              hic cum accusantium, ab ratione explicabo eveniet dolorum
              accusamus saepe officia, maxime aspernatur sapiente error.
            </ContentParagraph>

            <div className="mt-4 flex items-center justify-center gap-4">
              <Button size="lg" variant="defaultSecondary">
                Contact
              </Button>
              <Button size="lg" className="flex items-center gap-1 text-base">
                Schedule <PawPrint className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
