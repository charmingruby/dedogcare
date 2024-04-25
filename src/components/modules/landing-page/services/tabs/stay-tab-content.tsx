import { Check, Heart, Sun } from 'lucide-react'
import Image from 'next/image'

import stayTabImage from '@/assets/services/stay.jpg'
import { Button } from '@/components/shared/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card'
import { ContentParagraph } from '@/components/shared/ui/content-paragraph'
import { Separator } from '@/components/shared/ui/separator'
import { TabsContent } from '@/components/shared/ui/tabs'

export function StayTabContent() {
  return (
    <TabsContent value="stay">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sun className="text-primary" />
            <Separator orientation="vertical" className="h-6 w-px" />
            <span className="font-secondary font-light">Stay</span>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <ContentParagraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam, in animi? Molestias similique hic ad corporis
                    aut autem fuga veniam architecto reiciendis minus ex, eaque
                    delectus ratione minima asperiores molestiae?
                  </ContentParagraph>

                  <ContentParagraph>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam, in animi? Molestias similique hic ad corporis
                    aut autem fuga veniam architecto reiciendis minus ex, eaque
                    delectus ratione minima asperiores molestiae?
                  </ContentParagraph>
                </div>

                {/* Guarantees */}
                <div className="space-y-4">
                  {/* Heading */}
                  <div>
                    <span className="font-secondary text-xl font-thin">
                      Guarantees
                    </span>
                  </div>

                  {/* List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-primary/20 p-0.5">
                        <Check
                          strokeWidth={2}
                          className="h-4 w-4 text-primary"
                        />
                      </div>
                      <span className="text-sm">Care with dogs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-primary/20 p-0.5">
                        <Check
                          strokeWidth={2}
                          className="h-4 w-4 text-primary"
                        />
                      </div>
                      <span className="text-sm">Care with dogs</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full bg-primary/20 p-0.5">
                        <Check
                          strokeWidth={2}
                          className="h-4 w-4 text-primary"
                        />
                      </div>
                      <span className="text-sm">Care with dogs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <div className="w-full rounded-lg border p-2">
                  <Image
                    src={stayTabImage}
                    alt="Dog stay image"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              {/* Heading */}
              <div>
                <span className="font-secondary text-xl font-thin">
                  Pricing
                </span>
              </div>

              {/* List */}
              <div className="grid grid-cols-2 gap-8">
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="font-secondary text-3xl font-light">
                      Standard
                    </CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </CardHeader>

                  <Separator />

                  <CardContent className="pt-6">
                    {/* Price */}
                    <div>
                      <span className="text-2xl font-semibold">
                        49,99 <span className="text-lg">BRL</span>{' '}
                        <span className="font-normal text-muted-foreground">
                          /
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                          hour
                        </span>
                      </span>
                    </div>
                    {/* Benefits */}
                    <div className="mt-6 space-y-1.5">
                      <div className="flex items-center gap-1">
                        <div className="rounded-full bg-primary/20 p-0.5">
                          <Check
                            strokeWidth={2}
                            className="h-4 w-4 text-primary"
                          />
                        </div>
                        <span className="text-sm">Care with dogs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full bg-primary/20 p-0.5">
                          <Check
                            strokeWidth={2}
                            className="h-4 w-4 text-primary"
                          />
                        </div>
                        <span className="text-sm">Care with dogs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full bg-primary/20 p-0.5">
                          <Check
                            strokeWidth={2}
                            className="h-4 w-4 text-primary"
                          />
                        </div>
                        <span className="text-sm">Care with dogs</span>
                      </div>
                    </div>
                    {/* Redirect */}
                    <div className="mt-6">
                      <Button size="lg" className="w-full">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Featured */}
                <Card className="relative flex flex-col items-center border-primary shadow-sm">
                  <div className="absolute -top-3 flex h-6 items-center justify-center gap-1 rounded-full bg-primary px-2">
                    <span className="font-secondary text-sm text-primary-foreground">
                      Customers Favorite
                    </span>
                    <Heart className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
                  </div>

                  <CardHeader className="w-full">
                    <CardTitle className="font-secondary text-3xl font-light">
                      Premium
                    </CardTitle>
                    <CardDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </CardDescription>
                  </CardHeader>

                  <Separator />

                  <CardContent className="w-full pt-6">
                    {/* Price */}
                    <div>
                      <span className="text-2xl font-semibold">
                        109,99 <span className="text-lg">BRL</span>{' '}
                        <span className="font-normal text-muted-foreground">
                          /
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                          hour
                        </span>
                      </span>
                    </div>
                    {/* Benefits */}
                    <div className="mt-6 space-y-1.5">
                      <div className="flex items-center gap-1">
                        <div className="rounded-full bg-primary/20 p-0.5">
                          <Check
                            strokeWidth={2}
                            className="h-4 w-4 text-primary"
                          />
                        </div>
                        <span className="text-sm">Care with dogs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full bg-primary/20 p-0.5">
                          <Check
                            strokeWidth={2}
                            className="h-4 w-4 text-primary"
                          />
                        </div>
                        <span className="text-sm">Care with dogs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="rounded-full bg-primary/20 p-0.5">
                          <Check
                            strokeWidth={2}
                            className="h-4 w-4 text-primary"
                          />
                        </div>
                        <span className="text-sm">Care with dogs</span>
                      </div>
                    </div>
                    {/* Redirect */}
                    <div className="mt-6">
                      <Button size="lg" className="w-full">
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}
