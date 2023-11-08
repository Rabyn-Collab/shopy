import { createSlice } from "@reduxjs/toolkit";
import { clearAllData, getUser, setUser } from "./storage";





const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: getUser(),
    carts: []
  },
  reducers: {

    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setUser(state.user);
    },

    clearAll: (state, action) => {
      state.user = null;
      state.carts = [];
      clearAllData();

    }

  }
});

export const { setUserToLocal, clearAll } = userSlice.actions;

export default userSlice.reducer;