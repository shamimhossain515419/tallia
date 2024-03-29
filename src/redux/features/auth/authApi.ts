import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
    fetchUser: builder.query({
      query: () => "profile",
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "change-password",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useFetchUserQuery,
  useChangePasswordMutation,
  useAddUserMutation,
  useLoginUserMutation,
} = authApi;
