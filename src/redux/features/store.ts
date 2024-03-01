import { configureStore } from "@reduxjs/toolkit";
import sidebarToggleSlice from "./sidebarToggle/sidebarToggleSlice";
import { apiSlice } from "./api/apiSlice";
import CartSlice from "./cart/CartSlice";

export const store = configureStore({
  reducer: {
    sidebarToggle: sidebarToggleSlice,
    Cart: CartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
