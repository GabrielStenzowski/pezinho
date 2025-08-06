import type { LoginProps } from '@/@types/auth-props'
import { AuthContext } from '@/context/AuthContext'
import { useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

type AuthContextProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthContextProviderProps) {
  const nagivate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const login = (data: LoginProps) => {
    setIsAuthenticated(true)
    console.log('login', data)
    setTimeout(() => {
      nagivate('/home')
    })
  }

  const logout = () => {
    setIsAuthenticated(false)
    setTimeout(() => {
      nagivate('/')
    })
  }

  const value = {
    isAuthenticated,
    login,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
