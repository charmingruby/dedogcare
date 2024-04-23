import { LanguageProps } from '@/libs/i18n'
import { getDictionaryServerOnly } from '@/libs/i18n/dictionary-server-only'

import { NavItem } from './nav-item'

export function Navigation({ lang }: LanguageProps) {
  const { publicNavItems } = getDictionaryServerOnly(lang)

  return (
    <nav className="flex items-center gap-5">
      {publicNavItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </nav>
  )
}
