import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../assets/bg.jpg'
import pencil from '../assets/pencil.png'

const Hero = () => {
  return (
    <section className='max-padd-container py-20 xl:py-36'>
        <div className='flexCenter gap-12 flex-col xl:flex-row'>
            {/* Left Side */}
            <div className='flex flex-1 flex-col pt-12 xl:pt-32'>
                <h1 className='h1 max-w-[46rem]'>Learn  <span className='inline-flex '><span className='inline-flex
                    items-center justify-center p-5 h-16 w-16 bg-secondary text-white
                    -rotate-[31deg] rounded-full'>
                         H</span>istory </span> <img src={pencil} alt='pencil image' 
                         height= {49} width ={49} className='inline-flex relative bottom-2'></img> of Kazakhstan With Us!</h1>
                <p>Explore the most influential figures of 
                    the great steppe's history through quizzes 
                    and interactive AI functionality</p>
                    <div className='mt-6'>
                        <Link to={'/figures'}
                        className='btn-secondaryOne'>
                            Explore Now</Link>
                    </div>
            </div>
            {/* Right Side */}
            <div className='flex flex-1 relative z-10 top-12'>
                <div>
                    <img src = {bg} alt = "history image" className='rounded-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' height={588} width={588} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero