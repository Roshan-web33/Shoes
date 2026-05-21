import { useState } from 'react'

import { Routes, Route } from "react-router-dom";



import './App.css'
import Home from './Home';
import Payment from './component/Payment';



function App() {
  
  return (

    
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
   
    </>
  )
}

export default App
