import React,{useState,useEffect} from 'react'
import Card from './Card'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import { API } from '../config'

const CardContainer = () => {
    const[products,setProducts]=useState([])
    const[loading,setLoading]=useState(true)

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
        <div className="container mt-2 mb-2">
        <div className="row row-cols-1 row-cols-md-4 g-4">

            {
                loading ?
                (<ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />)
                :
                // console.log(products)
                (
                    products.slice(0,8).map((product,index)=>{
                        console.log("SIngle Product in map:", product); // Log the item being passed to Card
                        return <Card key={index} item={product}/>
                    }
                )
                )
            }
 
            </div>
        </div>
    </>
  )
}

export default CardContainer