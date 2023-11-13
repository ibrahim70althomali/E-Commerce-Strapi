import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import "./Home.css"
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      {/* لازم يكون نفس الاسم فس ستربي */}
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending" />
    </div>
  )
}

export default Home
