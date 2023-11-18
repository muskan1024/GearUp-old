import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Login from './Login'

export const Landing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}
