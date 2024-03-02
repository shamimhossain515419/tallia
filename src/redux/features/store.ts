import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggle/sidebarToggleSlice";
import { apiSlice } from "./api/apiSlice";
import CartSlice from "./cart/CartSlice";
import authSlice from "./auth/authSlice";
import addressSlice from "./address/addressSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    Cart: CartSlice,
    address: addressSlice,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
