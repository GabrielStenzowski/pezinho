'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { WalletCards } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!name || !email || !password) return

    setLoading(true)
    try {
      console.log({ name, email, password })
      toast.success('Cadastro realizado com sucesso!')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="h-svh overflow-hidden bg-muted flex flex-col items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <WalletCards className="size-4" />
          </div>
          Pezinho Inc.
        </div>

        <div className="space-y-4 bg-background p-6 rounded-lg shadow-md">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button className="w-full" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Criando conta...' : 'Criar conta'}
          </Button>
        </div>
      </div>
    </div>
  )
}
