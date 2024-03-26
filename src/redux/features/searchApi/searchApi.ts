import { apiSlice } from "../api/apiSlice";

export const searchApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    SearchProduct: builder.mutation({
      query: (data) => ({
        url: `search-product/2`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSearchProductMutation } = searchApi;
