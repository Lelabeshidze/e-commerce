import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/productContext'
import LoadingSpinner from '../../utils/LoadingSpinner';

const Navbar = () => {
    const {mainProductData} = useProductContext();

  return (
    <div className='FlexCategory'>
        {
            mainProductData.categories?.map((category) => {
                return <Link to={`/products/categories/${category.name}?page=1`} key={category._id} ><Button>  {category.name} </Button>   </Link>
            })
        }
    </div>
  )
}

export default Navbar