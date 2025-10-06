import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    const [isSidebarOpen,setIsSidebar] = useState(false);

    const toggleSide = () =>{
        setIsSidebar(!isSidebarOpen);
    }
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
      <div className='flex md:hidden p-4 bg-gray-900 text-white z-20'>
        <button>
            <FaBars size={24} onClick={toggleSide} />
        </button>
         <h1 className='ml-4 text-xl font-medium'>Admin Dashboard</h1>
      </div>

      {isSidebarOpen && (
        <div className='fixed inset-0 z-10 bg-black opacity-50 md:hidden' onClick={toggleSide}>
        </div>
      )}

      {/* sidebar */}

      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSidebarOpen? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        
        <Sidebar />
        
      </div>
      <div className="grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
