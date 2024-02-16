// Import the ADD_TO_CART action type constant from the Action file
import { ADD_TO_CART } from "./Action";

// Initial state of the Redux store
const initialState = {
  cart: [], // Initially, the cart is an empty array
};

// Reducer function to handle state updates based on dispatched actions
const rootReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for handling the ADD_TO_CART action
    case ADD_TO_CART:
      return {
        // Spread the current state to avoid mutation
        ...state,
        // Update the cart array with a new item based on the action payload
        cart: [...state.cart, { productId: action.payload.productId, price: action.payload.price }],
      };
    // Default case for handling unknown or unhandled actions
    default:
      return state;
  }
};

export default rootReducer;
