import React from 'react'
import logo from '/src/Images/Logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='d-flex nav px-5 justify-content-between'>
      <div className='d-flex align-items-center'>
        
        <img src={logo} alt="" className='logo'/>
        <div className='links-1'>
        <Link className='link'>Buy a Learning Tablet</Link>
        <Link className='link'>MATRIC</Link>
        </div>
      </div>
      <div>
      <div className='me-5 pe-5 d-flex links-2'>
        <Link className='link'>Login</Link>
        <Link className='link buton'>Sign up</Link> 
      </div>
      </div>
    </div>
  )
}

export default Nav
