import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductByTopCategory: builder.query({
      query: (category_id) => `product/get-product-by-category/2/1`,
      keepUnusedDataFor: 100,
    }),

    getSingleProduct: builder.query({
      query: (id) => `product/get-product/${id}`,
      keepUnusedDataFor: 100,
    }),
  }),
});

export const { useGetProductByTopCategoryQuery, useGetSingleProductQuery } =
  productApi;
