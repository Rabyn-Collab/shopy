import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./storage";





const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getUser(),
    carts: []
  },
  reducers: {

    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setUserToLocal(action.payload);
    },

  }
});

export const { setUserToLocal } = userSlice.actions;

export default userSlice.reducer;