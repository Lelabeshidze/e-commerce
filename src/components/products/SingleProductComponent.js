import React from 'react'
import { useLocation } from 'react-router-dom'
import UseAxios from '../../hooks/axios/UseAxios';

const SingleProductComponent = () => {
    const location = useLocation();
    const {id, category} = location.state;
    const {data} = UseAxios(`/products/category/${category}/${id}`);
  return (
    <div>
        {data.product?.name}
    </div>
  )
}

export default SingleProductComponent