import { Button } from '@mui/material';
import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { getUser } from '../../utils/util';
const CartComponent = () => {
  const { cart, saveCart } =useCartContext();
  const user = getUser();
  return (
    <div>
      {
        cart?.length > 0 ? 
          cart.map((cartItem) => {
            return (
              <div key={cartItem.product._id}>
              <h3> {cartItem.product.name}</h3>
              <h3> {cartItem.product.price}</h3>
              <h3> {cartItem.quantity}</h3>
              </div>
            )
          })
         : "cart is empty" 
      }
      {user && <Button onClick={() => saveCart(user._id)} disabled={!cart.length}>Save Cart</Button>}
    </div>
  )
}

export default CartComponent