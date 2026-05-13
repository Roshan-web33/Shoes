import React from 'react'
import { useState } from 'react'

const Payment = () => {
  
  

  const [cod, setCod] = useState(false);
  const [credit, setCredit] = useState(false);

  return (
    <div className='form-conteinter'>
      <h2>Payment Page</h2>

     

      {/* Payment Options */}
      <div>
        <input
          type="checkbox"
          checked={cod}
          onChange={() => {
            setCod(!cod);
            setCredit(false);
          }}
        />
        COD

        <input
          type="checkbox"
          checked={credit}
          onChange={() => {
            setCredit(!credit);
            setCod(false);
          }}
        />
        Credit Card
      </div>

      {/* COD Form */}
      {cod && (
        <div className='cod'>
          <input placeholder="Phone" />
          <input placeholder="Address" />
          <button>Order Now</button>
        </div>
      )}

      {/* Credit Card Form */}
      {credit && (
        <div className='credit'>
          <input placeholder="Card Number" />
          <input placeholder="Expiry" />
          <input placeholder="CVV" />
          <button>Pay Now</button>
        </div>
      )}
    </div>
  )
}

export default Payment
