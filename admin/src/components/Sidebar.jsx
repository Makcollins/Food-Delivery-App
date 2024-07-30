import React from 'react'
import './styles/Sidebar.css'
import { GoPlusCircle } from "react-icons/go";
import { BsFillBagCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options d-flex flex-column">
        <NavLink to='/add' className='sidebar-option d-flex align-items-center'>
          <GoPlusCircle />
          <p>Add Items</p>
        </NavLink>
        <NavLink to='/list' className='sidebar-option d-flex align-items-center'>
          <BsFillBagCheckFill />
          <p>List Items</p>
        </NavLink>
        <NavLink to='/orders' className='sidebar-option d-flex align-items-center'>
          <BsFillBagCheckFill />
          <p>Order</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar