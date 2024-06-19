import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = ({isPhotoPresent}) => {
  return (
    <div className='nav-bar'>

      <div className='nav-logo'>
      <NavLink to='/'>
       <img src='https://www.kiran.foundation/branding/logo_home.png'></img>
       </NavLink>
       </div>

<div className='nav-title'>
<NavLink to='/'>
Photo Management App
</NavLink>
</div>

<div className='nav-Gallery'>
<NavLink to='/gallery'>
Gallery
</NavLink>
</div>
{ isPhotoPresent && 
<div className='nav-Details'>

</div>
}
    </div>
  )
}

export default Navbar