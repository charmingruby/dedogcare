import { LucideIcon, Mail, MapPin, Phone } from 'lucide-react'

import { Card, CardContent, CardDescription } from '@/components/shared/ui/card'

interface ContactInfoProps {
  icon: LucideIcon
  title: string
  info: string
}

const contactInfosMock: ContactInfoProps[] = [
  {
    icon: Phone,
    info: '+55 32 9 9110-0990',
    title: 'Call us at',
  },
  {
    icon: MapPin,
    info: 'Avenida Barão do Rio Branco, nº 1871, Sala 613, Centro, Juiz de Fora - MG',
    title: 'Find us at',
  },
  {
    icon: Mail,
    info: 'dodogcare@gmail.com',
    title: 'Email us at',
  },
]

export function LandingPageContactInfos() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {contactInfosMock.map(({ icon: Icon, info, title }) => (
        <Card key={info} className="p-6">
          <CardContent className="flex flex-col items-center gap-4 p-0 text-center">
            <Icon className="text-primary" />

            <div className="space-y-1">
              <strong>{title}</strong>
              <CardDescription className="text-gray-700">
                {info}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
