import { Grid } from '@mui/material';
import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import UseAxios from '../../hooks/axios/UseAxios';
import ProductCard from '../card/ProductCard';

const CategoryProduct = () => {
  const {categoryName} = useParams();
  const [page,setPage] =useSearchParams();
  const [sort,setSort] =useState("price,desc")
  const {data} =UseAxios(`/products/category/${categoryName}?page=${page.get("page")}&sort=${sort}`);
 
 
  return (
    <div>
      <Grid container spacing={2} >
      {data.products?.length > 0 && data.products.map((product) => {
        return (
          <Grid item key={product._id}> 
          <ProductCard  product={product}/>
          </Grid>
        )
      })}
      </Grid>
    </div>
  )
}

export default CategoryProduct;

// const Wrapper = ({isLoading, isError, children}) => {
//   if(isLoading){
//     return <LoadingSpinner/>
//   }
// }
