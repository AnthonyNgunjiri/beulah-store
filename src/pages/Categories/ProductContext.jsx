import { createContext, useEffect, useState } from "react";
import { products } from "../../products/Itemproducts.js";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const addCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]:1}));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]+1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]-1}));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const contextValue = {
    products,
    cartItems,
    setCartItems,
    addCart,
    removeFromCart,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
