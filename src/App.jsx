import { useState } from 'react'

import { Routes, Route } from "react-router-dom";



import './App.css'
import Home from './Home';
import Payment from './component/Payment';



function App() {
    const [cart, setCart] = useState([]);
  
  return (

    
    <>
     <Routes>
    <Route
        path="/"
        element={<Home cart={cart} setCart={setCart} />}
      />

      <Route
        path="/payment"
        element={<Payment cart={cart} setCart={setCart} />}
      />
    </Routes>
   
    </>
  )
}

export default App
