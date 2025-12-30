import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import "./order.css";
import OrderGrid from "./OrdersGrid";
const OrderPage = ({ cart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOrders(response.data);
    };

    fetchOrderData();
  }, []);

  return (
    <>
      <link rel="icon" href="/public/images/orders-favicon.png" />
      <title>Order</title>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrderGrid orders={orders} />
      </div>
    </>
  );
};
export default OrderPage;
