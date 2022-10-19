import React from 'react'
import Sidebar from './Sidebar'

function DashboardLayout({children}) {
  return (
    
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar/>
        <div className='bg-#efefef flex-1 text p-4 pt-8 border-solid border'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout