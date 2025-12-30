import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./Pages/home/HomePage";
import "./App.css";
import CheckoutPage from "./Pages/checkout/CheckoutPage";
import OrderPage from "./Pages/order/OrderPage";
import TrackingPage from "./Pages/order/TrackingPage";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/order" element={<OrderPage cart={cart} />} />
      <Route path="/tracking/:orderId/:productId" element={<TrackingPage  cart = { cart } />} />
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
