
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* Column 1 - Contact Info */}
      <div className="footer-col">
        <h3>Contact Us</h3>
        <p>📍 Nairobi, Kenya</p>
        <p>📞 +254 712693365</p>
        <p>📧 info@reduxrealty.com</p>
      </div>

      {/* Column 2 - Quick Links */}
      <div className="footer-col">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/contact">Contact us</Link>
      </div>

      {/* Column 3 - Social Media */}
      <div className="footer-col">
        <h3>Follow Us</h3>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>

          <a href="https://wa.me/254700000000" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>



          
        </div>

 
      </div>


      
      

    

    </footer>

    



  );
}

export default Footer;