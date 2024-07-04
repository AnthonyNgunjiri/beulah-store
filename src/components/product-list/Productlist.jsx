import React from "react";
import { useContext } from "react";
import { ProductContext } from "../../pages/Categories/ProductContext";

function Productlist({ id, image, name, price }) {
  const { cartItems, addCart, removeFromCart } = useContext(ProductContext);

  return (
    <div id="manee">
      <section className="item">
        <section className="fidel">
          <img src={image} alt="" className="cart-image" />

          {!cartItems[id] ? (
            <button onClick={() => addCart(id)} className="bton">add to cart</button>
          ) : (
            <section className="count">
              <button onClick={() => removeFromCart(id)}>remove</button>
              <p>{cartItems[id]}</p>
              <button onClick={() => addCart(id)}>add item</button>
            </section>
          )}
        </section>

        <span className="details">
          <p>{name}</p>
          <p>{price}</p>
        </span>
      </section>
    </div>
  );
}

export default Productlist;
