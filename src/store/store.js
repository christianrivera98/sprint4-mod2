import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authslice'
import { foodAppSlice } from './foodApp/foodAppSlice'



export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    foodApp: foodAppSlice.reducer,
  },
})

