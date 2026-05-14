import React, { useState } from 'react'
import { useContext } from 'react'
import { PaymentContext } from '../context/PaymentContext'
import Payment from './Payment'



const AddToCart = ({ cart, setCart }) => {

 const { showPayment, setShowPayment } = useContext(PaymentContext);

const increaseQty = (item) => {
  setCart(
    cart.map((x) =>
      x.Name === item.Name ? { ...x, qty: x.qty + 1 } : x
    )
  );
};

const decreaseQty = (item) => {
  const updatedCart = cart
    .map((x) =>
      x.Name === item.Name ? { ...x, qty: x.qty - 1 } : x
    )
    .filter((x) => x.qty > 0); // remove if 0

  setCart(updatedCart);
};

const total = cart.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);
  return (
    



    <div>
      <div className='addtoCart'>
        <h3 className='heading'>Add To Cart</h3>

            {cart.map((itme) =>(
                <div key={itme.id} className='cart-item'>
                    <img src={itme.img} alt="" />
                    <h4>{itme.Name}</h4>
                    <div className="qty">
                        <button className='btn' onClick={() => decreaseQty(itme)}>-</button>
                        <span>{itme.qty}</span>
                        <button className='btn' onClick={() => increaseQty(itme)}>+</button>
                    </div>
                    <p>${itme.price}</p>
                </div>

            ))}

  
        <div className='total'>
            <h4>Total</h4>
            <h4>$ <span className='price'>{total}</span></h4>

            
        </div>

        <button
  className='payment-btn'
  onClick={() => setShowPayment(prev => !prev)}
>
 {showPayment ? "BACK TO HOME" : "PAYMENT NOW"}
</button>
    </div>


    </div>


    




  )
}


export default AddToCart