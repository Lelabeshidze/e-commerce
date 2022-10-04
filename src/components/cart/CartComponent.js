import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { getUser } from "../../utils/util";

const CartComponent = () => {
  const { cart, saveCart, removeFromCart, addToCart } = useCartContext();
  const user = getUser();
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
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
                  <FormControl class="CartProduct">
                    <TextField
                      value={cartItem.product.name}
                      color="success"
                      InputLabelProps={{ shrink: true }}
                      label="Name"
                    />
                    <TextField
                      value={cartItem.product.price}
                      color="success"
                      InputLabelProps={{ shrink: true }}
                      label="Price $"
                    />
                    <TextField
                      value={cartItem.quantity}
                      color="success"
                      InputLabelProps={{
                        shrink: true
                      }}
                      label="Quantity"
                    />
                  </FormControl>

                  <Button
                    onClick={() => removeFromCart(cartItem.product._id)}
                    color="warning"
                    style={{ marginTop: "30px" }}
                  >
                    Remove Item
                  </Button>
                </div>
              </div>
            );
          })
        : "cart is empty"}

      {user && (
        <>
          <Button
            onClick={() => {
              saveCart(user._id);
              setOpen(true);
            }}
            variant="outlined"
            color="success"
          >
            Save Cart
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Cart Saved successfully!
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
};

export default CartComponent;
