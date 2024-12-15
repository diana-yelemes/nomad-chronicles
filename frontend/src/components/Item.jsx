import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({figure}) => {
  return (
    <div>
        <div className='flexCenter bg-rpimary p-6 rounded-3xl overflow-hidden
        relative group'>
            <Link to = {'/biography'}>
            <img src={figure.image} alt='figImg' className='shadow-xl shadow-slate-900/30
            rounded-lg cursor-pointer'/>
            </Link>
        </div>
        <div className='p-3'>
            <div className='flexBetween'>
                <h4 className='h4 line-clamp-1 !my-0'>{figure.name} </h4>
            </div>
            <div className='flexBetween pt-1'>
                <p className='font-bold capitalize'>{figure.category}</p>
            </div>
            <p className='line-clamp-2 py-1'>{figure.description}</p>
        </div>
    </div>
  )
}

export default Item