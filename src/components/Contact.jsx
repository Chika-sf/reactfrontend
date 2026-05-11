import React from 'react'
 import{useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Contact = () => {
  

 

  // initialize your hooks(hooks is used to store data in react)
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[message,setMessage]=useState()
  

  // initialize other hooks for loading, success and error
  const[loading,setLoading]=useState()
  const[success,setSuccess]=useState()
  const[error,setError]=useState()

  // function that will send our data to the database

  const submit=async(e)=>{

    e.preventDefault()
    setLoading("Please wait...")


    // sending data to the database

    try {
      const data=new FormData()

    data.append("name",name)
    data.append("email",email)
    data.append("message",message)
   


    // call our api

    const response=await axios.post("https://chikadrian1.alwaysdata.net/api/contact",data)


    setLoading("")
    setSuccess(response.data.message)

    setName("")
    setEmail("")
    setMessage("")
   

   } catch (error) {

      setLoading("")
      setError(error.message)


      
    }
    

  }
  return (
  <div className="container py-5">
    <div className="row justify-content-center">
      
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-lg border-0 p-5 rounded-4">

          <h2 className="text-center mb-4 text-primary">
            Contact Us
          </h2>

          <p className="text-center text-muted mb-4">
            You can reach us by filling this form
          </p>

          <form onSubmit={submit}>

            <p className='text-warning text-center'>{loading}</p>
            <p className='text-success text-center'>{success}</p>
            <p className='text-danger text-center'>{error}</p>

            {/* Name */}
            <div className="mb-4">
              <label className="form-label fw-bold">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your Name"
                className="form-control form-control-lg"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="form-label fw-bold">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="form-control form-control-lg"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="form-label fw-bold">
                Message
              </label>

              <textarea
                placeholder="Message us"
                className="form-control form-control-lg"
                rows="6"
                required
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-info text-white w-100 py-3 fw-bold"
            >
              Submit Message
            </button>

          </form>
        </div>
      </div>

    </div>
  </div>
)

}

export default Contact