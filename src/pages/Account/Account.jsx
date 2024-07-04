import React from 'react'
import "./account.css";
import {useFormik} from 'formik'
import { useContext } from 'react';
function Account() {
  const {cartItems,products,removeFromCart}=useContext(ProductContext);
  return (
    <div className='cart'>
      <div className="cart-items"></div>
      <div className="cart-title">
        <p>items</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      
    </div>
  )
}

export default Account;
