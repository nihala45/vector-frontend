import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/userside/Home'
import OtpPage from './components/common/OtpPage'
import LoginPage from './features/auth/pages/LoginPage'
import RegisterPage from './features/auth/pages/RegisterPage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/login" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpPage />} />



       
      </Routes>
    </Router>
  )
}

export default App
