'use client'

import { useState } from 'react'

import { Card, CardHeader } from '@/components/shared/ui/card'
import { Tabs, TabsContent } from '@/components/shared/ui/tabs'

import { ServicesTabNavigation } from './tab-navigation'

export function LandingPageServicesTabs() {
  const defaultServiceValue = 'account'

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
      <TabsContent value="nursery">
        <Card>
          <CardHeader>nursery</CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
