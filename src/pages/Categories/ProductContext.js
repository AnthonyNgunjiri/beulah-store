import { createContext } from "react";
import { products } from "../../products/Itemproducts";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {

    const contextValue={
        products
    }
    
    return(
        <ProductContext.Provider  value={contextValue}>
            {props.children}
        </ProductContext.Provider>
    )
  const [cart, setcart] = usestate({});
};
export default ProductContextProvider;
