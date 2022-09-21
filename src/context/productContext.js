import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAxios from "../hooks/axios/UseAxios";
import { instance } from "../hooks/instance";
import { useForm } from "../hooks/useForm";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
  const {data: mainProductData } = UseAxios("/products");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductUpdating, setProductUpdating] = useState(false);
  const { setErrors } = useForm();
  const navigate = useNavigate();
  const addProduct = async (product) => {
    const path = isProductUpdating
      ? `/products/${selectedProduct._id}`
      : "/products";
      let method = isProductUpdating ? "put" : "post";
      try {
        const response = await instance[method](path, {...product});
        navigate("/");
      } catch(err) {
        setErrors("Failure")
      } finally{
        setSelectedProduct(null)
      }
  };
  return (
    <ProductContext.Provider value={{addProduct,mainProductData}}> {children}</ProductContext.Provider>
  );
};
