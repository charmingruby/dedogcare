import careIcon from '@/assets/usp-icons/care.svg'
import companionIcon from '@/assets/usp-icons/companion.svg'
import foodIcon from '@/assets/usp-icons/food.svg'

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
]

export function LandingPageUSPList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {mockList.map((props) => (
        <USPListItem key={props.alt} {...props} />
      ))}
    </div>
  )
}
