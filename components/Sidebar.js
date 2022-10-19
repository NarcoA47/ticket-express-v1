import React, { useState, useMemo } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from "./styles/Layout.module.css";
import { Home } from '@mui/icons-material';
import ClassNames from 'classnames';



const menuItems = [
  {
    id: 1,
    label: "Overview",
    icon: <Home/>,
    link: "/"
  },
  {
    id: 2,
    label: "My tickets",
    icon: <Home/>,
    link: "/tickets"
  },
  {
    id: 3,
    label: "Account",
    icon: <Home/>,
    link: "/account"
  },
  {
    id: 4,
    label: "Notifications",
    icon: <Home/>,
    link: "/notifications"
  },
  {
    id: 5,
    label: "Settings",
    icon: <Home/>,
    link: "/settings"
  },
]


const getNavItemclasses = (menu) => {
  return classNames = ("flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-no-wrap",
  {
    [bg-light-lighter] : activeMenu.id === menu.id
  }
  )
}

function Sidebar() {

  const router = useRouter();
  const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname),[router.pathname])

  return (

    <div className='bg-white text w-80 h-screen pb-4 pt-8 px-4 flex justify-between flex-col '>
      <div className='flex flex-col'>
        <div className='flex relative items-center justify-between'>
          <div className='flex items-center pl-4 gap-4'>
              <Link passHref href="/home">
                <div className={`image cursor-pointer ${styles.logo}`}>
                  <Image
                    src="/tx_smooth_b.svg"
                    alt="Ticket Express Logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
          </div>
        </div>
        <div className='items-start flex flex-col mt-24'>
            {menuItems.map(({icon:Icon, ...menu})=>{
              const classes = getNavItemclasses(menu);
              return (
                <div className={classes}>
                  <Link href={menu.link}>
                    <a className='flex py-4 px-3 items-center h-full w-full'>
                      <div styles={{width:"2.5rem"}}>
                        <Icon/>
                      </div>
                        <span className='text-md font-medium text-text-light '>{menu.label}</span>

                    </a>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>



      <div className=''>log out goes here</div>
    </div>
  )
}

export default Sidebar
