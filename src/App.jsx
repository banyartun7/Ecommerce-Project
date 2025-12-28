import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import './App.css'
import CheckoutPage from './Pages/checkout/CheckoutPage'
import OrderPage from './Pages/OrderPage'
import TrackingPage from './Pages/TrackingPage'
import PageNotFound from './Pages/PageNotFound'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>} />  
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/order' element={<OrderPage />}/>
      <Route path='/tracking' element={<TrackingPage />} />
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App
