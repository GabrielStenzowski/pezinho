import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { dateFormat } from '@/utils/dateFormat'
import { moneyFormat } from '@/utils/moneyFormat'
import { TrendingUp, type LucideIcon } from 'lucide-react'
interface GoalsCardProps {
  title: string
  moneyColor: string
  date: string
  icon: LucideIcon
  iconColor: string
  bdColor?: string
  actualValue: number
  targetValue: number
}

export function GoalsCard({
  title,
  moneyColor,
  date,
  icon: Icon,
  iconColor,
  bdColor,
  actualValue,
  targetValue,
}: GoalsCardProps) {
  const getProgressPercentage = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100)
  }

  const getRemainingAmount = (current: number, target: number) => {
    return Math.max(target - current, 0)
  }
  const progressPercentage = getProgressPercentage(actualValue, targetValue)
  const reminingAmount = getRemainingAmount(actualValue, targetValue)
  return (
    <Card className="shadow-md border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div>
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Icon className={`h-4 w-4 ${iconColor}`} />
            <span>Até {dateFormat(date)}</span>
          </div>
        </div>
        <div className="text-3xl font-bold text-foreground">
          {progressPercentage}%
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full bg-secondary rounded-full h-2 -mt-4 overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${bdColor}`}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="flex justify-between text-sm mt-2">
          <span className={`${moneyColor} font-medium text-foreground`}>
            {moneyFormat(actualValue)}
          </span>
          <span className="text-muted-foreground">
            de {moneyFormat(targetValue)}
          </span>
        </div>

        {reminingAmount > 0 && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            <TrendingUp className="h-4 w-4 text-green-600" />
            Faltam {moneyFormat(reminingAmount)}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
