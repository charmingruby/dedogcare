import { School } from 'lucide-react'

import { TabsList } from '@/components/shared/ui/tabs'

import { ServiceTabTrigger } from './tab-trigger'

interface ServicesTabNavigationProps {
  currentTab: string
}

export function ServicesTabNavigation({
  currentTab,
}: ServicesTabNavigationProps) {
  return (
    <TabsList className="grid h-fit w-full grid-cols-4 gap-2">
      <ServiceTabTrigger
        value="nursery"
        icon={School}
        label="Nursery"
        currentTab={currentTab}
      />
      <ServiceTabTrigger
        value="overnight"
        icon={School}
        label="Overnight"
        currentTab={currentTab}
      />
      <ServiceTabTrigger
        value="stay"
        icon={School}
        label="Stay"
        currentTab={currentTab}
      />
      <ServiceTabTrigger
        value="dog-walk"
        icon={School}
        label="Dog Walk"
        currentTab={currentTab}
      />
    </TabsList>
  )
}
