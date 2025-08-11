import { ArrowDownRight, ArrowUpRight, type LucideIcon } from 'lucide-react'
import { Badge } from './ui/badge'
import { dateFormat } from '@/utils/dateFormat'
import { moneyFormat } from '@/utils/moneyFormat'

interface CardRecentMovimentProps {
  type: 'income' | 'expense'
  icon: LucideIcon
  description: string
  amount: number
  category: string
  date: string
}

export function CardRecentMoviment({
  type,
  icon: Icon,
  description,
  date,
  amount,
  category,
}: CardRecentMovimentProps) {
  const isIncome = type === 'income'
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border-2 border-border hover:bg-accent/50 transition-colors">
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-full ${
            isIncome ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <Icon
            className={`w-4 h-4 ${
              isIncome ? 'text-green-500' : 'text-red-500'
            }`}
          />
        </div>
        <div>
          <p className="font-medium text-foreground">{description}</p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
            <span className="text-sx text-muted-foreground">
              {dateFormat(date)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`flex items-center gap-1 ${
            isIncome ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isIncome ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowDownRight className="w-4 h-4" />
          )}
          <span className="font-semibold">
            {isIncome ? '+' : '-'}
            {moneyFormat(amount)}
          </span>
        </div>
      </div>
    </div>
  )
}
