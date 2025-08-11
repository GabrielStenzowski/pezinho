import { GoalsCard } from '@/components/goals-card'
import { Calendar, Target } from 'lucide-react'

export function GoalsPage() {
  return (
    <div className="pb-24 m-4">
      <section>
        <div className="max-w-full mx-auto border-2 border-gray-300 bg-gray-100 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Metas Financeiras</h2>
          </div>

          <div className="flex flex-col gap-4">
            <GoalsCard
              title="Reserva de Emergência"
              icon={Calendar}
              date="2025-12-31"
              moneyColor="text-green-500"
              iconColor="text-gray-700"
              bdColor="bg-blue-950"
              actualValue={3500}
              targetValue={20000}
            />
            <GoalsCard
              title="Viagem para New York"
              icon={Calendar}
              date="2027-11-30"
              moneyColor="text-green-500"
              iconColor="text-gray-700"
              bdColor="bg-blue-950"
              actualValue={10000}
              targetValue={40000}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
