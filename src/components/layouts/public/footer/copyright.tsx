import { MaxWidthWrapper } from '@/components/shared/max-width-wrapper'

export function PublicFooterCopyright() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="border-t py-6">
      <MaxWidthWrapper>
        <span className="text-sm text-muted-foreground">
          © {currentYear}. All rights reserved - Built by{' '}
          <a
            href="https://www.apperize.com.br/"
            target="_blank"
            className="font-medium text-[#7C3AED] transition-all hover:underline"
          >
            Apperize
          </a>
        </span>
      </MaxWidthWrapper>
    </div>
  )
}
