import { ProductInterface } from "./productInterface";

export interface CartInitialStateInterface {
  cartItems: ProductInterface[];
  totalQuantity: number;
  totalAmount: number;
}
