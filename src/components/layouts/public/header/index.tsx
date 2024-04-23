import { LangSwitcher } from '@/components/shared/lang-switcher'
import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'
import { LanguageProps } from '@/libs/i18n'

import { ActionButton } from './action-button'
import { BrandLogo } from './brand-logo'
import { Navigation } from './navigation'

export function PublicHeader({ lang }: LanguageProps) {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full border-b bg-background shadow-sm">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <BrandLogo />
          <Navigation lang={lang} />
        </div>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <ActionButton lang={lang} />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
