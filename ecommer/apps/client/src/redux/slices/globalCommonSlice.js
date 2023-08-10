import { createSlice } from "@reduxjs/toolkit";

const globalCommonSlice = createSlice({
  name: "globalCommon",
  initialState: {
    token: "",
    currentAuthenticatedUser: {},
    currentPositionUser: [],
    loading: false
  },
  reducers: {
    addCredential: (state, action) => {
      const { token, currentAuthenticatedUser } = action.payload;
      state.token = token;
      state.currentAuthenticatedUser = currentAuthenticatedUser;
    },
    addPositionUser: (state, action) => {
      const { currentPositionUser } = action.payload;
      state.currentPositionUser = currentPositionUser;
    },
    setLoading: (state, action) => {
     
      state.loading = action.payload;
    },
  },
});

export const { addPositionUser, addCredential, setLoading } = globalCommonSlice.actions;

export default globalCommonSlice.reducer;
