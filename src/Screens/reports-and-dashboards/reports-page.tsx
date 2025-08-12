import { CardRecentMoviment } from '@/components/card-recent-movement'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowBigLeft,
  ArrowBigRight,
  BriefcaseBusiness,
  Calendar,
  Car,
} from 'lucide-react'

export function ReportsPage() {
  return (
    <div className="pb-24 m-4">
      <div className="max-w-6xl mx-auto border-2 border-gray-300 bg-gray-100 rounded-lg p-2 mt-5">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <ArrowBigLeft />
          </div>
          <div className="text-center font-semibold text-lg flex items-center gap-2">
            <Calendar />
            Agosto - 2025
          </div>
          <div className="cursor-pointer">
            <ArrowBigRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4 max-w-7xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              Ultimas Entradas
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
          </CardContent>
        </Card>
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              Ultimas Saídas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardRecentMoviment
              amount={89.99}
              category="Transporte"
              date="2025-08-01"
              description="Combustível"
              icon={Car}
              type="expense"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
