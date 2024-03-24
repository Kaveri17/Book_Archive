import React from 'react'

const ProdutDetails = () => {
  return (
    <>
        <div class="book-container d-flex justify-content-center py-5">
            <div class="wrapper col-11 d-flex flex-wrap justify-content-evenly align-items-center">
                <div class="book-image">
                    <img src="img/bestbk8.jpg" alt=""/>
                </div>
                <div class="book-details">
                    <h1>Book Name</h1>
                    <h3>by Author Name</h3>
                    <p>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </p>
                    <h3>Price: Rs. 500</h3>
                    <p> 
                        <span>Synopsis:</span> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque a autem architecto sunt illum odit. Harum, nulla veniam libero eligendi sed eius ea velit?
                    </p>
                    <h3>Year of Publishing: 2020</h3>
                    <h3>Number of Pages: 2020</h3>
                    <h3>ISBN: 2544555565</h3>
                    <h3>Language: English</h3>
        
                    <div class="book-payment">
                        <button>Quantity </button>
                        <button>BUY</button>
                    </div>                   
                </div>
            </div>
        </div>
    </>
  )
}

export default ProdutDetails