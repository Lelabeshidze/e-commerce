import { Card, CardActions, CardContent, Pagination, Rating, Typography } from '@mui/material'
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
    
    <Card className='Card'>
        <CardContent>
        <img src={product.image}   className="ProductImg"/> <br/>
        <Typography variant='caption' >{product.brand} </Typography>
          <Typography variant='h6'>{product.name} </Typography>
          <Typography variant='overline'>{product.description} </Typography>
          <Typography>${product.price}</Typography>
        </CardContent>
        <CardActions>
            <Rating value={rating} onChange={onRatingChange } precision={0.5} />
        </CardActions>
    </Card>
  
  )
}

export default ProductCard