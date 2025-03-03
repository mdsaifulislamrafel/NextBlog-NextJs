// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetBlogsQuery } = baseApi;
