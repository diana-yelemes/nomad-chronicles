import React from 'react'
import NewArrivals from '../components/NewArrivals'
import Hero from '../components/Hero'
import PopularFigures from '../components/PopularFigures'
import Footer from '../components/Footer'
import Features from '../components/Features'

const Home = () => {
  return (
    <>
    <Hero/>
    <NewArrivals />
    <PopularFigures />
    <Features />
    <Footer/>
    </>
  )
}
export default Home