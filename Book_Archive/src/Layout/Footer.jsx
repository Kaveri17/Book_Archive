import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="layer">
            <div className="wrapper">
                <div className="footer-title">
                    <h1>
                        SUBSCRIBE TO OUR NEWS LETTER 
                    </h1>
                    <form action="/">
                        <input type="email" placeholder="Enter Your Email..."  autocomplete="nope" required />
                        <button>
                            Subscribe Now
                        </button>
                    </form>
                    
                </div>
                <div className="footer-content">
                    <div className="footer-div">
                        <div className="logo1">
                            <img src="img/logo.png" alt="logo"/>
                            <h2>BookArchive</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, quidem? Animi, asperi voluptate aliqu amet lorem hic maiores placeat quas nesciunt
                            
                        </p>
                        <div className="footer-icon">
                            <i className="fa-brands fa-facebook-f ficon"></i>
                            <i className="fa-brands fa-linkedin-in ficon"></i>
                            <i className="bi bi-twitter ficon"></i>
                            <i className="fa-brands fa-google-plus-g ficon"></i>
                        </div>
                    </div>
                    <div className="footer-div">                        
                        <h4>Quick Link</h4>
                        <Link to="/" className="quick">Home Page</Link>
                        <Link to="#Genres" className="quick">Genres</Link>
                        <Link to="#Newarrivals" className="quick">New Arrivals</Link>
                        <Link to="#categories" className="quick">Categories</Link>
                        <Link to="#explore" className="quick">Explore</Link>                           
                    </div>
                    <div className="footer-div">
                        <h3>Contact Info</h3>
                        <li>
                        10001, 5th Avenue, #32841 block, USA
                        </li>
                        <li>
                            +977 9841512265                                   
                        </li>
                         <li>
                            <Link to="">info@example.com</Link>
                        </li>                            
                    </div>
                    <div className="footer-div">
                        <h3>Information</h3>
                        <li>
                            Contact
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Carrers
                        </li>
                        <li>
                            Refund & Returns
                        </li>
                        <li>
                            Deliveries
                        </li>
                       
                    </div>
                </div>
                <div className="copyright">
                    <h2>&copy 2023 BookArchive | Design by Kaveri.<i className="fa-sharp fa-solid fa-heart heart"></i></h2>
                </div>
            </div>
        </div>

    </footer>
    </>
  )
}

export default Footer