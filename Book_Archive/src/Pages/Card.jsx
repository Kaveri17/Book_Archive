import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../config";

const Card = (props) => {
    console.log(props); // Log props.item to check its structure

    const { item } = props;

    console.log("Received Item:", item); // Log the received item prop

    if (!item || !item._id) {
        // Handle the case where item or _id is undefined
        return <div>No data</div>; // Or render a placeholder/error message
      }

    console.log("After if clause check:",item);

  // data destructuring
  const {_id,title,price,img,synonpis,stock,yop,nop,isbn,language}=item
  // console.log(props.item.title)
  return (
    <>
          <div className="col">
            <div className="card">
              <img src={`${IMG_URL}/${img}`} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="text-secondary">Rs.{price}</p>
                <Link to={`/productdetail/${_id}`} className="btn btn-primary">View Detail</Link>
              </div>
            </div>
          </div>
         
    </>
  );
};

export default Card;
