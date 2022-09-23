import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { getUser } from "../../utils/util";
const CartComponent = () => {
  const { cart, saveCart, removeFromCart, addToCart } = useCartContext();
  const user = getUser();

  return (
    <div>
      {cart?.length > 0
        ? cart.map((cartItem) => {
            return (
              <div key={cartItem.product._id} className="CartItem">
                <Link
                  to={`/products/categories/${cartItem.product.category}/${cartItem.product.name}`}
                  state={{
                    id: cartItem.product._id,
                    category: cartItem.product.category,
                  }}
                >
                  <img src={cartItem.product.image} className="ProductImg" />
                </Link>

                <div>
                  <h4> Name-{cartItem.product.name}</h4>
                  <h4> Price-${cartItem.product.price}</h4>
                  <h4> Quantity-{cartItem.quantity}</h4>
                </div>
                    <div>
                <Button onClick={() => removeFromCart(cartItem.product._id)}>
                  Remove Item
                </Button>
                </div>
              </div>
            );
          })
        : "cart is empty"}
      {user && <Button onClick={() => saveCart(user._id)}>Save Cart</Button>}
    </div>
  );
};

export default CartComponent;
