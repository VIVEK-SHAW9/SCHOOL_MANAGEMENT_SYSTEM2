import React from 'react'
import '../components/Style.css'
import { Link, useLocation } from 'react-router-dom'

const Sidenavber = () => {
    const location = useLocation();
  return (
    <div className='nav-container'>
    <div className='brand-container'>

        <img className='profile-logo' alt='brand-logo' src={require('../assests/school img.png')}/>
       <div>
         <h2 className='brand-name'>JIS SCHOOL</h2>
         <p className='brand-bar'>Manage Your Data</p>
       </div>

    </div>
    <div className='menu-container'>
        <Link to='/dashboard/home' className={location.pathname === '/dashboard/home'?'menu-active-link':'menu-link'}><i className="fa-solid fa-regular fa-house"></i> Home</Link>
        <Link  to='/dashboard/cources'className={location.pathname === '/dashboard/cources'?'menu-active-link':'menu-link'}><i className="fa-solid fa-book"></i>All Course</Link> 
        <Link to='/dashboard/add-cources' className={location.pathname === '/dashboard/add-cources'?'menu-active-link':'menu-link'}><i className="fa-solid fa-plus"></i>ADD Course</Link>
        <Link to='/dashboard/student' className={location.pathname === '/dashboard/student'?'menu-active-link':'menu-link'}><i className="fa-solid fa-user-plus"></i>All Student</Link> 
        <Link to='/dashboard/add-student' className={location.pathname === '/dashboard/add-student'?'menu-active-link':'menu-link'}><i className="fa-solid fa-users"></i>Add Student</Link>
        <Link to='/dashboard/collect-fee' className={location.pathname === '/dashboard/collect-fee'?'menu-active-link':'menu-link'}><i className="fa-solid fa-money-bill"></i>Collect Fee</Link>
        <Link to='/dashboard/payment-history' className={location.pathname === '/dashboard/payment-history'?'menu-active-link':'menu-link'}><i className="fa-solid fa-clock-rotate-left"></i>Payment History</Link>


       </div>
       <div className='contract-us'>
        <p><i class="fa-solid fa-address-book"></i>Contract Developer</p>
        <p><i class="fa-solid fa-regular fa-envelope"></i>developer@gmail.com</p>
       </div>
       </div>
      
    
  )
}

export default Sidenavber
