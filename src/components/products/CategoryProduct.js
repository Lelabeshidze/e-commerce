import { Grid, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import UseAxios from '../../hooks/axios/UseAxios';
import PaginationComponent from '../../utils/Pagination';
import ProductCard from './ProductCard';

const CategoryProduct = () => {
  const {categoryName} = useParams();
  const [page,setPage] =useSearchParams();
  const [sort,setSort] =useState("price,desc")
  const {data} =UseAxios(`/products/category/${categoryName}?page=${page.get("page")}&sort=${sort}`);
 
 
  return (
    <div>
      <Select value={sort} onChange={(e) => {
        setSort(e.target.value);
        setPage({page: 1});
      }}>
        <MenuItem value={"price,desc"} >Price:High to low</MenuItem>
        <MenuItem value={"price,asc"}>Price:Low to high</MenuItem>
        <MenuItem value={"name,asc"}>Name: A to Z</MenuItem>
        <MenuItem value={"name,desc"}>Name: Z to A</MenuItem>
      </Select>
      <Grid container spacing={2} >
      {data.products?.length > 0 && data.products.map((product) => {
        return (
          <Grid item key={product._id}> 
          <ProductCard  product={product}/>
          </Grid>
        )
      })}
      </Grid>
      <PaginationComponent page={page} setPage={setPage} totalPages={data.totalPages}/>
    </div>
  )
}

export default CategoryProduct;


