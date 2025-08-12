import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './provider/AuthProvider'
import { LoginPage } from './Screens/login/login-page'
import { HomePage } from './Screens/home/home-page'
import { ProtectedRoute } from './routes/Protected-Route'
import { RegisterPage } from './Screens/register/register-page'
import { FooterNav } from './components/footer'
import { Header } from './components/header'
import { GoalsPage } from './Screens/goals/goals-page'
import { ProfilePage } from './Screens/profile/profile-page'
import { ReportsPage } from './Screens/reports-and-dashboards/reports-page'

function AppRoutes() {
  const location = useLocation()

  const hideHeaderFooterRoutes = ['/', '/register']
  const showHeaderFooter = !hideHeaderFooterRoutes.includes(location.pathname)

  return (
    <div className="flex flex-col h-screen">
      {showHeaderFooter && <Header />}

      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/goals"
            element={
              <ProtectedRoute>
                <GoalsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {showHeaderFooter && <FooterNav />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
