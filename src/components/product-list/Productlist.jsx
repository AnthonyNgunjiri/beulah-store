import React, { useContext } from "react";
import { ProductContext } from "../../pages/Categories/ProductContext";

function Productlist({ id, image, name, price }) {
  const { cartItems, addCart, removeFromCart } = useContext(ProductContext);

  return (
    <div id="manee">
      <section className="item">
        <section className="fidel">
          <img src={image} alt="" className="cart-image" />
          {!cartItems[id] ? (
            <button onClick={() => addCart(id)} className="bton">
              Add to Cart
            </button>
          ) : (
            <section className="count">
              <button onClick={() => removeFromCart(id)}>Remove</button>
              <p>{cartItems[id]}</p>
              <button onClick={() => addCart(id)}>Add Item</button>
            </section>
          )}
        </section>

        <span className="details">
          <p>{name}</p>
          <p>${price} USD</p>
        </span>
      </section>
    </div>
  );
}

export default Productlist;
