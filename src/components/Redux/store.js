import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from '../Redux/slices/cartslices'
import productReducer from '../Redux/slices/productslice'
export const store = configureStore({
  reducer: {
    cart:cartSliceReducer,
    product:productReducer,
  },
})