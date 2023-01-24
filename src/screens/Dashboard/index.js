import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from './dashboard.module.sass'

const Dashboard = ({children}) => {
  return (
    <>
        <Sidebar />
        <Navbar />
        <div className={styles.contentcontainer}>
         {children}
        </div>
    </>
  )
}

export default Dashboard