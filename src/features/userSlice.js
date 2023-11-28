import { createSlice } from "@reduxjs/toolkit";
import { clearAllData, getCarts, getUser, setCarts, setUser } from "./storage";





const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getUser(),
    carts: getCarts()
  },
  reducers: {

    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },
    addToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart.product === action.payload.product);
      if (isExist) {
        state.carts = state.carts.map((cart) => {
          return cart.product === action.payload.product ? action.payload : cart;
        });

        setCarts(state.carts);
      } else {
        state.carts.push(action.payload);
        setCarts(state.carts);
      }

    },


    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      setCarts(state.carts);
    },

    clearCart: (state, action) => {
      state.carts = [];
      setCarts(state.carts);

    },

    clearAll: (state, action) => {
      state.user = null;
      state.carts = [];
      clearAllData();

    }

  }
});

export const { setUserToLocal, clearAll, addToCart,
  clearCart,
  removeFromCart } = userSlice.actions;

export default userSlice.reducer;