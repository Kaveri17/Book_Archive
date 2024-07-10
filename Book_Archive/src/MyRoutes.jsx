import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import ProdutDetails from './Pages/ProdutDetails'
import Cart from './Pages/Cart'
import Shipping from './Pages/Shipping'
import ConfirmOrder from './Pages/ConfirmOder'
// import Payment from './Pages/Payment'
import OrderSuccess from './Pages/OrderSuccess'
import TestHome from './Pages/TestHome'
import PaymentElement from './Pages/PaymentElement'
// import PaymentElement from './Pages/PaymentElement'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/product/:id' element={<ProdutDetails/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/shipping' element={<Shipping/>}/>
                    <Route path='/confirm' element={<ConfirmOrder/>}/>
                    {/* <Route path="payment" component={<PaymentElement/>} /> */}
                    <Route path='/payment' element={<PaymentElement/>}/>
                    <Route path='/success' element={<OrderSuccess/>}/>
                    <Route path='/testhome' element={<TestHome/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default MyRoutes