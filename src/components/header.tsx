import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import { Bell, LogOut, Settings } from 'lucide-react'
import { UseAuth } from '@/hooks/UseAuth'
import toast from 'react-hot-toast'

export function Header() {
  const { logout } = UseAuth()

  const handleLogout = () => {
    toast.success('Deslogado com sucesso!')
    logout()
  }

  return (
    <header className="bg-gray-100 border-b border-borde p-4 shadow-soft w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full flex items-start sm:items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarFallback className="bg-black text-primary-foreground">
              GS
            </AvatarFallback>
          </Avatar>
          <div className="overflow-hidden">
            <h1 className="text-base sm:text-lg font-semibold text-foreground truncate">
              Olá, Gabriel Stenzowski!
            </h1>
            <p className="text-sm text-muted-foreground truncate">
              Bem-vindo ao seu controle financeiro
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
          <Button className="w-full sm:w-auto sm:hidden cursor-pointer">
            <Bell className="h-5 w-5" />
          </Button>

          <Button className="w-full sm:w-auto hidden md:flex cursor-pointer">
            <Settings className="h-5 w-5" />
          </Button>

          <Button
            className="gap-2 w-full sm:w-auto cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span className="hidden sm:inline">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
