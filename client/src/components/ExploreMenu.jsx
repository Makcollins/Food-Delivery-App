import React from 'react'
import { menu_list } from '../assets/assets'
import './styles/ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu container' id='explore-menu'>
        <h1>Eplore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit modi officia culpa, 
            tempora nesciunt beatae!</p>
        <div className="explore-menu-list d-flex justify-content-between mx-3 text-center">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All":item.menu_name)} key={index} className='explore-menu-list-item mx-3'>
                        <div className='img shadow'><img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" /></div>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu