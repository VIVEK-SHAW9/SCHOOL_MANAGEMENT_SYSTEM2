import React from 'react'
import '../components/Style.css'
import Sidenavber from './Sidenavber'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
 
    const navigate = useNavigate();
     const logoutHandler = ()=>{
    navigate('/login');
 

  }
  return (
    <div className='dashboard-main-container'>
      <div className='dashboard-container'>
       <Sidenavber/>


      <div className='main-container'>
        <div className='top-bar'>
         <div className='logo-container'>
        <img alt='profile-logo' className='profile-logo' src={require('../assests/school img.png')}/>
         </div>

        <div className='profile-controler'>
          <h2 className='profile-name'>JIS SCHOOL</h2>
          <button className='logout-btn'onChange={logoutHandler}>Log Out</button>
        </div>

   </div>
   <div className='outlet-area'>
      <Outlet/>
   </div>
 
      </div>
   
      </div>
    
    </div>
  )
}

export default Dashboard
