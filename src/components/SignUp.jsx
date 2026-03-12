import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  // initialize your hooks(hooks is used to store data in react)
  const[username,setUsername]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()
  const[password,setPassword]=useState()

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

    data.append("username",username)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)


    // call our api

    const response=await axios.post("https://chikadrian.alwaysdata.net/api/signup",data)


    setLoading("")
    setSuccess(response.data.message)

   } catch (error) {

      setLoading("")
      setError(error.message)


      
    }
    

  }
  return (
    <div className='row justify-content-center mt-3'>

      <div className='card shadow col-md-6'>
        <h1>Sign Up</h1>
        <form action="" onSubmit={submit}>

      <p className='text-warning'>{loading}</p>
      <p className='text-success'>{success}</p>
      <p className='text-danger'>{error}</p>
    
        {/* {username} */}
        <input type="text" placeholder='Enter your username' className='form-control' required value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br />

        {/* {email} */}
        <input type="email" placeholder='Enter your email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />


        {/* {phone} */}
        <input type="tel" placeholder='Enter your phone' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <br />


        {/* {password} */}
        <input type="password" placeholder='Enter your password'className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />

        <input type="submit" value="SignUp" className='w-100 form-control bg-info text-white b-1 ' required/>
        <br />
      {/* link is used to navigate between pages */}
        <p>Already have an account? <Link to="/signin">Sign In</Link></p>


      </form>
      </div>


    </div>
  )
}

export default SignUp