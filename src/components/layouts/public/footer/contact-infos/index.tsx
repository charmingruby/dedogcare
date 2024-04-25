import {
  ArrowUpRight,
  Clock,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

interface FooterContactInfoProps {
  icon: LucideIcon
  content: string
  url?: string
}

const footerContactInfos: FooterContactInfoProps[] = [
  {
    icon: MapPin,
    content:
      'Avenida Barão do Rio Branco, nº 1871, Sala 613, Centro, Juiz de Fora - MG',
    url: 'test',
  },
  {
    icon: Mail,
    content: 'dodogcare@gmail.com',
  },
  {
    icon: Phone,
    content: '+55 32 9 9110-0990',
  },
  {
    icon: Clock,
    content: '09:00 - 22:00',
  },
]

export function FooterContactInfos() {
  return (
    <div className="space-y-2">
      {footerContactInfos.map(({ content, icon: Icon, url }) => {
        if (!url) {
          return (
            <div
              key={content}
              className="flex items-center gap-2 text-gray-700"
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{content}</span>
            </div>
          )
        }

        return (
          <a
            href={url}
            target="_blank"
            key={content}
            className="group flex items-center gap-2 text-gray-700 transition-all hover:text-primary hover:underline"
          >
            <Icon className="h-4 w-4" />

            <div className="flex items-center gap-1">
              <span className="text-sm">{content}</span>
              <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-primary" />
            </div>
          </a>
        )
      })}
    </div>
  )
}
