import { CardRecentMoviment } from '@/components/card-recent-movement'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BriefcaseBusiness, Car, Coffee } from 'lucide-react'

export function RecentMovementPage() {
  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          Últimas Movimentações
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardRecentMoviment
          amount={4500}
          category="Trabalho"
          date="2025-08-05"
          description="Salário"
          icon={BriefcaseBusiness}
          type="income"
        />
        <CardRecentMoviment
          amount={89.99}
          category="Transporte"
          date="2025-08-01"
          description="Combustível"
          icon={Car}
          type="expense"
        />
        <CardRecentMoviment
          amount={45.0}
          category="Lazer"
          date="2025-08-07"
          description="Café com Amigos"
          icon={Coffee}
          type="expense"
        />
      </CardContent>
    </Card>
  )
}
