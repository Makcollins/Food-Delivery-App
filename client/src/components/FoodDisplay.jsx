import React, { useContext } from 'react'
import './styles/FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)
  return (
    <div className='food-display container' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list row'>
        {food_list.map((item, index) => {
          return (
            <div className='col-lg-4 col-md-6 col-12' ><FoodItem key={index} id={item._id} name={item.name} aggregate_rating={item.aggregate_rating} description={item.description} price={item.price} image={item.image} /></div>

          )
        })}
      </div>


    </div>
  )
}

export default FoodDisplay