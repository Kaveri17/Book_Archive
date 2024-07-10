import React from 'react'
import { Link } from 'react-router-dom'

const OrderSuccess = () => {
  return (
    <>
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-6 text-center">
                    <img src="https://www.clearsteps.com/wordpress/wp-content/uploads/2017/12/Green-Check.png" alt="" className="img-fluid d-block mx-auto my-5" height={'200'} width={'200'}/>
                    <h2 className='text-2xl py-2 text-emerald-600 font-extrabold w-full'>Your order has been successfully placed. Thank you for shopping with us!</h2>
                    
                    <Link to='/' className='text-lg font-semibold' style={{color:"rgb(140, 46, 62)"}}>Browse More Of Our Collections</Link>
                </div>
                </div>
             </div>
    </>
  )
}

export default OrderSuccess