import { Card, CardActions, CardContent, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useUserContext } from '../../context/userContext';
import { instance } from '../../hooks/instance';

const ProductCard = ({product}) => {
    const [rating,setRating] = useState(product.averageRating);
    const {userData} = useUserContext();

    const onRatingChange = async (e) =>  {
        
        try {
            await instance.post(`/products/${product._id}/users/${userData._id}/rate`,
            {
                rating: +e.target.value,
            }
            );
        }catch{ }
    }
  return (
    <Card>
        <CardContent>
        <Typography variant='caption' >{product.brand} </Typography>
          <Typography variant='h6'>{product.name} </Typography>
          <Typography variant='overline'>{product.description} </Typography>
          <Typography>${product.price}</Typography>
          <Typography>{product.image} </Typography>
        </CardContent>
        <CardActions>
            <Rating value={rating} onChange={onRatingChange }/>
        </CardActions>
    </Card>
  )
}

export default ProductCard