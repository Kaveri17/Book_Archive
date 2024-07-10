import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from './ProductStaticData';
// import { ToastContainer, toast } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API, IMG_URL } from '../config';
import axios from 'axios';

const ProdutDetails = () => {
     
    // const [addBtn,setAddBtn ] = useState(false)

    const {id} = useParams();
    console.log(id)

    const [product,setProduct]=useState({})

    useEffect(()=>{
        axios.get(`${API}/productdetail/${id}`)
        .then((res)=>{
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err=>console.log(err))
    },[id])

    const addToCart=()=>{
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        const productItem={
            id:product._id,
            title:product.title,
            image:product.img,
            price:product.price,
            quantity:1 ,
            stock: product.stock,
        }

        // check existance of cart item
        const existItem= cartItems.find((item)=>item.id === productItem.id)

        if(existItem){
            toast.error('Product already in cart')
        }
        else{
            cartItems.push(productItem)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            toast.success(`${productItem.title} is successfully added to cart`)
        }

    }

    const notify = () => toast.success('Notification message');

    // const products = Products
    // console.log(products)

    // const product = Products.find(product => product.id === parseInt(id)) 

    // console.log(product)
    // console.log(product.img)


    // if (!product) {
    //     return <div>Product not found</div>;
    //   }

    // const displayBtn = ()=>{
    //     setAddBtn(!addBtn)
    // }
    
  return (
    <>
        <div class="book-container d-flex justify-content-center py-5">
        <div class="wrapper mx-auto flex md:flex-row flex-col items-center">
                    <div class="book-image md:w-2/6 w-3/4 ">
                        <img src={`${IMG_URL}/${product.img}`} alt={product.title} className="rounded"/>
                        {/* <img src='/img/daily3.jpeg' alt={product.title} className="rounded"/> */}
                    </div>
                    <div class="book-details md:w-4/6 w-5/6 py-3 md:py-0 md:ps-3">
                        <h1 className="fs-2 fw-bold capitalize py-1">{product.title}</h1>
                        <h3 className='fw-semibold capitalize py-1'>by {product.author}</h3>
                        <h5 className='py-2'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </h5>
                        <h3 className="fs-5 fw-semibold py-1"> <span className="fw-bold">Price: Rs.</span> {product.price} </h3>
                        <p className='synopsis d-flex flex-column py-1 text-justify'> 
                            <span className="fw-bold fs-5 py-2 md:py-0">Synopsis:</span> 
                            {product.synopsis}
                        </p>
                        <h3 className="fs-5 fw-semibold py-1"> <span className="fw-bold">Year of Publishing: </span> {product.yop}</h3>
                        <h3 className='fs-5 fw-semibold py-1'> <span className="fw-bold">Number of Pages: </span> {product.nop}</h3>
                        <h3 className='fs-5 fw-semibold py-1'> <span className="fw-bold">ISBN: </span> {product.isbn}</h3>
                        <h3 className='fs-5 fw-semibold py-1'> <span className="fw-bold">Language: </span> {product.language}</h3>
            
                        <div class="book-payment">
                            <button className="btn btn-warning" onClick={addToCart}>Add To Cart</button>
                        </div>                   
                    </div>
                </div>
        </div>
    </>
  )
}

export default ProdutDetails