import { useState } from 'react'
import Navbar from './component/Navbar'
import AddToCart from './component/AddToCart'

import './App.css'
import Shoes from './component/Shoes'
import Payment from './component/Payment'
import { useContext } from 'react'
import { PaymentContext } from './context/PaymentContext'



function App() {
  const [cart, setCart] = useState([]);
  const { showPayment } = useContext(PaymentContext);

  return (
    <>
    <Navbar/>
    <AddToCart cart={cart} setCart={setCart} />

     {!showPayment ? (
    <>
      <Shoes cart={cart} setCart={setCart} />
      
    </>
  ) : (
    <Payment />
  )}
    </>
  )
}

export default App
