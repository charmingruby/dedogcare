'use client'

import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren, useState, useTransition } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/ui/select'
import { langSwitcherLabels } from '@/constants/lang-switcher-labels'

function LangLabel({ children }: PropsWithChildren) {
  return <span className="text-xs font-medium">{children}</span>
}

export function LangSwitcher() {
  const pathname = usePathname()
  const urlLang = pathname.substring(1)

  const [currentLang, setCurrentLang] = useState<string>(urlLang)
  const transition = useTransition()
  const startTransition = transition[1]

  const router = useRouter()

  const onLangChange = (lang: string) => {
    console.log(lang)
    setCurrentLang(lang)
    startTransition(() => {
      router.replace(`/${lang}`)
      router.refresh()
    })
  }

  return (
    <Select onValueChange={onLangChange} value={currentLang}>
      <SelectTrigger className="h-11">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {langSwitcherLabels.map(({ abbreviation, symbol, label }) => (
            <SelectItem key={abbreviation} value={abbreviation}>
              <LangLabel>
                {symbol} {label}
              </LangLabel>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
