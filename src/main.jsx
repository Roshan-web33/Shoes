import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaymentProvider from './context/PaymentContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

   <PaymentProvider>
    <App />
  </PaymentProvider>


)
