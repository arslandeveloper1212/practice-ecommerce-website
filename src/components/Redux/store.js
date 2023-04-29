import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Redux/slices/cartslices'
import productReducer from '../Redux/slices/productslice'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer,
  },
})