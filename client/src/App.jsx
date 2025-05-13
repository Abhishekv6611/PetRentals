import React from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Details from './pages/Details'
import Accepted from './pages/Accepted'
import DashboardLayout from './DashboardLayout'
import { MdSpaceDashboard } from "react-icons/md";

const App = () => {
  const location = useLocation()
  const hideSidebarRoutes = ['/', '/login', '/signup']

  const sidebarData = [
    { icon: <MdSpaceDashboard size={18} />, title: "Home", path: "/home" },
    { icon: <MdSpaceDashboard size={18} />, title: "Details", path: "/details" },
    { icon: <MdSpaceDashboard size={18} />, title: "Accept", path: "/accepted" },
  ]

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      {/* Dashboard routes inside layout */}
     
      <Route element={!hideSidebarRoutes.includes(location.pathname) && <DashboardLayout sidebarData={sidebarData} />}>
        <Route path='/home' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/accepted' element={<Accepted />} />
      </Route>
    </Routes>
  )
}

export default App
