import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import NavBar from './components/NavBar.jsx'

const App = () => {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

