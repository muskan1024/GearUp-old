import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

export const Landing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
