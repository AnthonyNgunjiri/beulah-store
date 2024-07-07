import React, { useState } from "react";
import "./cart.css";
import Productdisplay from "../../components/productdisplay/Productdisplay";
import { useContext } from "react";
import { ProductContext } from "../Categories/ProductContext";

function Cart() {
  const { cartItems, products, removeFromCart, getTotalAmount } =
    useContext(ProductContext);

  const [paymentMode, setPaymentMode] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handlePayment = async () => {
    const totalAmount = getTotalAmount() + 2;
    const items = products
      .filter((item) => cartItems[item.id] > 0)
      .map((item) => ({
        name: item.name,
        quantity: cartItems[item.id],
        total: item.price * cartItems[item.id],
      }));

    const response = await fetch("http://localhost:5000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentMode,
        totalAmount,
        items,
      }),
    });

    const data = await response.json();
    setOrderDetails(data);
    setShowMessage(true);
  };

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
      {products.map((item) => {
        if (cartItems[item.id] > 0) {
          return (
            <div className="tips" key={item.id}>
              <div className="cart-title" id="itemie">
                <img src={item.image} alt="" className="cart-imo" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>{item.price * cartItems[item.id]}</p>
                <p onClick={() => removeFromCart(item.id)} className="del">
                  Remove
                </p>
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
      <div>
        <h3>Choose Payment Method</h3>
        <select onChange={(e) => setPaymentMode(e.target.value)} value={paymentMode}>
          <option value="" disabled>Select Payment Method</option>
          <option value="mpesa">M-Pesa</option>
          <option value="paypal">PayPal</option>
        </select>
        <button className="pay" onClick={handlePayment}>PROCEED TO PAYMENT</button>
      </div>
      {showMessage && orderDetails && (
        <div className="payment-message">
          <h2>Thank you for your purchase!</h2>
          <p>You have successfully purchased the following items:</p>
          <ul>
            {orderDetails.items.map((item, index) => (
              <li key={index}>{item.name} - Quantity: {item.quantity} - Total: ${item.total}</li>
            ))}
          </ul>
          <p>Total Amount Paid: ${orderDetails.totalAmount}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
