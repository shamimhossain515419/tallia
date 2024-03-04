import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    orderProduct: builder.mutation({
      query: (data) => ({
        url: "order/place-order",
        method: "POST",
        body: data,
      }),
    }),
    getordersProduct: builder.query({
      query: () => `order/get-orders/${process.env.GROUP_ID}`,
    }),
    getOrderDetail: builder.query({
      query: (id) => `order/get-order-details/${id}`,
      keepUnusedDataFor: 100,
    }),
  }),
});

export const {
  useOrderProductMutation,
  useGetOrderDetailQuery,
  useGetordersProductQuery,
} = ordersApi;
