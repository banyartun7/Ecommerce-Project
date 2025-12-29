import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./order.css";
import OrderGrid from "./OrdersGrid";
const OrderPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" href="/public/images/orders-favicon.png" />
      <title>Order</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders = { orders } />
      </div>
    </>
  );
};
export default OrderPage;
