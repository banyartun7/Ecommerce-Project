import "./Checkout.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import PaymentSummary from "./PaymentSummary";
import OrderSummary from "./OrderSummary";

const CheckoutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {

    const fetchCheckoutData = async () => {
      let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    }
    
    fetchCheckoutData()
   
  }, []);

  return (
    <>
      <link rel="icon" href="/public/images/cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          
          <OrderSummary deliveryOptions = { deliveryOptions } cart = { cart }/>

          <PaymentSummary paymentSummary = { paymentSummary }/>

        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
