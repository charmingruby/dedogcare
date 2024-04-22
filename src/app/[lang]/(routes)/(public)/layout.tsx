import { PropsWithChildren } from 'react'

import { PublicHeader } from '@/components/layouts/public/header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <PublicHeader />

      <div>{children}</div>
    </div>
  )
}
