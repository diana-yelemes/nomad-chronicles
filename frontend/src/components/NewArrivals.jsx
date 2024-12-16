import React, {useState, useEffect} from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import {Autoplay, Pagination} from 'swiper/modules'
import Item from './Item';
import { useContext } from 'react';
import {FigureContext} from '../context/FigureContext';

const NewArrivals = () => {

  const {historyfigures} = useContext(FigureContext)
  const [newArrivals, setNewArrivals]=useState([])

  //Extracting the fist new figures as new arrivalsf
  useEffect(()=>{
    const data= historyfigures.slice(0,7);
    setNewArrivals(data.reverse());
  }, [historyfigures])

  return (
    <section className='max-padd-container py-16 bg-white'>
        <Title title1={'New'} title2={' Arrivals'} 
        titleStyles={'pb-10'} paraStyles={'!block'} para='New figures added to
        the catalogue for learning!'/>
        {/* Swiper */}
        <Swiper
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            400:{
                slidesPerView:2,
                spaceBetween: 30,
            },
            700:{
                slidesPerView:3,
                spaceBetween: 30,
            },
            1024:{
                slidesPerView:4,
                spaceBetween: 30,
            },
            1200:{
                slidesPerView:5,
                spaceBetween: 30,
            },
        }}
        modules={[Autoplay]}
        className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5'
        >
            {newArrivals.map((figure) => (
                <SwiperSlide key={historyfigures._id}>
                    <Item  figure={figure}/>
                </SwiperSlide>

            ))}
        </Swiper>

    </section>
  )
}

export default NewArrivals