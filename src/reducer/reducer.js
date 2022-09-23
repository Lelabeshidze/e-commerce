
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
            cartItem.product._id === productId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
      case "POPULATE_CART":
        return { cart: action.payload };
      default:
        return state;
    }
    
  };
  