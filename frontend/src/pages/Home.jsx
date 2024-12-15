import React from 'react'
import NewArrivals from '../components/NewArrivals'
import Hero from '../components/Hero'
import PopularFigures from '../components/PopularFigures'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <NewArrivals />
    <PopularFigures />
    <Footer/>
    </>
  )
}
export default Home