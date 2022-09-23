import {
  Button,
  Card,
  CardActions,
  CardContent,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import { instance } from "../../hooks/instance";

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(product.averageRating);
  const { userData } = useUserContext();
  const { addToCart, removeFromCart, cart } = useCartContext();
  const isProductInCart = cart?.find(
    (cartItem) => cartItem.product?._id === product._id
  );

  const onRatingChange = async (e) => {
    try {
      await instance.post(
        `/products/${product._id}/users/${userData._id}/rate`,
        {
          rating: +e.target.value,
        }
      );
    } catch {}
  };
  return (
    <Card className="Card">
      <CardContent>
        <Link
          to={`/products/categories/${product.category}/${product.name}`}
          state={{ id: product._id, category: product.category }}
        >
          <img src={product.image} className="ProductImg" /> <br />
        </Link>
        <Typography variant="caption">{product.brand} </Typography>
        <Typography variant="h6">{product.name} </Typography>
        <Typography variant="overline">{product.description} </Typography>
        <Typography>${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Rating value={rating} onChange={onRatingChange} precision={0.5} />
        {isProductInCart ? (
          <>
            <Button onClick={() => removeFromCart(product._id)}>-</Button>
            {isProductInCart.quantity}
            <Button onClick={() => 
             addToCart(product)
            }>+</Button>
          </>
        ) : (
          <Button onClick={() => addToCart(product)}> Add to cart</Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
