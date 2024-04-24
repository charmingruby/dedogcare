import { LucideIcon } from 'lucide-react'

import { TabsTrigger } from '@/components/shared/ui/tabs'
import { cn } from '@/libs/tw-merge'

interface ServiceTabTriggerProps {
  label: string
  icon: LucideIcon
  currentTab: string
  value: string
}

export function ServiceTabTrigger({
  icon: Icon,
  label,
  currentTab,
  value,
}: ServiceTabTriggerProps) {
  const isTheCurrentTab = currentTab === value

  return (
    <TabsTrigger
      value={value}
      className="flex flex-row gap-2 bg-muted data-[state=active]:border data-[state=active]:bg-primary"
    >
      <Icon
        className={cn(
          'h-5 w-5',
          `${isTheCurrentTab && 'text-primary-foreground'}`,
        )}
        strokeWidth={1.5}
      />
      <span
        className={cn(
          'font-secondary text-lg font-light ',
          `${isTheCurrentTab && 'text-primary-foreground'}`,
        )}
      >
        {label}
      </span>
    </TabsTrigger>
  )
}
