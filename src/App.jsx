import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import './App.css'
import CheckoutPage from './Pages/CheckoutPage'
import OrderPage from './Pages/OrderPage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>} />  
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/order' element={<OrderPage />}/>
    </Routes>
  )
}

export default App
