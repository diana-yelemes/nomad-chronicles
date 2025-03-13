import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Route, Routes } from "react-router-dom"
import Add from './pages/Add'
import List from './pages/List'
import Favorites from './pages/Favorites'
import Login from './components/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backend_url } from './config/config'; // Import backend_url


function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "")

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <main>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className='bg-primary text-[#404040]'>
          <div className='mx-auto max-w-[1440px] flex flex-col sm:flex-row'>
            <Sidebar token={token} setToken={setToken} />
            <Routes>
              <Route path="/" element={<Add token={token} />} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/favorites" element={<Favorites token={token} />} />
            </Routes>
          </div>
        </div>
      )}
    </main>
  )
}

export default App