import React from "react";
import "./cart.css";
import Productdisplay from "../../components/productdisplay/Productdisplay";
import { useContext } from "react";
import { ProductContext } from "../Categories/ProductContext";

function Cart() {
  const { cartItems, products, removeFromCart, getTotalAmount } =
    useContext(ProductContext);
  return (
    <div className="cart">
      <div className="cart-items"></div>
      <div className="cart-title">
        <p>items</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <br />
      <hr />
      {products.map((item, index) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="tips">
              <div className="cart-title" id="itemie">
                <img src={item.image} alt="" className="cart-imo" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>{item.price * cartItems[item.id]}</p>
                <p onClick={() => removeFromCart(item.id)}>x</p>
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="cart-bottom"></div>
      <div className="card-totals">
        <h2>Cart Totals</h2>
      </div>
      <div>
        <div className="card-total-details">
          <p>subtotals</p>
          <p>${getTotalAmount()}</p>
        </div>
        <hr />
        <div className="card-total-details">
          <p>Delivery Fee</p>
          <p>${2}</p>
        </div>
        <hr />
        <div className="card-total-details">
          <b>Total</b>
          <b>${getTotalAmount() + 2}</b>
        </div>
      </div>
      <button className="pay">PROCEED TO PAYMENT</button>
    </div>
  );
}

export default Cart;
