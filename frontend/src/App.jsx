import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Figures from './pages/Figures'
import Contact from './pages/Contact'

const App = () => {
  return (
    <main className='overflow-hidden bg-primary'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/figures' element={<Figures />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App