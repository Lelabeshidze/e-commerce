import { Alert } from "@mui/material";
import { createContext, useReducer, useContext, useEffect } from "react";
import { instance } from "../hooks/instance";
import { getUser } from "../utils/util";
const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);
 


const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const productId = newItem?._id;
      const item = state.cart?.find((item) => item.product?._id === productId);
      let newCart;
      if (item) {
        newCart = state.cart.map((cartItem) => {
          if (cartItem.product._id === productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return cartItem;
        });
      } else {
        newCart = [...state.cart, { product: { ...newItem }, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    case "REMOVE_FROM-CART":
      const selectedProductId = action.payload;
      const foundItem = state.cart.find(
        (item) => item.product._id === selectedProductId
      );
      let updatedCart;
      if (foundItem.quantity === 1) {
        updatedCart = state.cart.filter(
          (cartItem) => cartItem.product._id !== selectedProductId
        );
      } else {
        updatedCart = state.cart.map((cartItem) =>
          cartItem.product._id === selectedProductId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart ));
      return { cart: updatedCart };
    case "POPULATE_CART":
      return { cart: action.payload };
    default:
      return state;
  }
  
};


export const CartContextProvider = ({ children }) => {

  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM-CART", payload: id });
  };


  useEffect(() => {
    const user = getUser();
    if (user) {
      const getUserCart = async () => {
        const { data } = await instance.get(`/users/${user._id}/cart`);
        dispatch({ type: "POPULATE_CART" , payload: data.cart});
      };
      getUserCart();
    } else {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      dispatch ({ type: "POPULATE_CART", payload: cart});
    }
  },[])
  const saveCart = async (userId) => {
    try{
      await instance.put(`/users/${userId}/cart`, {products: cartState.cart});
      localStorage.removeItem("cart")
      alert("Cart saved successfully")
    } catch(err){
      alert("Something went wrong")
    }
  }
  return (
    <cartContext.Provider
      value={{ addToCart, removeFromCart, cart: cartState.cart, saveCart}}
    >
      {children}
    </cartContext.Provider>
  );
};

