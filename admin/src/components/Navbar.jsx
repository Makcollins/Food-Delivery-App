import React from 'react'
import './styles/Navbar.css'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='my-nav d-flex justify-content-between align-items-center'>
        <h3>Mameals</h3>
        <CgProfile className='profile' />

    </div>
  )
}

export default Navbar