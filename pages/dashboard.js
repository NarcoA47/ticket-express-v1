import React from 'react'
import { BrowserRouter ,Route ,Router } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Mytickets from './mytickets';
import Notification from './notification';

function Dashboard () {
  return (
    <BrowserRouter>
      <Sidebar>
          <Router>
              <Route path='/' element={<Notification/>}/>
              <Route path='/mytickets' element={<Mytickets/>}/>
          </Router>
      </Sidebar>
    </BrowserRouter>
  )
}

export default Dashboard
