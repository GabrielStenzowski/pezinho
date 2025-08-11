import { ArrowBigLeft, ArrowBigRight, Calendar } from 'lucide-react'
import { QuickActionsSection } from '../actions-select/actions-select-page'
import { ValuePage } from '../values/values-page'

export function HomePage() {
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
      <QuickActionsSection />
      <div>
        <ValuePage />
      </div>
    </div>
  )
}
