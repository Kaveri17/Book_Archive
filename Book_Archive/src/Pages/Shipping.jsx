import React,{useState} from 'react'
import { countries } from 'countries-list'
import { useNavigate } from 'react-router-dom'

const Shipping = () => {
    const navigate=useNavigate()
    const countriesList=Object.values(countries)
    const shippingInfo=JSON.parse(localStorage.getItem('shippingInfo')) || []

    const [shippingAddress,setShippingAddress]=useState(shippingInfo.shippingAddress || '')
    const [shippingAddress2,setShippingAddress2]=useState(shippingInfo.shippingAddress2 || '')
    const [city,setCity]=useState(shippingInfo.city || '' )
    const [name,setName]=useState(shippingInfo.zip || '')
    const [country,setCountry]=useState(shippingInfo.country || '')
    const [phone,setPhone]=useState(shippingInfo.phone || '')
    const [email,setEmail]=useState(shippingInfo.phone || '')

    // submitHandler save shipping info
    const submitHandler=(e)=>{
        e.preventDefault()
        const shippingInfo={
            shippingAddress,
            shippingAddress2,
            city,
            name,
            country,
            phone,
            email
        }
        localStorage.setItem('shippingInfo',JSON.stringify(shippingInfo))
        navigate('/confirm')
    }

  return (
    <>
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5 shadow p-3 my-5">
                    <form>
                        <h2 className="mb-3 text-muted text-3xl text-center">Shipping Information</h2>
                        
                        <div className="mb-2">
                            <label htmlFor="name">Name: </label>
                            <input type="text" id="name" className="form-control" 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="email">Email: </label>
                            <input type="text" id="email" className="form-control" 
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="address1">ShipingAddress1</label>
                            <input type="text" id="address1" className="form-control" 
                            value={shippingAddress}
                            onChange={e=>setShippingAddress(e.target.value)}
                            />

                        </div>
                        <div className="mb-2">
                            <label htmlFor="address2">ShiipingAddress2</label>
                            <input type="text"  id="address2" className="form-control" 
                            value={shippingAddress2}
                            onChange={e=>setShippingAddress2(e.target.value)}
                            />

                        </div>
                        <div className="mb-2">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" className="form-control" 
                            value={city}
                            onChange={e=>setCity(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" className="form-control" 
                            value={phone}
                            onChange={e=>setPhone(e.target.value)}
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="country">Country</label>
                            <select id="country" className="form-control" onChange={e=>setCountry(e.target.value)}>
                                <option value={country}>{country}</option>
                                {countriesList.map((c,i)=>(
                                    <option value={c.name} key={i}>{c.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-2">
                            <button className="btn btn-warning" onClick={submitHandler}>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shipping