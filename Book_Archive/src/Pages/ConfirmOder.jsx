import React from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { IMG_URL } from "../config";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
  const totalPrice = cartItems.reduce(
    (ac, item) => ac + item.quantity * item.price,
    0
  );

  //   proceed to payment
  const proceedToPayment = () => {
    const data={
        totalPrice
    }
    sessionStorage.setItem('orderInfo',JSON.stringify(data))
    navigate('/payment')
  };

  return (
    <>
      <div className="container my-5">
        <div className="flex md:flex-row flex-col justify-content-evenly  mb-3">
          <div className="col-12 col-md-8 shadow py-3 px-3 ">
            <h2 className="text-center text-3xl ">Shipping Info</h2>
            <div className="col-6 offset-md-3 py-3">
              <div>
                <b>Name</b>: <span className="text-muted">{shippingInfo.name}</span>
              </div>
              <div>
                <b>Email</b>: <span className="text-muted">{shippingInfo.email}</span>
              </div>
              <div>
                <b>City</b>:{" "}
                <span className="text-muted">{shippingInfo.city}</span>
              </div>
              <div>
                <b>Phone</b>:{" "}
                <span className="text-muted">{shippingInfo.phone}</span>
              </div>
              <div>
                <b>Address</b>:{" "}
                <span className="text-muted">
                  {shippingInfo.shippingAddress},{shippingInfo.shippingAddress2}
                </span>
              </div>
            </div>
            <hr />
            <h2 className="text-center text-3xl ">
              Your Cart Items
              {cartItems.map((item, i) => (
                <Fragment key={i}>
                  <hr />
                  <div className="row d-flex align-items-center py-3">
                    <div className="col-3">
                      <img
                        src={`${IMG_URL}/${item.image}`}
                        alt={item.title}
                        width={`100`}
                      />
                    </div>
                    <div className="col-3">
                      <p className="text-muted fs-5">{item.title}</p>
                    </div>
                    <div className="col-4 ">
                      <p className="text-warning fs-5">
                        Rs.{item.price} x {item.quantity} =
                        <b>Rs.{item.price * item.quantity}</b>
                      </p>
                    </div>
                  </div>
                </Fragment>
              ))}
            </h2>
          </div>
          {/* total summary */}
          <div className="col-12 col-md-3 px-2">
            <h4 className="text-3xl text-center py-3">Order Summary</h4>
            <hr />
            <p className="text-lg py-1">
              SubTotal:{" "}
              <span>
                {cartItems.reduce((ac, item) => ac + Number(item.quantity), 0)}{" "}
                (Units)
              </span>{" "}
            </p>
            <b className="text-lg py-1">
              Total Price: Rs. <span>{totalPrice}</span>
            </b>
            <hr />
            <button className="btn btn-warning mt-3 " onClick={proceedToPayment}>
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
