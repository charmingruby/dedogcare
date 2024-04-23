import careIcon from '@/assets/usp-icons/care.svg'
import companionIcon from '@/assets/usp-icons/companion.svg'
import dogWalkIcon from '@/assets/usp-icons/dog-walk.svg'
import foodIcon from '@/assets/usp-icons/food.svg'
import healthIcon from '@/assets/usp-icons/health.svg'

import { USPListItem } from './item'

const mockList: USPListItem[] = [
  {
    url: careIcon,
    alt: 'Dog care',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed vitae magni, numquam cupiditate facere',
    title: 'Care',
  },
  {
    url: foodIcon,
    alt: 'Dog Food',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed vitae magni, numquam cupiditate facere',
    title: 'Food',
  },
  {
    url: companionIcon,
    alt: 'Dog Companions',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed vitae magni, numquam cupiditate facere',
    title: 'Companion',
  },
  {
    url: dogWalkIcon,
    alt: 'Dog Walk',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed vitae magni, numquam cupiditate facere',
    title: 'Dog Walk',
  },
  {
    url: healthIcon,
    alt: 'Dog Health',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed vitae magni, numquam cupiditate facere',
    title: 'Dog Health',
  },
]

export function LandingPageUSPList() {
  const topUSPs = mockList.slice(0, 3)
  const bottomUSPs = mockList.slice(3)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-8">
        {topUSPs.map((props) => (
          <USPListItem key={props.alt} {...props} />
        ))}
      </div>

      <div className="grid grid-cols-6">
        <div className="col-span-1" />
        <div className="col-span-4 grid grid-cols-2 gap-8">
          {bottomUSPs.map((props) => (
            <USPListItem key={props.alt} {...props} />
          ))}
        </div>
        <div className="col-span-1" />
      </div>
    </div>
  )
}
