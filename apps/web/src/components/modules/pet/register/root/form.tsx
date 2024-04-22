'use client'

import { SelectItem, SelectValue } from '@radix-ui/react-select'
import { Heart } from 'lucide-react'
import Link from 'next/link'

import { FemaleIcon, MaleIcon } from '@/components/shared/gender-icons'
import { Button } from '@/components/shared/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/shared/ui/card'
import { Label } from '@/components/shared/ui/label'
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

            {/* Size & Breed */}
            <div className="grid grid-cols-2 gap-4">
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

              {/* Breed */}
              <div>
                <Label>Breed</Label>
              </div>
            </div>

            {/* Weight */}
            <div>
              <Label>Weight</Label>
            </div>

            {/* Birthdate */}
            <div>
              <Label>Birthdate</Label>
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
