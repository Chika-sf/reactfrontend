import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Rent = () => {

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  const image_url = "https://chikadrian1.alwaysdata.net/static/images/"

  const fetchproducts = async () => {
    setLoading("Loading rental houses...")

    try {
      const response = await axios.get("https://chikadrian1.alwaysdata.net/api/getproductdetails")

      const rentProducts = response.data.filter(
        (product) => product.product_type === "rent"
      )

      setProducts(rentProducts)
      setLoading("")

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchproducts()
  }, [])

  return (
    <div className='row'>
      <h1>Rental Houses</h1>

      <p className='text-warning'>{loading}</p>
      <p className='text-danger'>{error}</p>

      {products.length === 0 && !loading && (
        <p>No rental products available</p>
      )}

      {products.map((product) => (
        <div className='col-md-3' key={product.product_id}>
          <div className='card shadow mt-4'>

            <img
              src={image_url + product.product_photo}
              alt={product.product_name}
              className='product_img mt-3'
            />

            <div className='card-body'>
              <h5 className='text-success'>{product.product_name}</h5>
              <p className='text-secondary'>{product.product_description}</p>
              <p className='text-warning'> Ksh {Number(product.product_cost).toLocaleString()}</p>

              <button
                className='btn btn-primary w-100'
                onClick={() => navigate("/mpesa", { state: { product } })}
              >
                Rent Now
              </button>

            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Rent