import { createContext, useState } from "react";

export const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {

  const [showPayment, setShowPayment] = useState(false);

  return (
    <PaymentContext.Provider
      value={{ showPayment, setShowPayment }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;