import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Abouts from './Abouts/Abouts'


const Urbanrouting = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/aboutus' element={<Abouts />}></Route>
     </Routes>
    </div>
  )
}

export default Urbanrouting