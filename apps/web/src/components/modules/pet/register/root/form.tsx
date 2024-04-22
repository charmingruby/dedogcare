'use client'

import { SelectItem, SelectValue } from '@radix-ui/react-select'
import { CalendarIcon, Heart } from 'lucide-react'
import Link from 'next/link'

import { FemaleIcon, MaleIcon } from '@/components/shared/gender-icons'
import { Button } from '@/components/shared/ui/button'
import { Calendar } from '@/components/shared/ui/calendar'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/shared/ui/card'
import { Checkbox } from '@/components/shared/ui/checkbox'
import { Input } from '@/components/shared/ui/input'
import { Label } from '@/components/shared/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shared/ui/popover'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
} from '@/components/shared/ui/select'
import { Separator } from '@/components/shared/ui/separator'
import { LanguageProps } from '@/i18n'
import { getDictionaryServerOnly } from '@/i18n/dictionary-server-only'
import { cn } from '@/libs/tw-merge'

export function PetRegisterRootForm({ lang }: LanguageProps) {
  const dict = getDictionaryServerOnly(lang)

  return (
    <Card className="mt-8">
      <CardHeader className="p-0 pt-6" />

      <form>
        <CardContent>
          <div className="space-y-6">
            {/* Gender */}
            <div className="flex w-full flex-col gap-2">
              <Label>Gender</Label>

              <div className="flex w-full items-center gap-4">
                <Button variant="optionNotSelected" className="w-full gap-1">
                  <MaleIcon />
                  <span>Male</span>
                </Button>

                <Button variant="optionSelected" className="w-full gap-1">
                  <FemaleIcon />
                  <span>Female</span>
                </Button>
              </div>
            </div>

            <Separator orientation="vertical" className="h-px w-full" />

            {/* Breed & Birthdate */}
            <div className="grid grid-cols-2 gap-4">
              {/* Breed */}
              <div className="space-y-2">
                <Label>Breed</Label>
                <Input placeholder="Insert the name" />
              </div>

              {/* Birthdate */}
              <div className=" w-full space-y-2">
                <Label>Date of birth</Label>
                <div className="w-full">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={'outline'}
                        className={cn('w-full pl-3 text-left font-normal')}
                      >
                        <span className="text-muted-foreground">
                          Pick a date
                        </span>

                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        disabled={(date) =>
                          date > new Date() || date < new Date('1900-01-01')
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Weight & Size */}
            <div className="grid grid-cols-2 gap-4">
              {/* Weight */}
              <div className="space-y-2">
                <Label>Weight</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a weight" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sizes</SelectLabel>
                      <SelectItem value="small"> Up to 5kg</SelectItem>
                      <SelectItem value="medium"> 5 to 10kg</SelectItem>
                      <SelectItem value="big">10 to 20kg</SelectItem>
                      <SelectItem value="big"> 20 to 40kg</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Size */}
              <div className="space-y-2">
                <Label>Size</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sizes</SelectLabel>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="big">Big</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Castration */}
            <div className="flex items-center gap-2">
              <Checkbox />
              <span className="text-sm">Is the pet castrated?</span>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <div className="mt-8 flex w-full items-center gap-4">
            <Button variant="defaultSecondary" className="w-full" size="lg">
              Cancel
            </Button>

            <Button className="w-full gap-1" size="lg" asChild>
              <Link prefetch={false} href="/pet/register/pet-image">
                {dict.petRegisterStep1.saveButton}
                <Heart className="h-3 w-3 fill-background" />
              </Link>
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
