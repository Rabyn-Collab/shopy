import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import userReducer from '../features/userSlice';
import { productApi } from "./productApi";


export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      productApi.middleware
    ]),
})



