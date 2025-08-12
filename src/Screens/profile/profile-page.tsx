'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ProfilePage() {
  const [salary, setSalary] = useState('')
  const [currency, setCurrency] = useState('BRL')

  return (
    <div className="pb-14 m-4">
      <div className="max-w-5xl mx-auto ">
        <Tabs defaultValue="perfil" className="space-y-6">
          <TabsList>
            <TabsTrigger value="perfil">Perfil</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
            <TabsTrigger value="seguranca">Segurança</TabsTrigger>
            <TabsTrigger value="preferencias">Preferências</TabsTrigger>
          </TabsList>

          <TabsContent value="perfil" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Usuário</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-4">
                <div className="size-16 rounded-full bg-muted flex items-center justify-center text-xl font-bold">
                  G
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Gabriel Stenzowski</p>
                  <p className="text-sm text-muted-foreground">
                    gabriel@email.com
                  </p>
                </div>
                <Button variant="outline">Editar perfil</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Salário Mensal</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Ex: 5000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
                <Button>Salvar</Button>
              </CardContent>
              <CardContent className="mt-4 text-sm text-muted-foreground">
                Últimos salários: R$ 5000 (Jul), R$ 4800 (Jun)
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="financeiro" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Cartões</CardTitle>
                <Button size="sm">
                  <Plus className="size-4 mr-2" /> Adicionar
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b pb-2">
                    <span>Nubank Platinum</span>
                    <span className="text-muted-foreground">
                      Limite: R$ 5.000
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contas Bancárias</CardTitle>
                <Button size="sm">
                  <Plus className="size-4 mr-2" /> Adicionar
                </Button>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b pb-2">
                    <span>Banco Inter - Conta Corrente</span>
                    <span className="text-muted-foreground">
                      Saldo: R$ 3.200
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="seguranca" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Input placeholder="Senha atual" type="password" />
                <Input placeholder="Nova senha" type="password" />
                <Button>Salvar</Button>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Autenticação de Dois Fatores</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <span>Ativar 2FA</span>
                <Switch />
              </CardContent>
            </Card> */}
          </TabsContent>
          <TabsContent value="preferencias" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Moeda Padrão</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a moeda" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BRL">Real (R$)</SelectItem>
                    <SelectItem value="USD">Dólar (US$)</SelectItem>
                    <SelectItem value="EUR">Euro (€)</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* <Card>
              <CardHeader>
                <CardTitle>Tema</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card> */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
