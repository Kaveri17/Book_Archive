import React, { useState } from 'react'

const ProdutDetails = () => {
    const [addBtn,setAddBtn ] = useState(false)

    const displayBtn = ()=>{
        setAddBtn(!addBtn)
    }
  return (
    <>
        <div class="book-container d-flex justify-content-center py-5">
            <div class="wrapper col-11 d-flex flex-wrap justify-content-around align-items-center">
                <div class="book-image col-4">
                    <img src="img/daily4.jpg" alt=""/>
                </div>
                <div class="book-details col-5">
                    <h1 className="fs-2 fw-bold">Book Name</h1>
                    <h3 className='fw-semibold'>by Author Name</h3>
                    <h5>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </h5>
                    <h3 className="fs-5 fw-semibold"> <span className="fw-bold">Price: </span> Rs. 500</h3>
                    <p className='synopsis d-flex flex-column'> 
                        <span className="fw-bold fs-5">Synopsis:</span> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque a autem architecto sunt illum odit. Harum, nulla veniam libero eligendi sed eius ea velit?
                    </p>
                    <h3 className="fs-5 fw-semibold"> <span className="fw-bold">Year of Publishing: </span> 2020</h3>
                    <h3 className='fs-5 fw-semibold'> <span className="fw-bold">Number of Pages: </span> 2020</h3>
                    <h3 className='fs-5 fw-semibold'> <span className="fw-bold">ISBN: </span> 2544555565</h3>
                    <h3 className='fs-5 fw-semibold'> <span className="fw-bold">Language: </span> English</h3>
        
                    <div class="book-payment">
                        {/* <button>Quantity </button> */}
                        {!addBtn ?
                            <button onClick={displayBtn}>Add To Cart</button>
                            :
                            <button onClick={displayBtn}>Added To Cart</button>
                        }
                    </div>                   
                </div>
            </div>
        </div>
    </>
  )
}

export default ProdutDetails