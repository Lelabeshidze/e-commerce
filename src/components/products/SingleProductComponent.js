import { Button, CardActions, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useProductContext } from "../../context/productContext";
import { useUserContext } from "../../context/userContext";
import UseAxios from "../../hooks/axios/UseAxios";
import { instance } from "../../hooks/instance";
import ProductCard from "./ProductCard";

const SingleProductComponent = ({ product }) => {
  const location = useLocation();
  const { id, category } = location.state;
  const { data } = UseAxios(`/products/category/${category}/${id}`);

  const { addToCart, removeFromCart, cart } = useCartContext();

  
 

  return (
    <div>
      <img src={data.product?.image} className="SingleProductImg" />
      <div>{data.product?.name}</div> <br />
      <div>{data.product?.description}</div>
      <br />
      <div>${data.product?.price}</div>
      <CardActions className="FullWidth">
    
          <Button onClick={() => addToCart(data.product)}> Add to cart</Button>
      
      </CardActions>
    </div>
  );
};

export default SingleProductComponent;
