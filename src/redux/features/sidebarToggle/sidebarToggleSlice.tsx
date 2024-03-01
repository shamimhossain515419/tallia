import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: false,
};

export const sidebarToggleSlice = createSlice({
  initialState,
  name: 'sidebar-toggle',
  reducers: {
    toggleSideCart: state => {
      state.value = !state.value;
    },
  },
});

export const { toggleSideCart } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;
