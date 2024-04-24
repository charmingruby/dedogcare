'use client'

import { useState } from 'react'

import { Tabs } from '@/components/shared/ui/tabs'

import { ServiceTabsContents } from './tab-contents'
import { ServicesTabNavigation } from './tab-navigation'

export function LandingPageServicesTabs() {
  const defaultServiceValue = 'stay'

  const [currentTab, setCurrentTab] = useState<string>(defaultServiceValue)

  const onTabChange = (value: string) => {
    setCurrentTab(value)
  }

  return (
    <Tabs
      defaultValue={defaultServiceValue}
      onValueChange={onTabChange}
      className="w-full space-y-4"
    >
      <ServicesTabNavigation currentTab={currentTab} />
      <ServiceTabsContents />
    </Tabs>
  )
}
