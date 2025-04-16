import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FigureContextProvider from './context/FigureContext';

import Header from './components/Header';
import Home from './pages/Home';
import Figures from './pages/Figures';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Biography from './pages/Biography';
import Chat from './pages/Chat';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile'; // import Profile page

const App = () => {
  return (
    <FigureContextProvider> {/* Wrap the app with context provider */}
      <main className='overflow-hidden bg-primary'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/figures' element={<Figures />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path="/biography/:id" element={<Biography />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path='/chat/:id' element={<Chat />} />
          <Route path='/quiz/:id' element={<Quiz />} />
        </Routes>
      </main>
    </FigureContextProvider> // Corrected here
  );
}

export default App;
