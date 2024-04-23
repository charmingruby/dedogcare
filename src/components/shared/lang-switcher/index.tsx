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
  const routeParams = pathname.split('/')
  const urlLang = routeParams[1]

  function newUrlOnLangChange(newLang: string) {
    const rawUrlParams = routeParams.slice(2)

    const baseUrl = `/${newLang}`

    const initialUrl = ''
    const urlParams = rawUrlParams.reduce(
      (acc, currentValue) => '/' + currentValue,
      initialUrl,
    )

    const newUrl = baseUrl + urlParams

    return newUrl
  }

  const [currentLang, setCurrentLang] = useState<string>(urlLang)
  const transition = useTransition()
  const startTransition = transition[1]

  const router = useRouter()

  const onLangChange = (lang: string) => {
    setCurrentLang(lang)
    const url = newUrlOnLangChange(lang)

    startTransition(() => {
      router.replace(url)
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
