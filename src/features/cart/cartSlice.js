import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.unitPrice * existingItem.quantity;
    },
    decreaseItemQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.pizzaId === action.payload,
      );
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.unitPrice * existingItem.quantity;
      if (existingItem.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
};

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
// reselect library is used to create memoized selectors
//  will optimize the get functions
