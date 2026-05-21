import React from 'react'
import { useNavigate } from "react-router-dom";
import {  useLocation } from "react-router-dom";
const AddToCart = ({ cart = [], setCart }) => {

  const navigate = useNavigate();
    const location = useLocation();

  const increaseQty = (item) => {
    setCart(
      cart.map((x) =>
        x.Name === item.Name
          ? { ...x, qty: x.qty + 1 }
          : x
      )
    );
  };

  const decreaseQty = (item) => {
    const updatedCart = cart
      .map((x) =>
        x.Name === item.Name
          ? { ...x, qty: x.qty - 1 }
          : x
      )
      .filter((x) => x.qty > 0);

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

        {cart.map((item) => (

          <div key={item.id} className='cart-item'>

            <img src={item.img} alt={item.Name} />

            <h4>{item.Name}</h4>

            <div className="qty">

              <button
                className='btn'
                onClick={() => decreaseQty(item)}
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                className='btn'
                onClick={() => increaseQty(item)}
              >
                +
              </button>

            </div>

            <p>${item.price}</p>

          </div>

        ))}

        <div className='total'>

          <h4>Total</h4>

          <h4>
            $ <span className='price'>{total}</span>
          </h4>

        </div>

       <button
  className='payment-btn'
  onClick={() => {
    if (window.location.pathname === "/payment") {
      navigate("/");
    } else {
      navigate("/payment");
    }
  }}
>
  {window.location.pathname === "/payment"
    ? "BACK TO HOME"
    : "PAYMENT NOW"}
</button>

      </div>

    </div>
  )
}

export default AddToCart