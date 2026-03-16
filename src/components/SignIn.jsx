import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios' 

// axios js library that enable us to get our api's
const SignIn = () => {

  // hooks(store data in the db collected by the form-input)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
   
 



    // hooks for loading,success and error
    const [loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    // hook used to redirect user to different page
    const navigate = useNavigate();

    // async enable multiple process to occur
    // async and await - enable us to retrieve data in db
    const submit=async(e)=>{
      e.preventDefault()
      setLoading("Please wait...")// displays message as data is being worked on
    
    
      try {
        // holds the email and password as key and value
        const data=new FormData()
        data.append("email",email)
        data.append("password",password)


        // calling signin api(await help us when we wait for the promise-the api-we can do other things)
        const response=await axios.post("https://chikadrian.alwaysdata.net/api/signin",data)
        

        setLoading(""); {/*After a success the loading message to disappear */}

        // check if the response has user item

        if(response.data.user){

          // If user is Found, store user details in localstorage
          localStorage.setItem("user",JSON.stringify(response.data.user));
          setSuccess(response.data.message)

          // clears the user input 
          setEmail("")
          setPassword("")


          // Redirect to /getproducts component

          setTimeout(()=>{

            navigate("/");
          },2000)
        }
        else{
          // User Not Found,Show Error message
          setError(response.data.message)

        }

      } catch (error) {  {/*incase of error in our api,the error is caught in the catch*/}
        
        setLoading("")
        setError(error.data.message);
      }
      }



  return (
    
    <div className='row justify-content-center mt-3 '>

          
     
      <div className=' card shadow col-md-6 '>

      
    <form action="" onSubmit={submit}>

      <p className='text-warning'>{loading}</p>
      <p className='text-success'>{success}</p>
      <p className='text-danger'>{error}</p> 

       <h1>Sign in</h1>

      <input type="email" placeholder='Email' required  className='form-control'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br />

      <input type="password" placeholder='Password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <br />

      <input type="submit" className='form-control bg-info text-white' value="Signin"/> 

      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>


    </form>
      </div>
       






       
    </div>
    
  )
}

export default SignIn