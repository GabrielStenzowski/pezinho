import { Home, BarChart2, User, Goal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import { useNavigate, useLocation } from 'react-router-dom'

export function FooterNav() {
  const navigate = useNavigate()
  const location = useLocation()

  const tabs = [
    { label: 'Home', icon: Home, path: '/home' },
    { label: 'Relatórios', icon: BarChart2, path: '/relatorios' },
    { label: 'Metas', icon: Goal, path: '/metas' },
    { label: 'Perfil', icon: User, path: '/perfil' },
  ]

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-border p-3 shadow-md z-50">
      <div className="flex justify-around items-center max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path
          return (
            <Button
              key={tab.path}
              variant="ghost"
              onClick={() => navigate(tab.path)}
              className={clsx(
                'flex flex-col items-center text-xs p-2 transition-colors duration-200 cursor-pointer',
                isActive
                  ? 'text-primary font-semibold border-t-2 border-primary pt-5'
                  : 'text-muted-foreground hover:text-primary'
              )}
            >
              <tab.icon className="h-6 w-6 mb-1" />
              {tab.label}
            </Button>
          )
        })}
      </div>
    </footer>
  )
}
