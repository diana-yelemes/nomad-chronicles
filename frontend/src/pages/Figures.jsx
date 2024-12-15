import React, { useContext, useEffect, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { categories } from '../assets/data'
import { LuSettings2 } from 'react-icons/lu'
import Title from '../components/Title'
import { FigureContext } from '../context/FigureContext'
import Item from '../components/Item'
import Footer from '../components/Footer'

const Figures = () => {

  const {historyfigures} = useContext(FigureContext)
  const [category, setCategory] = useState([])
  const [sortType, setSortType] = useState("relevant")
  const [filteredFigures, setFilteredFigures] = useState([])
  const [search, setSearch] = useState("")

  //States for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const toggleFilter = (value, setState) => {
    setState((prev)=> prev.includes(value) ? prev.filter((item)=> item!==value)
  : [...prev, value])
  }

  const applyFilters = () => {
    let filtered = [...historyfigures]

    if(search){
      filtered = filtered.filter((figure)=> 
        figure.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length){
      filtered=filtered.filter((figure)=> 
        category.includes(figure.category))
    }
    return filtered
  }

  const applySorting = (figuresList)=>{
    switch (sortType){
      case 'oldest':
        return figuresList.sort((a, b)=>
          b.birthYear - a.birthYear)
      case 'newest':
        return figuresList.sort((a, b)=>
          a.birthYear - b.birthYear)
      default:
        return figuresList //'relevant' is default
  
  }
}

useEffect(()=>{
  let filtered = applyFilters()
  let sorted = applySorting(filtered)
  setFilteredFigures(sorted)
  setCurrentPage(1)
}, [category, sortType, historyfigures, search])

  // Get current page of figures
  const getPaginatedFigures = ()=>{
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredFigures.slice(startIndex, endIndex)
  }

  //Total number of pages
  const totalPages=Math.ceil(filteredFigures.length / itemsPerPage) 

  return (
    <section className='max-padd-container bg-white'>
      <div className='pt-28'>
        {/* Search box */}
        <div className='w-full max-w-2xl flexCenter'>
          <div className='inline-flex items-center justify-center
          bg-primary overflow-hidden w-full rounded-full p-4 px-5'>
            <div className='text-lg cursor-pointer'><RiSearch2Line /></div>
            <input onChange={(e)=> setSearch(e.target.value)} 
            value={search} type='text' placeholder='Search here...' 
            className='border-none outline-none w-full text-sm pl-4 bg-primary' />
            <div className='flexCenter cursor-pointer border-l pl-2'><LuSettings2 /></div>
          </div>
        </div>

        {/* Categories filter */}
        <div className='mt-12 mb-16'>
          <h4 className='h4 mb-4 hidden sm:flex'>Categories</h4>
          <div className='flex-center sm:flexStart flex-wrap
          gap-x-12 gap-y-4'>
            {categories.map((category) => (
              <label key={category.name}>
                <input value={category.name} onChange= {(e) =>
                toggleFilter(e.target.value, setCategory)} 
                type='checkbox' className='hidden peer' />
                <div className='flexCenter flex-col gap-2
                peer-checked:text-secondaryOne cursor-pointer'>
                  <div className='bg-primary h-20 w-20
                  flexCenter rounded-full'>
                    <img src={category.image} alt={category.name} 
                    className='object-cover h-10 w-10'/>
                  </div>
                  <span className='medium-14'>{category.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        {/* Figures container */}
        <div className='mt-8'>
          <div className='flexBetween !items-start gap-7 flex-wrap
           pb-16 max-sm:flexCenter text-center'>
            <Title title1={'Our'} title2={' Figures List'} 
            titleStyles={'pb-0 text-start'} paraStyles={'!block'}/>
            <div className='flexCenter gap-x-2'>
              <span className='hidden sm:flex medium-16'>Sort by:</span>
              <select onChange={(e)=> setSortType(e.target.value)} 
              className='text-sm p-2.5 outline-none
              bg-primary text-gray-30 rounded'>
                <option value="relevant">Relevant</option>
                <option value="oldest">Oldest</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          {/* Figures */}
          <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3
          lg:grid-cols-4 xl:grid-cols-5 gap-8'>
            {getPaginatedFigures().length>0 ? (
              getPaginatedFigures().map((figure)=> (
                <Item figure={figure} key={figure._id}/>
              ))
            ) : (
              <p>No Figures for selected filters</p>
            )}

          </div>
        </div>
        {/* Pagination */}
        <div className='flexCenter mt-14 mb-10 gap-4'>
          {/* Previous button */}
          <button disabled={currentPage===1} onClick={()=>setCurrentPage((prev) =>
          prev-1)} className={`btn-secondary !py-1 !px-3 ${currentPage ===1 &&
          "opacity-50 cursor-not-allowed"}`}>Previous</button>
          {/* Page numbers */}
          {Array.from({length: totalPages}, (_,index) => (
            <button key={index+1} onClick={()=>setCurrentPage(index+1)}
            className={`btn-light !py-1 !px-3 ${currentPage === index +1 && 
            "!bg-secondaryOne"}`}>
              {index+1}
            </button>
          ))}
          {/* Next button */}
          <button disabled={currentPage===totalPages} onClick={()=> setCurrentPage((prev) =>
          prev+1)} className={`btn-secondary !py-1 !px-3 ${currentPage ===totalPages &&
          "opacity-50 cursor-not-allowed"}`}>Next</button>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Figures