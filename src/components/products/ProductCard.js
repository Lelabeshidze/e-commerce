import {
  Button,
  Card,
  CardActions,
  CardContent,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useProductContext } from "../../context/productContext";
import { useUserContext } from "../../context/userContext";
import { instance } from "../../hooks/instance";

const ProductCard = ({ product }) => {
  const [rating, setRating] = useState(product.averageRating);

  const { userData } = useUserContext();
  const { addToCart, removeFromCart, cart } = useCartContext();
  const {setMainProduct} = useProductContext();
  const isProductInCart = cart?.find(
    (cartItem) => cartItem.product?._id === product._id
  );

  useEffect(() => {
    setRating(product.averageRating);
  },[product]);

  const onRatingChange = async (e) => {
    try {
      await instance.post(
        `/products/${product._id}/users/${userData._id}/rate`,
        {
          rating: +e.target.value,
        }
      );
      const { data } = await instance.get(`/products`);
      setMainProduct(data);
    } catch {}
  };
  return (
    <Card className="Card" sx={{ maxWidth: 345 }}>
      <CardContent>
        <Link
          to={`/products/categories/${product.category}/${product.name}`}
          state={{ id: product._id, category: product.category }}
        >
          <img src={product.image} className="ProductImg" /> <br />
        </Link>
        <Typography variant="caption">{product.brand}</Typography>
        <Typography variant="h6">{product.name} </Typography>
        <Typography variant="overline">{product.description} </Typography>
        <Typography>${product.price}</Typography>
      </CardContent>
      <CardActions className="FullWidth">
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
