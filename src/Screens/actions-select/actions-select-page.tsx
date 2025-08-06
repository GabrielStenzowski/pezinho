// components/QuickActionsSection.tsx
import { ButtonAction } from '@/components/button-action'
import {
  PlusCircle,
  ArrowDownCircle,
  Target,
  BarChart2,
  CalendarCheck2,
  Tags,
} from 'lucide-react'

export function QuickActionsSection() {
  const actions = [
    {
      label: 'Nova Entrada',
      icon: PlusCircle,
      onClick: () => console.log('Nova Entrada'),
    },
    {
      label: 'Nova Despesa',
      icon: ArrowDownCircle,
      onClick: () => console.log('Nova Despesa'),
    },
    {
      label: 'Nova Meta',
      icon: Target,
      onClick: () => console.log('Nova Meta'),
    },
    {
      label: 'Relatórios',
      icon: BarChart2,
      onClick: () => console.log('Relatórios'),
    },
    {
      label: 'Planejamento',
      icon: CalendarCheck2,
      onClick: () => console.log('Planejamento'),
    },
    {
      label: 'Categorias',
      icon: Tags,
      onClick: () => console.log('Categorias'),
    },
  ]

  return (
    <section className="px-4 py-6 ">
      <div className="max-w-6xl mx-auto border-2 bg-border-gray-300 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Ações Rápidas</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {actions.map((action) => (
            <ButtonAction
              key={action.label}
              icon={action.icon}
              label={action.label}
              onClick={action.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
