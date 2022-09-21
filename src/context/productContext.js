import { createContext, useContext } from "react";

const ProductContext = createContext();

export const useProdactContext = () => useContext(ProductContext);

export const ProductContextProvider = ({children}) => {
return (
    <ProductContext.Provider value = {{}} > {children}</ProductContext.Provider>
)
}

