import React, { Fragment, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../config";

const Cart = () => {
  const navigate=useNavigate()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log(cartItems);
    setProduct(cartItems);
  }, []);

//   removing cart item
const removeCartItem=id=>{
    const cartItems=JSON.parse(localStorage.getItem('cartItems'))

    // to remove
    const filterItems= cartItems.filter((item)=>item.id!==id)

    // update product state
    setProduct(filterItems)
    // update localstorage
    localStorage.setItem('cartItems',JSON.stringify(filterItems))
}

// increase qty
const increaseQty=id=>{
    const updateProduct= product.map(item=>{
        if(item.id===id && item.quantity<item.stock){
            return{...item,quantity:item.quantity+1}
        }
        else{
            return item
        }
    })

    setProduct(updateProduct)

    localStorage.setItem('cartItems',JSON.stringify(updateProduct))
}
// deccrease qty
const decreaseQty=id=>{
  const updateProduct= product.map(item=>{
      if(item.id===id && item.quantity>1){
          return{...item,quantity:item.quantity-1}
      }
      else{
          return item
      }
  })

  setProduct(updateProduct)

  localStorage.setItem('cartItems',JSON.stringify(updateProduct))
}

// shippingHandler
const shippingHandler=()=>{
  navigate('/shipping')
}

  return (
    <>
      <div className="container py-10">
        <div className="row d-flex justify-content-evenly">
          {product.length === 0 ? (
            <h2 className="text-danger text-3xl">Your cart is empty</h2>
          ) : (
            <>
              <h2 className="text-primary text-center text-3xl">Your Items</h2>
              <div className="col-md-8 shadow py-3 rounded">
                {product.map((item, i) => {
                  return (
                    <Fragment key={i}>
                        <hr />
                        <div className="row d-flex align-items-center p-1">
                      <div className="col-2">
                        <img src={
                            `${IMG_URL}/${item.image}`} alt="" width={"100"} className="rounded"/>
                      </div>
                      <div className="col-3">
                        <span><strong>{item.title}</strong></span>
                      </div>
                      <div className="col-2 text-secondary">Rs.{item.price}</div>
                      <div className="col-3">
                        <div className="d-flex">
                            <button className="btn btn-danger"onClick={()=>decreaseQty(item.id)}>-</button>
                            &nbsp;
                            <input type="number" className="form-control text-center border" value={item.quantity} readonly/>
                            &nbsp;
                            <button className="btn btn-success" onClick={()=>increaseQty(item.id)}>+</button>
                        </div>
                      </div>
                      <div className="col-2">
                        <button className="btn btn-danger" onClick={()=>removeCartItem(item.id)}> <FaTrash/> 
                        </button>
                      </div>
                      </div>
                      <hr />
                    </Fragment>
                  );
                })}
              </div>
              <div className="col-md-3 p-3 shadow rounded">
                <h2 className="text-2xl font-medium py-1 ">Cart Summary</h2>
                <hr />
                <span className="py-2 text-lg"><strong>Unit: </strong>
                {
                    product.reduce((total,item)=>total+Number(item.quantity),0)
                }
                </span>
                <br />
                <span className="py-2 text-lg"><strong>Price: </strong>
                {
                    product.reduce((total,item)=>total+(item.quantity*item.price),0)
                }
                </span>
                <hr />
                <button className="btn btn-warning mt-2" onClick={shippingHandler} >Check Out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;