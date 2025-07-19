import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/userside/Home'
import Register from './pages/userside/Register'
import Login from './pages/userside/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


       
      </Routes>
    </Router>
  )
}

export default App
