import React, { useState } from 'react'
import axios from 'axios'

const AddProducts = () => {

  const[product_name,setProductname]=useState("")
  const[product_description,setProductdescription]=useState("")
  const[product_cost,setProductcost]=useState("")
  const[product_photo,setProductphoto]=useState("")


  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")



  const submit=async(e)=>{
    e.preventDefault()
    setLoading("just a moment as we upload your product")

  
    try {

       const data=new FormData()
      data.append("product_name",product_name)
      data.append("product_description",product_description)
      data.append("product_cost",product_cost)
      data.append("product_photo",product_photo)

      const Response=await axios.post("https://chikadrian.alwaysdata.net/api/addproducts",data)

      setLoading("")
      setSuccess(Response.data.message)

      setProductname("")
      setProductdescription("")
      setProductcost("")
      setProductphoto("")

      setSuccess("")

    } catch (error) {
      setError(error.data.message)
      
    }

    
   
     
  }

  





  return (
    <div className=' row justify-content-center' >
      <div className='col-md-6 card shadow'>
      <form action="" onSubmit={submit}>

        <p className='text-warning'>{loading}</p>
        <p className='text-success'>{success}</p>
        <p className='text-danger'>{error}</p>
        
        <h1>Upload Products</h1>


        <input type="text" placeholder='Enter Product Name' required className='form-control' onChange={(e)=>setProductname(e.target.value)} value={product_name}/>
        <br />

        <textarea name="text" id="" placeholder='Describe your Product' required className='form-control' onChange={(e)=>setProductdescription(e.target.value)} value={product_description}></textarea>
        <br />

        <input type="text" placeholder='Enter Product Cost' required className='form-control' onChange={(e)=>setProductcost(e.target.value)} value={product_cost}/>
        <br />

        <h3>Upload Product Photo</h3>

        <input type="file" className='form-control' onChange={(e)=>setProductphoto(e.target.files[0])} accept='image/*'/>
        <br />

        <button className='btn bg-info w-100 m-2' type='submit'>Upload Product</button>





      </form>
      </div>
    </div>
  )
}

export default AddProducts