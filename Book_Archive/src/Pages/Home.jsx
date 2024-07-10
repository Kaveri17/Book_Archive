import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProdutDetails from './ProdutDetails'
import { Products } from './ProductStaticData'
import axios from 'axios'
import { API, IMG_URL } from '../config'

const Home = () => {
    const[products,setProducts]=useState([])
    // const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchProduct=async()=>{
            try{
                const response=await axios.get(`${API}/allproduct`)
                console.log("Fetched product:",response.data)
                setProducts(response.data)
                // console.log(response.data)
                setLoading(false)
            }
            catch(err){
                console.log(err)
            }
        }

        // setTimeout(() => {
        //     fetchProduct()
        // }, 2000);
        fetchProduct();
    },[])
    console.log("Products after fetcheproduct called:",products);

  return (
    <>
        {/* HOMEPAGE  */}
        <div className="homepage">  
            <div className="home-content">
                <div className="overlay">
                    <div className="quote">
                        <h2>"Books are a uniquely 
                            <br/><span>portable magic."</span> 
                        </h2>
                        <p>- Stephen King</p>
                    </div>
                </div>
            </div>            
        </div>

        {/* DAILY DEALS */}
        <div className="daily-deals">
            <h1 className=" titles">
                DAILY DEALS <i className="bi bi-stars  stars"></i> </h1>
            <div className="best-book d-flex flex-wrap justify-content-between py-3">
                {
                    products.map(product => {
                        return <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2" key={product._id}>
                            <Link to= {`/product/${product._id}`}>
                                <img src={`${IMG_URL}/${product.img}`} alt={product.title} className="bimage col-9 col-md-12 rounded"/>
                                <ul className="binfo">
                                    <li>{product.title}</li>
                                    <li>by {product.author}</li>
                                    <li>Price: Rs.{product.price}</li>
                                </ul>
                            </Link>
                        </div> 
                    })

                }
                
                {/* <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2 ">
                    <Link to='/productdetails'>
                        <img src="img/daily2.jpeg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            <li>साया</li>
                            <li>by Subin Bhattarai</li>
                            <li>Price: Rs.300</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/daily4.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            <li>YOU'VE REACHED SAM</li>
                            <li>by Dustin Thao</li>
                            <li>Price: Rs.300</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/daily3.jpeg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            <li>पल्पसा क्याफे </li>
                            <li>by Narayan Wagle</li>
                            <li>Price: Rs.300</li>
                        </ul>
                    </Link>
                </div> */}
            </div>
        </div>

        {/* SALE */}
        {/* <div className="sale col-12 bg-danger">
            <div className="wrapper d-flex flex-column flex-lg-row align-items-center h-100 bg-success ">
                <div className="sale-content col-12 col-lg-5 text-center bg-warning">
                    <h1>BOOK FESTIVAL</h1>
                    <h2>Shop Wide Range Of Collections</h2>
                    <h3>ALL BOOKS ARE FLAT <span>50% OFF</span></h3>
                    <button>Shop Now</button>
                </div>
                <div className="sale-img col-12 col-lg-7 bg-info h-100">
                    <img src="img/collection1.jpg" alt="sales" className="w-100 h-100 overflow-hidden">
                </div>
            </div>
        </div> */}
        <div className="sale col-12">
            <div className="wrapper d-flex flex-column flex-lg-row align-items-stretch h-100 ps-3">
                <div className="sale-content col-12 d-flex flex-column justify-content-center align-items-center">
                    <h2>Shop Wide Range Of Collections</h2>
                    <h1>BOOK FESTIVAL</h1>
                    <h3>ALL BOOKS ARE FLAT <span>50% OFF</span></h3>
                    <button className="mt-2 px-4 py-2 border border-0">Shop Now</button>
                </div>
                {/* <div className="sale-img col-12 col-lg-7 d-flex align-items-center justify-content-center overflow-hidden">
                    <img src="img/collection1.jpg" alt="sales" className="h-100 w-100"/>
                </div> */}
            </div>
        </div>

        {/* NEW ARRIVALS */}
        <div className="new-arrivals">
            <h1 className="titles">NEW ARRIVALS <i className="bi bi-stars  stars"></i> </h1>
            <div className="new-book d-flex flex-wrap justify-content-between py-3">
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk1.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>THE GIRL FROM KATHMANDU</li>
                            <li>by Cam Simpson</li>
                            <li>Price: Rs.450</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk2.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>A DEATH IN TOKYO</li>
                            <li>by Keigo Higashino</li>
                            <li>Price: Rs.500</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk3.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>LITTLE WOMEN</li>
                            <li>by Louisa May Alcott</li>
                            <li>Price: Rs.700</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk4.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>THIS WILL MAKE YOU SMARTER</li>
                            <li>by Jhon Brockman</li>
                            <li>Price: RS.500</li>
                        </ul>
                    </Link>
                </div>
            </div>
            <div className="new-book d-flex flex-wrap justify-content-between my-3">        
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk5.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>END OF STORY</li>
                            <li>by A.J. Finn</li>
                            <li>Price: Rs.650</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk6.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>IF ONLY I HAD TOLD HER</li>
                            <li>by Laura Nowlin</li>
                            <li>Price: Rs.500</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk7.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>THE WOMEN</li>
                            <li>by Kristin Hannah</li>
                            <li>Price: Rs.600</li>
                        </ul>
                    </Link>
                </div>
                <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/newbk8.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>RIGHT ON CUE</li>
                            <li>by Fallon Ballard </li>
                            <li>Price: Rs.570</li>
                        </ul>
                    </Link>
                </div>
            </div>

        </div>

        {/* GIFT */}
        <div className="gift">
            <div className="gcontent d-flex flex-column align-items-center ">
                <h2>A book is a gift you can open again and again.</h2> {/*<!-- Garrison Keillor --> */}
                <p>Give Your Family & Friends A Book</p>
                <button className=" mt-1 py-2 px-3 border border-0">Shop Now</button>
            </div>
        </div>

        {/* BEST SELLER */}
        <div className="best-seller">
        <h1 className="titles">BEST SELLERS <i className="bi bi-stars  stars"></i> </h1>
        <div className="best-book d-flex flex-wrap justify-content-between py-3">
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/bestbk1.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <li>Rating(optional)</li>  */}
                            <li>उसले दिएको उमेर </li>
                            <li>by BuddhiSagar</li>
                            <li>Price: Rs.700</li>
                        </ul>
                    </Link>

            </div>
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/bestbk2.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <li>Rating(optional)</li>  */}
                            <li>IKIGAI</li>
                            <li>by Héctor García and Francesc Miralles</li>
                            <li>Price: Rs.650</li>
                        </ul>
                </Link>
            </div>
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>                        
                        <img src="img/bestbk3.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <li>Rating(optional)</li>  */}
                            <li>THE ALCHEMIST</li>
                            <li>by Paulo Coelho</li>
                            <li>Price: Rs.750</li>
                        </ul>
                    </Link>
            </div>
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>                    
                        <img src="img/bestbk4.jpeg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>IT ENDS WITH US</li>
                            <li>by Colleen Hoover</li>
                            <li>Price: Rs.700</li>
                        </ul>
                    </Link>
            </div>
        </div>
        <div className="best-book d-flex flex-wrap justify-content-between my-3">        
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/bestbk5.jpeg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>TO KILL A MOCKINGBIRD</li>
                            <li>by Harper Lee</li>
                            <li>Price: Rs.600</li>
                        </ul>
                    </Link>
            </div>
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>
                        <img src="img/bestbk6.jpeg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                            {/* <!-- <li>Rating(optional)</li> --> */}
                            <li>ATOMIC HABITS</li>
                            <li>by James Clear</li>
                            <li>Price: Rs.630</li>
                        </ul>
                    </Link>
            </div>
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                    <Link to='/productdetails'>                    
                        <img src="img/bestbk7.jpeg" alt="" className="bimage col-9 col-md-12 rounded"/>
                        <ul className="binfo">
                        {/* <!-- <li>Rating(optional)</li> --> */}
                        <li>PERCY JACKSON AND THE OLYMPIANS</li>
                        <li>by Rick Riordran</li>
                        <li>Price: Rs.700</li>
                        </ul>
                    </Link>
            </div>
            <div className="nbook d-flex flex-column col-12 col-md-5 col-xl-2">
                <Link to='/productdetails'>
                    <img src="img/bestbk8.jpg" alt="" className="bimage col-9 col-md-12 rounded"/>
                    <ul className="binfo">
                        {/* <!-- <li>Rating(optional)</li> --> */}
                        <li>THE SUBTLE ART OF NOT GIVING A FUCK </li>
                        <li>by Mark Manson</li>
                        <li>Price: Rs.750</li>
                    </ul>
                </Link>
            </div>
        </div>
        </div>    

        {/* AUTHOR */}
        <div className="author col-12">
            <div className="wrapper d-flex flex-column flex-lg-row justify-content-center ">
                <div className="author-img col-12 col-lg-7 d-flex justify-content-center pt-5">
                    <img src="img/auth.jpg" alt="author" className="auth-img"/>
                </div>
                <div className="author-content col-12 col-lg-5 text-center d-flex flex-column justify-content-center align-items-center">
                    <h1><i className="bi bi-stars stars"></i>AUTHOR OF THE MONTH <i className="bi bi-stars stars"></i> </h1>
                    <h2>Author Name</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quas sequi asperiores est, quibusdam atque obcaecati? Tenetur, sunt accusantium possimus ea quidem facere error.</p>
                    <button className=" mt-1 p-2 border-0"> Shop Now <span><i className="bi bi-arrow-right text-white"></i></span></button>
                </div>
            </div>

        </div>
    </>
  )
}

export default Home