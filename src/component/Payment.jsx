import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart"
import Navbar from "./Navbar";

const Payment = () => {


  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    alert("Congratulations! Your order is confirmed.");

    // Reset fields
    setPhone("");
    setAddress("");
    setCardNumber("");
    setExpiry("");
    setCvv("");
    setPaymentMethod("");

    navigate("/");
  };

  return (
    <>

  <Navbar/>
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

      {/* COD FORM */}
      {paymentMethod === "cod" && (
        <form className="cod" onSubmit={handleClick}>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            pattern="[0-9]{10}"
            placeholder="Phone"
            required
          />

          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />

          <button type="submit">Order Now</button>

        </form>
      )}

      {/* CREDIT CARD FORM */}
      {paymentMethod === "credit" && (
        <form className="credit" onSubmit={handleClick}>

          <input
            type="text"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value.replace(/\D/g, ""))
            }
            minLength={16}
            maxLength={16}
            placeholder="Card Number"
            required
          />

          <input
            type="text"
            value={expiry}
            placeholder="MM/YY"
            required
            maxLength={5}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, "");

              if (value.length >= 3) {
                value = value.slice(0, 2) + "/" + value.slice(2, 4);
              }

              setExpiry(value);
            }}
          />

          <input
            type="password"
            value={cvv}
            onChange={(e) =>
              setCvv(e.target.value.replace(/\D/g, ""))
            }
            maxLength={3}
            placeholder="CVV"
            required
          />

          <button type="submit">Pay Now</button>

        </form>
      )}


      <AddToCart/>
    </div>

        </>
  );
};

export default Payment;