import { createItemFromDescriptor } from "@babel/core/lib/config/item";
import {
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../../components/search/Search";
import { useCartContext } from "../../context/cartContext";

const SearchPage = () => {
 
  const searchResult = JSON.parse(localStorage.getItem("data"));
 
  const { addToCart } = useCartContext();



  return (
    <div className="SearchPage">
      {searchResult.products?.map((product) => {
        return (
          <Card key={product._id}  sx={{ maxWidth: 345 }}>
            <CardContent>
              <Link
                to={`/products/categories/${product.category}/${product.name}`}
                state={{ id: product._id, category: product.category }}
              >
                <img src={product.image} className="SearchImg" /> <br />
              </Link>
              <Typography variant="caption">{product.brand}</Typography>
              <Typography variant="h6">{product.name} </Typography>
              <Typography variant="overline">{product.description} </Typography>
              <Typography>${product.price}</Typography>
            </CardContent>
            <CardActions className="FullWidth">
              <Button onClick={() => addToCart(product)}> Add to cart</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default SearchPage;
