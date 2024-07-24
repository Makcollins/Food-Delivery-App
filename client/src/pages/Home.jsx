import React, { useState } from 'react'
import WallPaper from '../components/WallPaper'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {
  const [category,setCategory] = useState('All');
  return (
    <div>
        <WallPaper/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category ={category}/>
    </div>
  )
}

export default Home