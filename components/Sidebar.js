import React, { Children } from 'react'
import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
import { Home } from '@mui/icons-material'




function Sidebar({children}) {

  const MenuItem = [
    {
    path: '/',
    name: "",
    icon: <Home/>
    },
    {
    path: '/',
    name: "",
    icon: <Home/>
    },
    {
    path: '/',
    name: "",
    icon: <Home/>
    },
    {
    path: '/',
    name: "",
    icon: <Home/>
    },
    {
    path: '/',
    name: "",
    icon: <Home/>
    },
  
  ]


  return (

    <div className='container'>
      <div className='sidebar'>
        {
          MenuItem.map((item,index)=>{
            <NavLink to={item.path} key={index} className='link' activeclassName='active'>
              <div className='icon'>{item.icon}</div>
              <div className='link-name'>{item.name}</div>
            </NavLink>
          })
        }
      </div>
      <main>{children}</main>
    </div>
    // <Box flex={2} p={2}>
    //   <List>
    //     <ListItem disablePadding>
    //       <ListItemButton component="a" href="#">
    //         <ListItemIcon>
    //           <Person />
    //         </ListItemIcon>
    //         <ListItemText primary='home'/>
    //       </ListItemButton>
    //     </ListItem>

    //     <ListItem disablePadding>
    //       <ListItemButton component="a" href="#">
    //         <ListItemIcon>
    //           <Home />
    //         </ListItemIcon>
    //         <ListItemText primary='home'/>
    //       </ListItemButton>
    //     </ListItem>

    //     <ListItem disablePadding>
    //       <ListItemButton component="a" href="#">
    //         <ListItemIcon>
    //           <Home />
    //         </ListItemIcon>
    //         <ListItemText primary='home'/>
    //       </ListItemButton>
    //     </ListItem>

    //     <ListItem disablePadding>
    //       <ListItemButton component="a" href="#">
    //         <ListItemIcon>
    //           <Home />
    //         </ListItemIcon>
    //         <ListItemText primary='home'/>
    //       </ListItemButton>
    //     </ListItem>
      
    //   </List>
    // </Box>
  )
}

export default Sidebar
