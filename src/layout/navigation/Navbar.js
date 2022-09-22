import React from 'react'
import { Link } from 'react-router-dom';
import { useProductContext } from '../../context/productContext'

const Navbar = () => {
    const {mainProductData} = useProductContext();

  return (
    <div>
        {
            mainProductData.categories?.map((category) => {
                return <Link to={`/products/categories/${category.name}?page=1`} key={category._id} >  {category.name} </Link>
            })
        }
    </div>
  )
}

export default Navbar