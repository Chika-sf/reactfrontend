import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesa = () => {

  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  const[phone,setPhone]=useState("")

  // uselocation allows us to recieve product from the getproductsdetails
  const{product}=useLocation().state || {}

  const image_url="https://chikadrian.alwaysdata.net/static/images/"



  // function to submit our data to the api
  const submit=async(e)=>{

    e.preventDefault();
    setLoading("Please wait as we process your payment")


    try {
    const data=new FormData()
      data.append("amount",product.product_cost)
      data.append("phone",phone)
    

    
      const response=await axios.post("https://chikadrian.alwaysdata.net/api/mpesa_payment",data)

      setSuccess(response.message) 
      setLoading ("")    


    } catch (error) {
      setLoading("")
      setError(error.message)
    }



  }
  


  return (
    <div className='row justify-content-center'>
        <h1>Mpesa Payments-Lipa na mpesa</h1>

        <img src={image_url+product.product_photo}  className='product_img mt-3'/>
        <p className='text-success'>{product.product_name}</p>
        <p className='text-secondary'>{product.product_description}</p>
        <p className='text-warning'>{product.product_cost}</p>

        <div className='col-md-3'>

          <form action="" onSubmit={submit}>
            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>

            <input 
            type="tel" 
            className='form-control'
            placeholder='Enter phone number starting with 254'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            required
            />
           <br />

           <input type="submit" className='btn btn-secondary w-100' value='Make Payments' />



          </form>



        </div>
    </div>
  )
}

export default Mpesa