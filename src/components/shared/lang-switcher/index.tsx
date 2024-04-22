import { PropsWithChildren } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/ui/select'

function LangLabel({ children }: PropsWithChildren) {
  return <span className="text-xs font-medium">{children}</span>
}

export function LangSwitcher() {
  return (
    <Select>
      <SelectTrigger className="h-11">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="small">
            <LangLabel>🇩🇪 DE</LangLabel>
          </SelectItem>
          <SelectItem value="medium">
            <LangLabel>🇧🇷 PT-BR</LangLabel>
          </SelectItem>
          <SelectItem value="big">
            <LangLabel>🇺🇸 EN-US</LangLabel>
          </SelectItem>
          <SelectItem value="big">
            <LangLabel>🇲🇫 FR</LangLabel>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
