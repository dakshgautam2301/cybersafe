import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  threats: [],
};

const threatSlice = createSlice({
  name: "threats",
  initialState,
  reducers: {
    setThreats: (state, action) => {
      state.threats = action.payload;
    },
  },
});

export const { setThreats } = threatSlice.actions;
export default threatSlice.reducer;