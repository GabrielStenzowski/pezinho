import type { LoginProps } from '@/@types/auth-props'
import { createContext } from 'react'

export type AuthContext = {
  isAuthenticated: boolean
  login: (data: LoginProps) => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContext)
