import React from 'react'
import './styles/Wallpaper.css'

const WallPaper = () => {
  return (
    <div className='container-fluid header'>
      <div className='myimg'><img src='https://i.ibb.co/RppWxtQ/dm4uz3-foekoe.gif' alt="" /></div>
      <div className='header-content d-flex align-items-center align-self-center justify-content-center flex-column h-100'>
        <h1 className='text-dark text-center '>Food Delivery and More</h1>
        <p>You deserve great food</p>
        {/* <form>
          <div className='d-flex justify-content-center flex-wrap mb-3'>
            <div className='d-flex'>
              <input type="text" placeholder='Search for dish..' />
            </div>
          </div>
        </form> */}
      </div>
    </div>
  )
}

export default WallPaper
