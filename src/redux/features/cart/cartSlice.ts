/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { iCart } from '@/types/cartInterface';
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const initialState: iCart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find(
        (product) => product._id == action.payload._id
      );
      if (isExist) {
        isExist.quantity = isExist.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const isExist = state.products.find(
        (product) => product._id == action.payload._id
      );
      if (isExist && isExist.quantity! > 1) {
        isExist.quantity = isExist.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});
export const { addToCart, removeFromCart, removeOneFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
