import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const user=JSON.parse(localStorage.getItem("user"))
      const navigate=useNavigate()
      


      const handleLogout=()=>{
        localStorage.removeItem("user")
        navigate("/signin")
      }
  return (
     <nav className="navbar luxury-navbar">
            <div className="nav-left">
              <Link to="/">
                <img src="/images/reduxlogo.png" alt="Company Logo" className="logo" />
              </Link>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✖" : "☰"}
            </div>

            <div className={`nav-right ${menuOpen ? "active" : ""}`}>
              <div className="close-icon" onClick={() => setMenuOpen(false)}>✖</div>

              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/buy" onClick={() => setMenuOpen(false)}>Buy</Link>
              <Link to="/rent" onClick={() => setMenuOpen(false)}>Rent</Link>
              {/* <Link to="/addproduct" onClick={() => setMenuOpen(false)}>Add</Link> */}

              


             
              {/* {user!==null&&(
              <button className='nav-link' onClick={handleLogout}>Logout</button>
              )} */}
            { user === null ? (
                <Link to="/signin" onClick={() => setMenuOpen(false)}>
                  Login
                </Link>
              ) : (
                <button
                  className='nav-link'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )
            }

              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
           </div>
        </nav>
  )
}

export default Navbar