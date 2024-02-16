// Action type constant for adding an item to the cart
export const ADD_TO_CART = "ADD_TO_CART";

// Action creator function to create an action for adding an item to the cart
export const addToCart = (productId, price) => ({
  // Specify the action type
  type: ADD_TO_CART,
  // Include payload with product ID and price
  payload: {
    productId,
    price,
  },
});

