import React, {createContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { historyfigures } from '../assets/data'

export const FigureContext = createContext()

const FigureContextProvider = (props) => {

    const navigate= useNavigate()
    const [token, setToken] = useState("")

    const contextValue = {historyfigures, navigate, token, setToken}

  return (
    <FigureContext.Provider value ={contextValue}>
        {props.children}
    </FigureContext.Provider>
  )
}

export default FigureContextProvider