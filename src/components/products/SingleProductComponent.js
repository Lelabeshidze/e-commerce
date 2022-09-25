import { Button, CardActions, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext';
import { useProductContext } from '../../context/productContext';
import { useUserContext } from '../../context/userContext';
import UseAxios from '../../hooks/axios/UseAxios';
import { instance } from '../../hooks/instance';
import ProductCard from './ProductCard';

const SingleProductComponent = (product) => {
    const location = useLocation();
    const {id, category} = location.state;
    const {data} = UseAxios(`/products/category/${category}/${id}`);
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

  // const onRatingChange = async (e) => {
  //   try {
  //     await instance.post(
  //       `/products/${product.id}/users/${userData.id}/rate`,
  //       {
  //         rating: +e.target.value,
  //       }
  //     );
  //     const { data } = await instance.get(`/products`);
  //     setMainProduct(data);
  //   } catch (err) {}
  // };
  return (
    <div >
      <img src={data.product?.image} className="SingleProductImg" /> 
        <div>{data.product?.name}</div> <br/>
        <div>{data.product?.description}</div><br/>
        <div>${data.product?.price}</div>
        {/* <CardActions className="FullWidth">
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
      </CardActions> */}
      
    </div>
  )
}

export default SingleProductComponent