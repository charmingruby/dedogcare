import { PropsWithChildren } from 'react'

import { PublicHeader } from '@/components/layouts/public/header'
import { LanguageRootProps } from '@/libs/i18n'

type PublicLayoutProps = PropsWithChildren & LanguageRootProps

export default function PublicLayout({
  children,
  params: { lang },
}: PublicLayoutProps) {
  return (
    <div>
      <PublicHeader lang={lang} />

      <div>{children}</div>
    </div>
  )
}
