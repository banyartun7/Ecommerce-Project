import { Routes, Route } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import HomePage from './Pages/home/HomePage'
import './App.css'
import CheckoutPage from './Pages/checkout/CheckoutPage'
import OrderPage from './Pages/order/OrderPage'
import TrackingPage from './Pages/order/TrackingPage'
import PageNotFound from './Pages/PageNotFound'

function App() {
  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get("/api/cart-items?expand=product")
      .then((response) => {
        setCart(response.data)
    })
  }, [])
  

  return (
    <Routes>
      <Route index element={<HomePage cart = { cart } />} />  
      <Route path='/checkout' element={<CheckoutPage cart = { cart } />} />
      <Route path='/order' element={<OrderPage cart = { cart } />}/>
      <Route path='/tracking' element={<TrackingPage />} />
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App
