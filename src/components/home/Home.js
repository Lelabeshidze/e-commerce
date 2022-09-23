
import { Card, Grid } from "@mui/material";
import React from "react";
import { useProductContext } from "../../context/productContext";

import ProductCard from "../products/ProductCard";

const Home = () => {
  const { mainProductData } = useProductContext();

  return (
    <div className="HomePage">
      {mainProductData.products?.map((product) => (
        <ProductCard key={product._id} product={product}>
        </ProductCard>
      ))}
      
    </div>
  );
};

export default Home;
