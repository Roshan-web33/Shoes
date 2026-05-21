import React, { useState, useContext } from 'react'
import Navbar from './component/Navbar'
import AddToCart from './component/AddToCart'
import Shoes from './component/Shoes'
import { PaymentContext } from './context/PaymentContext'

const Home = () => {

  const [cart, setCart] = useState([]);
  const { showPayment } = useContext(PaymentContext);

  return (
    <>
      <Navbar />

      <AddToCart cart={cart} setCart={setCart} />

      <Shoes cart={cart} setCart={setCart} />
    </>
  )
}

export default Home