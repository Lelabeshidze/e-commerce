import { Button } from "@mui/material";
import React from "react";
import { useCartContext } from "../../context/cartContext";
import { getUser } from "../../utils/util";
const CartComponent = () => {
  const { cart, saveCart } = useCartContext();
  const user = getUser();
  return (
    <div>
      {cart?.length > 0
        ? cart.map((cartItem) => {
            return (
              <div key={cartItem.product._id} className="CartItem">
               
                  <img
                    src={cartItem.product?.image}
                    className="SingleProductImg"
                  />
              
                <div>
                  <h4> Name-{cartItem.product.name}</h4>
                  <h4> Price-${cartItem.product.price}</h4>
                  <h4> Quantity-{cartItem.quantity}</h4>
                </div>
              </div>
            );
          })
        : "cart is empty"}
      {user && (
        <Button onClick={() => saveCart(user._id)} disabled={!cart.length}>
          Save Cart
        </Button>
      )}
    </div>
  );
};

export default CartComponent;
