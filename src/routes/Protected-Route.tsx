import { UseAuth } from '@/hooks/UseAuth'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
  children: ReactNode
}
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = UseAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}
