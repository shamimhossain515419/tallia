import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  value: 0,
};

export const addressSlice = createSlice({
  initialState,
  name: "address-toggle",
  reducers: {
    addressToggle: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addressToggle } = addressSlice.actions;
export default addressSlice.reducer;
