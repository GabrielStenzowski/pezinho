import { ValueComponent } from '@/components/value-component'
import { DollarSign, Target, TrendingDown, TrendingUp } from 'lucide-react'

export function ValuePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 p-4 max-w-7xl mx-auto">
      <ValueComponent
        value="R$ 20.000,00"
        title="Saldo Atual"
        description="Atualizado agora"
        icon={DollarSign}
        iconColor="text-gray-700"
        cardType={1}
      />
      <ValueComponent
        title="Entrada do Mês"
        value="R$ 8.500,00"
        description="+ 12% vs mês anterior"
        icon={TrendingUp}
        iconColor="text-green-600"
        cardType={1}
      />
      <ValueComponent
        title="Saída do Mês"
        value="R$ 3.240,80"
        description="- 8% vs mês anterior"
        icon={TrendingDown}
        iconColor="text-red-600"
        cardType={1}
      />
      <ValueComponent
        title="Progresso das Metas"
        value={35}
        description="Meta: R$ 2000 até Dezembro"
        icon={Target}
        iconColor="text-blue-950"
        cardType={2}
        bdColor="bg-blue-950"
      />
    </div>
  )
}
