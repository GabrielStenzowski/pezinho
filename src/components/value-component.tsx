import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { type LucideIcon } from 'lucide-react'

interface valueComponentProps {
  title: string
  value: string | number
  description: string
  icon: LucideIcon
  iconColor: string
  cardType: number
  bdColor?: string
}

export function ValueComponent({
  title,
  value,
  description,
  icon: Icon,
  iconColor,
  cardType,
  bdColor,
}: valueComponentProps) {
  return (
    <Card className="shadow-medium border-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        {cardType === 1 && (
          <div className={`text-2xl font-bold text-foreground ${iconColor}`}>
            {value}
          </div>
        )}
        {cardType === 2 && (
          <>
            <div className="text-2xl font-bold text-foreground">{value}%</div>
            <div className="w-full bg-secondary rounded-full h-2 mt-2 relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${bdColor}`}
                style={{ width: `${parseFloat(String(value))}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </>
        )}
        {cardType === 1 && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
