import { LoginForm } from '@/components/login-form'
import { WalletCards } from 'lucide-react'

export function LoginPage() {
  return (
    <div className="h-svh overflow-hidden bg-muted flex flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <WalletCards className="size-4" />
          </div>
          Pezinho Inc.
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
