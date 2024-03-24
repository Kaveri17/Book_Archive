import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import ProdutDetails from './Pages/ProdutDetails'

const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/productdetails' element={<ProdutDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default MyRoutes