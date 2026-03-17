import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const GetProducts = () => {

  // Initialize our hooks

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])

  const image_url="https://chikadrian.alwaysdata.net/static/images/"

  // create a function to fetch data from the api

  

  const fetchproducts=async()=>{

    setLoading("Please wait as we retrieve your products")

    try {
    // call our api
    const response=await axios.get("https://chikadrian.alwaysdata.net/api/getproductdetails")

    console.log("the response is",response );
    
    setProducts(response.data)
    setLoading("")

  
    } catch (error) {
    setLoading("")
    setError(error.message)
  
    }
  }

  // end of function where we call useEffect
  useEffect(()=>{
    fetchproducts()
  },[])

  return (
    <div className='row'>

      <h1>Available products</h1>
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* calling .map to iterate through aech item */}


      {products.map((product)=>(



      

      <div className='col-md-3 justify-content-center'>

        <div className='card shadow mt-4'>

          <img src={image_url+product.product_photo} alt="nike" className='product_img mt-3'/>
          <div className='card-body'>
            <h5 className='text-success'>{product.product_name}</h5>
            <p className='text-secondary'>{product.product_description}</p>
            <p className='text-warning'>{product.product_cost}</p>
            <input type="button" className='btn btn-secondary w-100' value="Make payments"/>

          </div>


        </div>


      </div>

      ))}
      
        
    </div>
  )
}

export default GetProducts