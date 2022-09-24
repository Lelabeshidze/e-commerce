
import { Card, Grid } from "@mui/material";
import React from "react";
import { useProductContext } from "../../context/productContext";
import LoadingSpinner from "../../utils/LoadingSpinner";

import ProductCard from "../products/ProductCard";

const Home = () => {
  const { mainProductData, isLoading} = useProductContext();

  return (
    <div className="HomePage">
      {mainProductData.products?.map((product) => (
        <ProductCard key={product._id} product={product}>
        </ProductCard>
        
      ))}
    {!isLoading && <LoadingSpinner/>} 
    </div>
  );
};

export default Home;
