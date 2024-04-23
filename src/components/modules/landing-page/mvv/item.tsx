import { LucideIcon } from 'lucide-react'

export interface MissionVisionValueProps {
  icon: LucideIcon
  label: string
  content: string
}

export function MissionVisionValueItem({
  icon: Icon,
  label,
  content,
}: MissionVisionValueProps) {
  return (
    <div className="flex w-full flex-col p-4 lg:p-8">
      <div className="w-fit rounded-full">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      <strong className="mt-3 text-xl">{label}</strong>

      <span className="mt-1.5 text-sm text-muted-foreground">{content}</span>
    </div>
  )
}
