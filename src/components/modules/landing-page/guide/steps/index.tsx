import { Check, PawPrint } from 'lucide-react'

import { Button } from '@/components/shared/ui/button'
import { ContentHeading } from '@/components/shared/ui/content-heading'

export function LandingPageGuideSteps() {
  return (
    <div className="space-y-8">
      <div>
        <ContentHeading className="text-background">
          How the scheduling process works?
        </ContentHeading>
      </div>

      <div>
        <div className="relative z-10 pb-4">
          <div className="absolute -left-0.5 rounded-full bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="font-secondary text-primary-foreground">1</span>
            </div>
          </div>
          <div className="pl-12 pt-2">
            <div className="leading-relaxed text-primary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              perspiciatis nesciunt saepe odit esse omnis hic, beatae impedit
              vel itaque dolore numquam ad ea rem natus eius quis, dignissimos
              assumenda.
            </div>
          </div>

          <div className="absolute left-4 top-0 -z-10 h-full w-px border-[2px] border-l border-background" />
        </div>

        <div className="relative z-10 pb-4">
          <div className="absolute -left-0.5 rounded-full bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="font-secondary text-primary-foreground">2</span>
            </div>
          </div>
          <div className="pl-12 pt-2">
            <div className="leading-relaxed text-primary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              perspiciatis nesciunt saepe odit esse omnis hic, beatae impedit
              vel itaque dolore numquam ad ea rem natus eius quis, dignissimos
              assumenda.
            </div>
          </div>

          <div className="absolute left-4 top-0 -z-10 h-full w-px border-[2px] border-l border-background" />
        </div>

        <div className="relative z-10 pb-8">
          <div className="absolute -left-0.5 rounded-full bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="font-secondary text-primary-foreground">3</span>
            </div>
          </div>
          <div className="pl-12 pt-2">
            <div className="leading-relaxed text-primary-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              perspiciatis nesciunt saepe odit esse omnis hic, beatae impedit
              vel itaque dolore numquam ad ea rem natus eius quis, dignissimos
              assumenda.
            </div>
          </div>

          <div className="absolute left-4 top-0 -z-10 h-full w-px border-[2px] border-l border-background" />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative -left-0.5 w-fit rounded-full bg-background p-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Check className="h-5 w-5 font-secondary text-primary-foreground" />
            </div>
          </div>

          <Button
            variant="secondary"
            size="lg"
            className="flex items-center gap-1"
          >
            <span>Schedule</span>
            <PawPrint className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
