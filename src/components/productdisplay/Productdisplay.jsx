import React, { useContext } from 'react'
 import "./display.css";
import { ProductContext } from '../../pages/Categories/ProductContext';
import Productlist from '../product-list/Productlist';

function Productdisplay() {
    const {products}=useContext(ProductContext) ;
  return (
    <section className="main">
      
 <div className='cart-items'>
     
    {products.map((items,index)=>{
      return<Productlist key={index}id={items._id} image={items.image} name={items.name}price={items.price} />
    })}

      
    </div>
    </section>
   
  )
}

export default Productdisplay;
