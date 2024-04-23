import { Eye, Flag, Gem } from 'lucide-react'

import { Card } from '@/components/shared/ui/card'

import { MissionVisionValueItem, MissionVisionValueProps } from './item'

const mvv: MissionVisionValueProps[] = [
  {
    icon: Flag,
    label: 'Mission',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ut doloremque ducimus assumenda cumque corrupti ab nostrum accusamus quo culpa suscipit, veniam hic fugiat sunt saepe excepturi totam. Ex, error!',
  },
  {
    icon: Eye,
    label: 'Vision',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ut doloremque ducimus assumenda cumque corrupti ab nostrum accusamus quo culpa suscipit, veniam hic fugiat sunt saepe excepturi totam. Ex, error!',
  },
  {
    icon: Gem,
    label: 'Value',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, ut doloremque ducimus assumenda cumque corrupti ab nostrum accusamus quo culpa suscipit, veniam hic fugiat sunt saepe excepturi totam. Ex, error!',
  },
]

export function LandingPageMVV() {
  return (
    <Card className="flex flex-col divide-y-2 divide-border lg:flex-row lg:gap-4 lg:divide-x-2 lg:divide-y-0">
      {mvv.map((props) => (
        <MissionVisionValueItem key={props.label} {...props} />
      ))}
    </Card>
  )
}
