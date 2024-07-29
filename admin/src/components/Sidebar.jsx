import React from 'react'
import './styles/Sidebar.css'
import { GoPlusCircle } from "react-icons/go";
import { BsFillBagCheckFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options d-flex flex-column">
        <div className='sidebar-option d-flex align-items-center'>
          <GoPlusCircle />
          <p>Add Items</p>
        </div>
        <div className='sidebar-option d-flex align-items-center'>
          <BsFillBagCheckFill />
          <p>List Items</p>
        </div>
        <div className='sidebar-option d-flex align-items-center'>
          <BsFillBagCheckFill />
          <p>Order</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar