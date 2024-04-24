import { PropsWithChildren } from 'react'

import { PublicFooter } from '@/components/layouts/public/footer'
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
      <PublicFooter />
    </div>
  )
}
