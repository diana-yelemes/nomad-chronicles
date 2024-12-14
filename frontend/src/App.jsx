import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Figures from './pages/Figures'

const App = () => {
  return (
    <main classname='overflow-hidden bg-primary'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/figures' element={<Figures />} />
      </Routes>
    </main>
  )
}

export default App