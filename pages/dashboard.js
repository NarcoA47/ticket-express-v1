import React from "react";
import styles from "../components/styles/Dashboard.module.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link'




const LoggedData = [
    {
        icon: <AccountCircleIcon/>,
        title: "Personal infomation",
        info: "edit and verify your personal information",
    },
    {
        icon: <ConfirmationNumberIcon/>,
        title: "Tickets",
        info: "get new tickets and see your ticket history "
    },
    {
        icon: <PaymentIcon/>,
        title: "Payments",
        info: "set and manage your payment point"
    },
    {
        icon: <NotificationsActiveIcon/>,
        title: "Notifications",
        info: "recieve notifications about events"
    },
    {
        icon: <LogoutIcon/>,
        title: "Logout",
        info: "Logout of your account"
    }
]

export const UserHeader = () =>{
    return(
        <div class="title">
            <h1>Account Overview</h1>
            <h2>Welcome David</h2>
        </div>
    )
}

const Loggedin = () => {
  return (
    <div className="flex block h-full ml-5 mt-5">
            <div className="absolute ml-1 sm: relative">
                <UserHeader />
                <div className={styles.containers}>
                    {LoggedData.map((val, key) => {
                        return(
                        <div key={key}>
                            <Link passHref href={val.link}>
                            <div className={styles.card}>
                                <div className={styles.icon}>{val.icon}</div>
                                <div className="">
                                    <h2 className="">{val.title}</h2>
                                </div>
                                <div className=" ">
                                    <p className="">{val.info}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        )
                    })}
                </div>
            </div>
    </div>
  )
}

export default Loggedin
