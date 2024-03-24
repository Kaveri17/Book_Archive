import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="navbars py-1">
            <div className="nav">
                <div className="logo">
                    <img src="img/logo.png" alt="logo"/>
                    <Link to="/">
                        <h1>BOOK ARCHIVE</h1>
                    </Link>
                </div>
                <div className="nav-content">
                    <div className="nav-links">
                        <Link to="/"><li>Home</li></Link>
                        <li><Link to="#about">Genres</Link></li>
                        <li><Link to="#menu">New Arrivals</Link></li>
                        <li><Link to="#blogpost">Categories</Link></li>
                        <li><Link to="#contact">Explore</Link></li>
                    </div>
                    <div className="nav-icons">
                        <i className="bi bi-search"></i>
                        <i className="fa-regular fa-user login"></i>
                        <i className="fa-solid fa-cart-shopping cart"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header