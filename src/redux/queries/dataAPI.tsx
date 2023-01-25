import { apiSlice } from "../slices/apiSlice";


const dataAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: (data: any) => ({
        url: "/launches",
        method: "GET",
      }),
    }),

    getOneData: builder.query({
        query: (data: any) => ({
          url: `/launches/${data}`,
          method: "GET",
        }),
      }),
  }),
});
export const {useGetAllDataQuery, useGetOneDataQuery} = dataAPI