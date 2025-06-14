import Collection from '@/Components/Collection/Collection'
import Footer from '@/Components/Footer/Footer'
import Navbar from '@/Components/Navbar/Navbar'
import Slider from '@/Components/Slider/Slider'
import React from 'react'

function MainPage() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Collection/>
        <Footer/>
    </div>
  )
}

export default MainPage