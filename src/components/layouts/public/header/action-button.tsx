import { PawPrint } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/shared/ui/button'
import { LanguageProps } from '@/libs/i18n'
import { getDictionaryServerOnly } from '@/libs/i18n/dictionary-server-only'

export function ActionButton({ lang }: LanguageProps) {
  const { publicScheduleButton } = getDictionaryServerOnly(lang)

  return (
    <Button size="lg" className="px-4">
      <Link
        href="/pet/register"
        prefetch={false}
        className="flex items-center gap-1 text-base"
      >
        {publicScheduleButton}
        <PawPrint className="h-4 w-4" />
      </Link>
    </Button>
  )
}
