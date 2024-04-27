'use client'

import Autoplay from 'embla-carousel-autoplay'
import { PawPrint, Quote } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

import exampleDog from '@/assets/landing-page/depositions/example-dog.jpg'
import exampleOwner from '@/assets/landing-page/depositions/example-owner.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shared/ui/carousel'
import { ContentParagraph } from '@/components/shared/ui/content-paragraph'

interface DepositionProps {
  dogImageUrl: StaticImageData
  dogOwnerImageUrl: StaticImageData
  dogName: string
  ownerName: string
  text: string
}

const depositionsMocks: DepositionProps[] = [
  {
    dogImageUrl: exampleDog,
    dogName: 'Alvin',
    dogOwnerImageUrl: exampleOwner,
    ownerName: 'Gustavo Dias',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur molestiae, corrupti quisquam sint aliquam autem provident, esse dolorum delectus sequi cupiditate doloribus accusamus eum fugit neque. Fugiat, debitis eum.',
  },
  {
    dogImageUrl: exampleDog,
    dogName: 'Alvin',
    dogOwnerImageUrl: exampleOwner,
    ownerName: 'Felipe Bignoto',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequatur molestiae, corrupti quisquam sint aliquam autem provident, esse dolorum delectus sequi cupiditate doloribus accusamus eum fugit neque. Fugiat, debitis eum.',
  },
]

export function LandingPageDepositions() {
  return (
    <Carousel
      className="relative w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {depositionsMocks.map(
          ({ dogImageUrl, dogName, dogOwnerImageUrl, text, ownerName }) => (
            <CarouselItem key={ownerName}>
              <div className="grid grid-cols-3 gap-8">
                {/* Dog Info */}
                <div className="relative rounded-l-md">
                  <Image
                    src={dogImageUrl}
                    alt={`${ownerName}'s dog`}
                    className="absolute h-full w-full rounded-l-md object-cover"
                  />
                </div>

                {/* Deposition */}
                <div className="col-span-2 py-4 pr-4">
                  {/* Text */}
                  <div>
                    <div className="opacity-30">
                      <Quote
                        strokeWidth={1.5}
                        className="h-8 w-8 fill-primary text-primary"
                      />
                    </div>

                    <ContentParagraph className="italic">
                      {text}
                    </ContentParagraph>
                  </div>

                  {/* Owner */}
                  <div className="mt-8 flex items-center gap-2">
                    {/* Image */}
                    <div className="rounded-full border border-primary p-0.5">
                      <Image
                        src={dogOwnerImageUrl}
                        alt={`${ownerName} image`}
                        className="h-12 w-12 rounded-full"
                      />
                    </div>

                    <div className="flex w-full items-end justify-between">
                      {/* Informations */}
                      <div className="">
                        <strong className="text-base">{ownerName}</strong>

                        <div className="flex items-center gap-1">
                          <PawPrint className="h-4 w-4 fill-primary text-primary" />
                          <span className="text-sm font-medium">{dogName}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="relative w-20">
                        <CarouselPrevious className="relative left-0 top-0 -translate-y-0" />
                        <CarouselNext className="right-0 top-0 -translate-y-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ),
        )}
      </CarouselContent>
    </Carousel>
  )
}
