// src/components/DashboardLayout.jsx
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import { UseUserData } from './utils/customHook/useCookieData'

const DashboardLayout = ({ sidebarData }) => {
const { userData, loading } = UseUserData({ key: "userData" });

  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex h-screen">
     <Sidebar sidebarData={sidebarData} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          {userData? <Outlet />: <Navigate to={'/login'}/>}
       
        </div>
      </div>
      
    </div>
  )
}

export default DashboardLayout
