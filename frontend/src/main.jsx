import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import FigureContextProvider from './context/FigureContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FigureContextProvider>
    <App />
  </FigureContextProvider>
  </BrowserRouter>
)
