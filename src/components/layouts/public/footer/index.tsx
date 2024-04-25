import { Heart } from 'lucide-react'

import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'

import { BrandLogo } from './brand-logo'
import { FooterContactInfos } from './contact-infos'
import { PublicFooterCopyright } from './copyright'
import { FooterLinkGroups } from './link-groups'

export function PublicFooter() {
  return (
    <footer className="bg-gray-50">
      <div className="border-t py-8">
        <MaxWidthWrapper className="grid grid-cols-3 gap-4">
          {/* Identity and Contact Infos */}
          <div className="col-span-2 space-y-8">
            {/* Identity */}
            <div className="flex flex-col gap-2">
              <BrandLogo />

              <div className="flex items-center gap-1 text-muted-foreground">
                <span className="text-sm font-medium">
                  Care & Comfort for your partner.
                </span>

                <Heart className="h-3 w-3 fill-muted-foreground" />
              </div>
            </div>

            <FooterContactInfos />
          </div>

          {/* Link Groups */}
          <div className="flex justify-end gap-8">
            <FooterLinkGroups />
            <FooterLinkGroups />
          </div>
        </MaxWidthWrapper>
      </div>

      <PublicFooterCopyright />
    </footer>
  )
}
