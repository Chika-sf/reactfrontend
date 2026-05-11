import React from 'react'
import { useState,useEffect, } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover:true
  };

const GetProducts = () => {



  // pagination

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;


  // Initialize our hooks

  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])

  // adding new states for filter
  const [selectedType, setSelectedType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // initialize the navigate hook
  const navigate=useNavigate()

  const image_url="https://chikadrian1.alwaysdata.net/static/images/"

  // create a function to fetch data from the api

  

  const fetchproducts=async()=>{

    setLoading("Please wait as we retrieve your products")

    try {
    // call our api
    const response=await axios.get("https://chikadrian1.alwaysdata.net/api/getproductdetails")

    console.log("the response is",response );
    
     setProducts(response.data)
     


    setLoading("")

  
    } catch (error) {
    setLoading("")
    setError(error.message)
  
    }
  }

  // fetch
  

  // end of function where we call useEffect - its allow you to retrieve data from api
  useEffect(()=>{
    fetchproducts()
  },[])

    const handleSearch = () => {
    setSearchTerm(searchInput); // Apply the filter only when button is clicked
    };


    // paginatio logic
    const lastIndex = currentPage * productsPerPage;

   const firstIndex = lastIndex - productsPerPage;

   const currentProducts = products.slice(firstIndex, lastIndex);

  return (
    <div className='row'>




            {/* CAROUSEL */}
      <Slider {...settings} className="carousel-container">

      <div className="carousel-slide">
              <img
                src="/images/slide1.jpg"
                alt="House 1"
                className="carousel-img"
              />
        <div className="carousel-overlay">

          <div className="carousel-text">

            <h1>LUXURY LIVING IN NAIROBI</h1>

            <p>
              KAREN | PRESIDENTIAL HOMES | FROM KSHS 150 M
            </p>

        
          </div>

        </div>

      </div>

            <div className="carousel-slide">

        <img
          src="/images/slide2.jpg"
          alt="House 1"
          className="carousel-img"
        />

        <div className="carousel-overlay">

          <div className="carousel-text">

            <h1>SAPPHIRE</h1>

            <p>
              SPRING VALLEY | FULLY FURNISHED HOME| FROM KSHS 80M
            </p>

          

          </div>

        </div>

      </div>
      <div className="carousel-slide">

            <img
              src="/images/slide3.jpg"
              alt="House 1"
              className="carousel-img"
            />

        <div className="carousel-overlay">

        <div className="carousel-text">

        <h1>URBAN NEST</h1>

        <p>
          VALLEY ROAD | LUXURY VILLAS | FROM KSHS. 95M
 
        </p>

        

    </div>

  </div>

</div>
</Slider>


{/* filter */}
{/* FLOATING FILTER */}
<div className="floating-filter-container">

  <div className="row g-3 align-items-center">

    <div className="col-md-3">
      <input
        type="text"
        className="form-control luxury-input"
        placeholder="Search property..."
        value={searchInput}                   // <-- use searchInput
        onChange={(e) => setSearchInput(e.target.value)} // <-- update input
      />
    </div>
    <div className="col-md-3">
      <select
        className="form-select luxury-input"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="All">All Properties</option>
        <option value="Buy">Buy</option>
        <option value="Rent">Rent</option>
      </select>
    </div>
    

    <div className="col-md-3">
      <select
          className="form-select luxury-input"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
            >
          <option value="All">All Locations</option>
          <option value="Nairobi">Nairobi</option>
          <option value="Westlands">Westlands</option>
          <option value="Kilimani">Kilimani</option>
      </select>
    </div>

    <div className="col-md-3">
      <button className="btn luxury-search-btn w-100" onClick={handleSearch}>
       Search
      </button>
    </div>



    

  </div>

</div>



      <h1>Available products</h1>
      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {/* calling .map to iterate through each item */}


  {products
  .filter((product) => {
    const matchesType =
      selectedType === "All" ||
      product.product_type?.toLowerCase() === selectedType.toLowerCase();

    const matchesSearch =
      product.product_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesLocation =
      selectedLocation === "All" ||
      product.product_description?.toLowerCase().includes(selectedLocation.toLowerCase()) ||
      product.product_name?.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesType && matchesSearch && matchesLocation;
  })
  .slice(firstIndex, lastIndex)
  .map((product) => (


      

      <div className='col-md-3 justify-content-center'>

        <div className='card shadow mt-4'>

          <img src={image_url+product.product_photo} alt={product.product_name} className='product_img mt-3'/>
          <div className='card-body'>
            <h5 className='text-success'>{product.product_name}</h5>
            <p className='text-secondary'>{product.product_description}</p>
            <p className='text-warning fw-bold'>
              Ksh {Number(product.product_cost).toLocaleString()}
            </p>
            <input type="button" className='btn btn-secondary w-100' value="Make payments"
              onClick={()=>navigate("/mpesa",{state:{product}})}
            />

          </div>


        </div>


      </div>

      ))}

      <div className="text-center mt-4 mb-4">

    <button
      className="btn btn-dark me-3"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
    >
      Previous
    </button>

    <button
      className="btn btn-dark"
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>

  </div>
      
        
    </div>
  )
}

export default GetProducts