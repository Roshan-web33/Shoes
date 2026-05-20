import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    alert("Congratutions! your oder is confired");

     navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Payment Page</h2>

      {/* Payment Options */}
      <div>
        <label>
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "cod"}
            onChange={() => setPaymentMethod("cod")}
          />
          COD
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            checked={paymentMethod === "credit"}
            onChange={() => setPaymentMethod("credit")}
          />
          Credit Card
        </label>
      </div>

    
      {paymentMethod === "cod" && (
        <form className="cod" onSubmit={handleClick}>
          <input type="text" placeholder="Phone" required />
          <input type="text" placeholder="Address" required />

          <button type="submit">Order Now</button>
        </form>
      )}


      {paymentMethod === "credit" && (
        <form className="credit" onSubmit={handleClick}>
          <input
            type="text"
            minLength={14}
            maxLength={16}
            placeholder="Card Number"
            required
          />

          <input type="text" placeholder="Expiry" required />

          <input
            type="password"
            maxLength={3}
            placeholder="CVV"
            required
          />

          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Payment;