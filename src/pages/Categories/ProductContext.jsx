import { createContext, useEffect, useState } from "react";
import { products } from "../../products/Itemproducts.js";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(
          (product) => product.id === parseInt(item)
        );
        if (itemInfo) {
          totalAmount += parseFloat(itemInfo.price) * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    products,
    cartItems,
    setCartItems,
    addCart,
    removeFromCart,
    getTotalAmount,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
