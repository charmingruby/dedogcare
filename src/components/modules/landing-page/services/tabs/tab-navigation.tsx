import { MoonStar, PawPrint, School, Sun } from 'lucide-react'

import { TabsList } from '@/components/shared/ui/tabs'

import { ServiceTabTrigger } from './tab-trigger'

interface ServicesTabNavigationProps {
  currentTab: string
}

export function ServicesTabNavigation({
  currentTab,
}: ServicesTabNavigationProps) {
  return (
    <TabsList className="grid h-fit w-full grid-cols-4 gap-2 border">
      <ServiceTabTrigger
        value="stay"
        icon={Sun}
        label="Stay"
        currentTab={currentTab}
      />
      <ServiceTabTrigger
        value="nursery"
        icon={School}
        label="Nursery"
        currentTab={currentTab}
      />
      <ServiceTabTrigger
        value="overnight"
        icon={MoonStar}
        label="Overnight"
        currentTab={currentTab}
      />
      <ServiceTabTrigger
        value="dog-walk"
        icon={PawPrint}
        label="Dog Walk"
        currentTab={currentTab}
      />
    </TabsList>
  )
}
