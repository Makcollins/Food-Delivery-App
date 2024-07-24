import React from 'react'
import {Button} from 'react-bootstrap'
import './styles/Wallpaper.css'

const WallPaper = () => {
  return (
    <div className='header'>
        <div className='header-content d-flex align-items-center align-self-center justify-content-center flex-column h-100'>
          <h1 className='text-blue'>Discover the best restaurants and meals</h1>
          <form>
            <div className='d-flex justify-content-start flex-wrap mb-3'>
              <div className='d-flex'>
                <input type="text" placeholder='Location..' />
              </div>
              <div className='d-flex'>
                <input type="text" placeholder='Search for restaurant or dish..' />
              </div>
            </div>  
          </form>                  
            <Button>View Menu</Button>
        </div>
    </div>
  )
}

export default WallPaper