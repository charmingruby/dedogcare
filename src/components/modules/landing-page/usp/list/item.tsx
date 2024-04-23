import Image, { StaticImageData } from 'next/image'

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/shared/ui/card'

export interface USPListItem {
  url: StaticImageData
  alt: string
  title: string
  description: string
}

export function USPListItem({ alt, description, title, url }: USPListItem) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center text-center">
        <Image src={url} alt={alt} className="mb-4 h-12 w-12" />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
