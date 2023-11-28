import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./authApi";
import userReducer from '../features/userSlice';
import { productApi } from "./productApi";
import { orderApi } from "./orderApi";


export const store = configureStore({
  reducer: {
    userInfo: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      productApi.middleware,
      orderApi.middleware
    ]),
})



