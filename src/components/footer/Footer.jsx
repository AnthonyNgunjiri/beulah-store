import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div>
     <section className="contact">
        <div>
        <h2>find us</h2>
        
            <li>twitter</li>
            <li>instagram</li>
            <li>linkedin</li>
            <li>facebook</li>
    
        </div>
        <div>
        <h2>Company branches</h2>
        
            <li>city hall</li>
            <li>central business district</li>
            <li>moi avenue </li>
            <li>lavington</li>
        
        </div>
        <div>
        <h2>Follow us</h2>
            <label htmlFor="text">Email</label><input type="text" />
        </div>
        <div>
        <h2>Location</h2>
        <li>address:city Hall Street</li>
        <li>Tel:+133-888-99</li>
        <li>Email:beulah@yahoo.com</li>
        </div>
        </section> 
        <p id='right'> Tonie all right reserved</p>
    </div>
  )
}

export default Footer;
