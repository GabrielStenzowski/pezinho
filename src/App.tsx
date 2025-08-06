import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './provider/AuthProvider'
import { LoginPage } from './Screens/login/login-page'
import { HomePage } from './Screens/home/home-page'
import { ProtectedRoute } from './routes/Protected-Route'
import { RegisterPage } from './Screens/register/register-page'
import { FooterNav } from './components/footer'
import { Header } from './components/header'

function AppRoutes() {
  const location = useLocation()

  const hideHeaderFooterRoutes = ['/', '/register']
  const showHeaderFooter = !hideHeaderFooterRoutes.includes(location.pathname)

  return (
    <>
      {showHeaderFooter && <Header />}
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
      </Routes>

      {showHeaderFooter && <FooterNav />}
    </>
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
