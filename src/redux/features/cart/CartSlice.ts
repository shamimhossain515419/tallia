"use client";
import { ProductInterface } from "@/types/productInterface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getCookie = (name: string, defaultValue: any) => {
  const cookieValue = Cookies.get(name);
  return cookieValue !== undefined ? JSON.parse(cookieValue) : defaultValue;
};

const setCookie = (key: string, value: any) => {
  Cookies.set(key, JSON.stringify(value), { expires: 7 }); // Expires in 7 days
};

//

interface InitialState {
  cartItems: ProductInterface[];
  totalQuantity: number;
  totalAmount: number;
}

const items: ProductInterface[] =
  getCookie("cartItems", []) !== null ? getCookie("cartItems", [])! : [];

const totalAmount: number =
  getCookie("totalAmount", 0) !== null ? getCookie("totalAmount", 0)! : 0;

const totalQuantity: number =
  getCookie("totalQuantity", 0) !== null ? getCookie("totalQuantity", 0)! : 0;

const setItemFunc = (
  item: ProductInterface[],
  totalAmount: number,
  totalQuantity: number
) => {
  setCookie("cartItems", item);
  setCookie("totalAmount", totalAmount);
  setCookie("totalQuantity", totalQuantity);
};

const initialState: InitialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: InitialState, action: PayloadAction<ProductInterface>) {
      const newItem = action.payload;
      const id = newItem?.id;
      const extraIngredients = newItem.extraIngredients;
      const existingItem = state.cartItems.find((item) => item?.id === id);
      console.log(state);

      if (!existingItem) {
        state.cartItems.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.sale_price,
        });
        state.totalQuantity++;
      } else if (
        existingItem &&
        JSON.stringify(existingItem.extraIngredients) ===
          JSON.stringify(extraIngredients)
      ) {
        state.totalQuantity++;
        existingItem.quantity++;
      } else {
        const index = state.cartItems.findIndex(
          (s) => s.id === existingItem.id
        );
        const newValue = {
          ...existingItem,
          quantity: 1,
          totalPrice: existingItem.sale_price,
          extraIngredients: extraIngredients,
        };
        state.cartItems.splice(index, 1, newValue);
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item.sale_price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    removeItem(state: InitialState, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem && existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.sale_price;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item.sale_price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    deleteItem(state: InitialState, action: PayloadAction<string>) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total + Number(item.sale_price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const { addItem, deleteItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
