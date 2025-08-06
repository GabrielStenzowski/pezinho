import type { LucideIcon } from 'lucide-react'
import { Button } from './ui/button'

interface QuickActionButtonProps {
  icon: LucideIcon
  label: string
  onClick: () => void
}

export function ButtonAction({
  icon: Icon,
  label,
  onClick,
}: QuickActionButtonProps) {
  return (
    <Button
      variant="outline"
      className="flex flex-col items-center justify-center gap-2 h-16 cursor-pointer border-2 bg-border-gray-300"
      onClick={onClick}
    >
      <Icon className="h-10 w-h-10 text-primary" />
      <span className="text-sm">{label}</span>
    </Button>
  )
}
